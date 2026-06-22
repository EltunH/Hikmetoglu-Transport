import { Reveal } from "./ui/Reveal";
import { continents } from "../data/site";

export function Directions() {
  return (
    <section id="istiqametlerimiz" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Global · 5 qitə
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            İSTİQAMƏTLƏRİMİZ
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Hikmetoglu Transport olaraq, dünyanın istənilən nöqtəsinə daşıma xidmətini göstəririk. Sizin
              istəyinizdən və yükün olduğu yerdən asılı olaraq yüklərinizi quru, dəniz, hava və dəmiryolu
              vasitəsilə daşınması həyata keçirilir. İnnovativ texnologiyalardan istifadə və peşəkar
              kollektivimiz sayəsində sizin risklərinizi minimuma endiririk.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Mütəxəssislərdən ibarət komandamız hər zaman, kəsintisiz nəqliyyat və daşıma əməliyyatlarını
              zamanında yerinə yetirmək üçün sizinlə birlikdə işləyir. Məqsədimiz sizə və yüklərinizə
              güvənlilik baxımından ən üst xidmət göstərməkdir.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {continents.map(({ name, Icon }, i) => (
            <Reveal key={name} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-700/70 bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:bg-navy-800/80 hover:shadow-xl hover:shadow-navy-950/60">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-500/0 blur-2xl transition-all duration-500 group-hover:bg-amber-500/20" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-amber-500/10 ring-1 ring-amber-500/20 transition-all group-hover:bg-amber-500/20 group-hover:ring-amber-500/40">
                  <Icon className="h-6 w-6 text-amber-400" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-ink">{name}</h3>
                <span className="relative mt-3 inline-block h-px w-8 bg-amber-500/50 transition-all duration-300 group-hover:w-14" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
