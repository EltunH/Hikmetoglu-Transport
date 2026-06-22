import { Reveal } from "./ui/Reveal";
import { ArrowRight, Globe2 } from "lucide-react";

/**
 * Full-bleed cinematic banner band — a real highway/cargo photograph with a
 * navy+amber overlay and a single confident statement. Breaks up the page and
 * grounds the abstract route graphics in real operations.
 */
export function Banner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photos/banner.jpg')" }}
        aria-hidden
      />
      {/* legibility overlay — strong on the left (text), clears to show the photo on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/45 to-navy-950/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/15" />

      <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-5 py-24 sm:px-8">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <Globe2 className="h-3.5 w-3.5" />
              5 qitə · qapıdan-qapıya
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] text-ink sm:text-5xl">
              Yükünüz hara getsə, <span className="text-amber-400">biz oradayıq.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/85 sm:text-lg">
              Quru, dəniz, hava və dəmiryolu — bütün marşrutlarda kəsintisiz, sığortalı və
              vaxtında daşıma. Bir tərəfdaş, sonsuz istiqamət.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href="#yuk-sorgusu"
              className="press-scale mt-9 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-onaccent shadow-lg shadow-amber-500/20 transition-all duration-300 ease-out-strong hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Yük sorğusu göndər
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
