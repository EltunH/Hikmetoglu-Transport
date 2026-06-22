import { Boxes } from "lucide-react";
import { Logo } from "./ui/Logo";
import { navLinks, footerAbout, footerServices } from "../data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy-700/60 bg-navy-950">
      <div className="aurora pointer-events-none absolute -bottom-1/3 left-1/2 h-[40vh] w-[60vh] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          BİZƏ DAHA YAXIN OLUN
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Hikmetoglu Transport daşımacılıqda sizin ən etibarlı köməkçinizdir!
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
              HAQQIMIZDA
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {footerAbout.map((t) => (
                <li key={t}>
                  <a href="#istiqametlerimiz" className="transition-colors hover:text-amber-300">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
              XİDMƏTLƏRİMİZ
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {footerServices.map((t) => (
                <li key={t}>
                  <a href="#istiqametlerimiz" className="transition-colors hover:text-amber-300">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
              <Boxes className="h-4 w-4" />
              Linklər
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href="#istiqametlerimiz" className="transition-colors hover:text-amber-300">
                  İstiqamətlərimiz
                </a>
              </li>
              <li>
                <a href="#yuk-sorgusu" className="transition-colors hover:text-amber-300">
                  Yük sorğusu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-700/60 pt-7 sm:flex-row">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-amber-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted/70">© {new Date().getFullYear()} Hikmetoglu Transport</p>
        </div>
      </div>
    </footer>
  );
}
