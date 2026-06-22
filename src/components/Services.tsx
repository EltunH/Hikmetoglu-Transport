import { Reveal } from "./ui/Reveal";
import { TruckScene } from "./TruckScene";
import { services } from "../data/site";

export function Services() {
  return (
    <section id="xidmetlerimiz" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-navy-950/70" />
      <div className="dot-grid absolute inset-0 opacity-[0.6]" />
      <div className="aurora pointer-events-none absolute -right-1/4 top-0 h-[55vh] w-[55vh] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* left: animated TIR */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <TruckScene />
            </div>
          </Reveal>

          {/* right: heading + service list */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                Quru · Hava · Dəniz · Dəmiryolu
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                Xidmətlərimiz
              </h2>
            </Reveal>

            <div className="mt-9 flex flex-col gap-3">
              {services.map(({ no, name, Icon }, i) => (
                <Reveal key={name} delay={i * 0.06}>
                  <div className="group flex items-center gap-4 rounded-2xl border border-navy-700/70 bg-navy-800/40 p-4 transition-all duration-300 ease-out-strong hover:-translate-y-0.5 hover:border-amber-500/50 hover:bg-navy-800/80 active:scale-[0.99]">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-500/10 ring-1 ring-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-onaccent">
                      <Icon className="h-6 w-6 text-amber-400 transition-colors duration-300 group-hover:text-onaccent" />
                    </span>
                    <span className="flex-1 font-display text-base font-medium text-ink sm:text-lg">
                      {name}
                    </span>
                    <span className="font-display text-sm font-semibold text-muted/50 transition-colors group-hover:text-amber-400">
                      {no}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
