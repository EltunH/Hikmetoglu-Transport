import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { contactCards } from "../data/site";

const VIDEO_SHARE_URL = "https://youtu.be/ChObLxT3Y5k";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(VIDEO_SHARE_URL);
    } catch {
      const el = document.createElement("textarea");
      el.value = VIDEO_SHARE_URL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Baku · Azerbaijan
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
              BİZİMLƏ ƏLAQƏ
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="group relative overflow-hidden rounded-3xl border border-navy-700/70 bg-navy-900/60 p-2 shadow-2xl shadow-black/40 ring-1 ring-amber-500/10 transition-colors hover:border-amber-500/40">
              <div className="aurora pointer-events-none absolute -inset-px rounded-3xl bg-amber-500/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/ChObLxT3Y5k?rel=0"
                  title="Hikmetoglu Transport"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
              <p className="text-sm text-muted">Hikmetoglu Transport — şirkət təqdimatı</p>
              <button
                type="button"
                onClick={copyLink}
                aria-live="polite"
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                  copied
                    ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                    : "border-navy-700 bg-navy-800/50 text-muted hover:border-amber-500/50 hover:text-amber-300"
                }`}
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Link2 className="h-3.5 w-3.5" />}
                {copied ? "Kopyalandı" : "Linki kopyala"}
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ Icon, label, lines }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-navy-700/70 bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:bg-navy-800/80">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber-500/10 ring-1 ring-amber-500/20 transition-all group-hover:bg-amber-500/20">
                  <Icon className="h-6 w-6 text-amber-400" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-wide text-muted">
                  {label}
                </h3>
                <div className="mt-2 space-y-1">
                  {lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-sm leading-relaxed text-ink transition-colors hover:text-amber-300"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="text-sm leading-relaxed text-ink">
                        {line.text}
                      </p>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
