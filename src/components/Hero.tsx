import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { fadeUp } from "./ui/Reveal";
import { RouteMap } from "./RouteMap";
import { transportModes } from "../data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* background layers */}
      <div className="absolute inset-0 bg-navy-950" />
      <motion.div style={{ y }} className="absolute inset-0">
        <RouteMap />
      </motion.div>
      <div className="aurora pointer-events-none absolute -left-1/4 top-1/4 h-[60vh] w-[60vh] rounded-full bg-amber-500/10 blur-[120px]" />
      <div
        className="aurora pointer-events-none absolute -right-1/4 top-0 h-[55vh] w-[55vh] rounded-full bg-navy-500/30 blur-[120px]"
        style={{ animationDelay: "6s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            C.M.R · Global Logistics
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-7 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.98] text-ink"
          >
            BİZİMLƏ DAHA{" "}
            <span className="relative whitespace-nowrap text-amber-400">
              ETİBARLIDIR!
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 8 Q 150 2 297 7" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-xl font-medium text-ink/90 sm:text-2xl"
          >
            Hikmetoglu Transport daşımacılıqda sizin ən etibarlı köməkçinizdir!
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Burada yaxud digər yerdə, dərin təcrübə ilə, zamana və məsafələrə qalib gələrək, nöqtələri
            birləşdirib sizə hər şeyi əl çatan etdik. Dünya təcrübəsində olan təməlləri yenilik dolu və
            professional yanaşmamızla gücləndirdik.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#yuk-sorgusu"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-onaccent shadow-lg shadow-amber-500/20 transition-all duration-300 ease-out-strong hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 active:scale-[0.97]"
            >
              Yük sorğusu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-5 text-muted">
              {transportModes.map(({ Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs font-medium">
                  <Icon className="h-4 w-4 text-amber-400/80" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* right: real cargo photo (lg+) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-navy-700/70 shadow-2xl shadow-navy-950/60">
            <img
              src="/photos/hero.jpg"
              alt="Hikmetoglu Transport yük maşını yolda"
              loading="eager"
              className="h-[30rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-navy-950/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-300 backdrop-blur-sm">
              C.M.R sığortalı daşıma
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute inset-x-0 bottom-7 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border-2 border-muted/40 p-1"
        >
          <span className="block h-1.5 w-full rounded-full bg-amber-400" />
        </motion.div>
      </div>
    </section>
  );
}
