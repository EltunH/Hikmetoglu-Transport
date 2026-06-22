import { Reveal } from "./ui/Reveal";
import { stats, advantages } from "../data/site";

// real operation photos, cycled across the advantage cards
const advPhotos = [
  "/photos/adv-road.jpg",
  "/photos/adv-warehouse.jpg",
  "/photos/adv-sea.jpg",
  "/photos/adv-air.jpg",
  "/photos/adv-rail.jpg",
  "/photos/adv-yard.jpg",
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden border-y border-navy-700/50 bg-navy-900/65 py-24 sm:py-32">
      <div className="aurora pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[60vh] -translate-x-1/2 rounded-full bg-amber-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* trust strip — real figures */}
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-700/40 lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-navy-900 px-6 py-8 text-center">
                <div className="font-display text-4xl font-bold tracking-tight text-amber-400 sm:text-5xl">
                  {value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* heading */}
        <Reveal delay={0.05}>
          <div className="mt-20 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Etibar · Təcrübə · Məsuliyyət
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
              Üstünlüklərimiz
            </h2>
          </div>
        </Reveal>

        {/* advantage cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/70 bg-navy-800/40 transition-all duration-300 ease-out-strong hover:-translate-y-1 hover:border-amber-500/40 hover:bg-navy-800/70">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={advPhotos[i % advPhotos.length]}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out-strong group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-xl border border-amber-500/30 bg-navy-950/70 backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-500/20 group-hover:ring-1 group-hover:ring-amber-500/40">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 pt-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
