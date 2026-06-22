/** Decorative animated world-route backdrop for the hero. */
export function RouteMap() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1f3a6b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#050b18" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#glow)" />

      {/* faint grid (themeable stroke via .svg-grid) */}
      <g className="svg-grid" strokeWidth="1" opacity="0.5">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
        ))}
      </g>

      {/* animated routes */}
      <g className="route-dash" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
        <path d="M120 620 C 350 480, 520 540, 700 360 S 980 180, 1080 150" />
        <path d="M90 300 C 300 360, 460 220, 640 280 S 940 420, 1110 360" />
        <path d="M180 700 C 420 660, 560 500, 820 520 S 1020 600, 1140 540" />
      </g>

      {/* nodes */}
      {[
        [120, 620],
        [700, 360],
        [1080, 150],
        [90, 300],
        [640, 280],
        [1110, 360],
        [820, 520],
        [1140, 540],
      ].map(([cx, cy], i) => (
        <g key={i} className="pulse-node" style={{ animationDelay: `${i * 0.4}s` }}>
          <circle cx={cx} cy={cy} r="7" fill="#fbbf24" />
          <circle cx={cx} cy={cy} r="14" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}
