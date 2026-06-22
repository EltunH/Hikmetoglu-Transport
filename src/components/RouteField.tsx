import { useEffect, useRef } from "react";

/**
 * Ambient global-network field — full-page canvas behind all content.
 * Scattered hubs are linked by faint route lines; amber "shipment" dots flow
 * hub-to-hub through the network (routing across the 5-continent reach),
 * picking a new outgoing route at every hub. Distinct from the sibling Kavkaz
 * single-direction corridor. Monochrome amber so it reads on both navy and
 * light themes. Performance-budgeted: capped counts, DPR-aware, paused
 * off-screen, single static frame under prefers-reduced-motion.
 */

const AMBER = "245,158,11"; // --color-amber-500 rgb

// hub anchors in normalized [0..1] space → remapped to pixels on resize
const HUBS_N: [number, number][] = [
  [0.08, 0.22], [0.27, 0.12], [0.46, 0.28], [0.7, 0.16], [0.9, 0.3],
  [0.16, 0.55], [0.38, 0.62], [0.6, 0.5], [0.82, 0.62],
  [0.12, 0.85], [0.34, 0.9], [0.55, 0.8], [0.78, 0.9], [0.94, 0.78],
];

type Dot = { e: number; t: number; sp: number; rev: boolean; trail: number };

export function RouteField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let hubs: [number, number][] = [];
    let edges: [number, number][] = [];
    let adj: number[][] = []; // hub -> edge indices
    let dots: Dot[] = [];
    let raf = 0;
    let running = true;
    let t0 = 0;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    function buildGraph() {
      hubs = HUBS_N.map(([nx, ny]) => [nx * w, ny * h]);
      // connect each hub to its 2 nearest neighbours (dedup)
      const seen = new Set<string>();
      edges = [];
      adj = hubs.map(() => []);
      for (let i = 0; i < hubs.length; i++) {
        const d = hubs
          .map((_, j) => j)
          .filter((j) => j !== i)
          .sort((a, b) => dist2(i, a) - dist2(i, b))
          .slice(0, 2);
        for (const j of d) {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (seen.has(key)) continue;
          seen.add(key);
          const ei = edges.length;
          edges.push([i, j]);
          adj[i].push(ei);
          adj[j].push(ei);
        }
      }
      // shipment dots — roughly one per route so the network feels alive
      const count = Math.min(48, Math.max(18, edges.length + Math.floor(w / 130)));
      dots = Array.from({ length: count }, () => ({
        e: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        sp: rand(0.10, 0.26), // fraction of an edge per second
        rev: Math.random() < 0.5,
        trail: rand(0.12, 0.28), // fraction of edge length
      }));
    }

    function dist2(i: number, j: number) {
      const dx = hubs[i][0] - hubs[j][0];
      const dy = hubs[i][1] - hubs[j][1];
      return dx * dx + dy * dy;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGraph();
    }

    function draw(now: number) {
      const dt = t0 ? Math.min((now - t0) / 1000, 0.05) : 0.016;
      t0 = now;
      ctx!.clearRect(0, 0, w, h);

      // route lines
      ctx!.lineWidth = 1;
      ctx!.strokeStyle = `rgba(${AMBER},0.17)`;
      for (const [a, b] of edges) {
        ctx!.beginPath();
        ctx!.moveTo(hubs[a][0], hubs[a][1]);
        ctx!.lineTo(hubs[b][0], hubs[b][1]);
        ctx!.stroke();
      }

      // hubs (with a soft halo so they read as ports/cities)
      for (const [hx, hy] of hubs) {
        ctx!.beginPath();
        ctx!.arc(hx, hy, 9, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${AMBER},0.06)`;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(hx, hy, 2.6, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${AMBER},0.6)`;
        ctx!.fill();
      }

      // shipment dots flowing through the network, each with a fading trail
      ctx!.lineCap = "round";
      for (const d of dots) {
        const [a, b] = edges[d.e];
        const from = d.rev ? b : a;
        const to = d.rev ? a : b;
        if (!reduce) d.t += d.sp * dt;

        if (d.t >= 1) {
          // arrived at a hub → continue down a random outgoing route
          const opts = adj[to];
          const ne = opts[Math.floor(Math.random() * opts.length)];
          d.e = ne;
          d.rev = edges[ne][1] === to; // leave the hub we just reached
          d.t = 0;
          continue;
        }

        const fx = hubs[from][0];
        const fy = hubs[from][1];
        const tx = hubs[to][0];
        const ty = hubs[to][1];
        const x = fx + (tx - fx) * d.t;
        const y = fy + (ty - fy) * d.t;
        const tt = Math.max(0, d.t - d.trail);
        const trx = fx + (tx - fx) * tt;
        const try_ = fy + (ty - fy) * tt;

        const grad = ctx!.createLinearGradient(trx, try_, x, y);
        grad.addColorStop(0, `rgba(${AMBER},0)`);
        grad.addColorStop(1, `rgba(${AMBER},0.5)`);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.moveTo(trx, try_);
        ctx!.lineTo(x, y);
        ctx!.stroke();

        ctx!.beginPath();
        ctx!.arc(x, y, 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${AMBER},0.95)`;
        ctx!.fill();
      }

      if (running && !reduce) raf = requestAnimationFrame(draw);
    }

    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduce) {
        t0 = 0;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
