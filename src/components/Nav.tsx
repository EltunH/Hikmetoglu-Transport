import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./ui/Logo";
import { ThemeToggle } from "./ui/ThemeToggle";
import { useTheme } from "../hooks/useTheme";
import { navLinks, langs, type Lang } from "../data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<Lang>("AZ");
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-navy-700/60 bg-navy-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        {/* desktop menu */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch active={activeLang} onChange={setActiveLang} />
          <ThemeToggle theme={theme} toggle={toggleTheme} />
        </div>

        {/* mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} toggle={toggleTheme} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-navy-700 bg-navy-900/50 text-ink transition-colors hover:border-amber-500/50"
            aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-navy-700/60 bg-navy-950/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-navy-800 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-1 px-2">
            {langs.map((lng) => (
              <button
                key={lng}
                onClick={() => setActiveLang(lng)}
                aria-pressed={activeLang === lng}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                  activeLang === lng
                    ? "bg-amber-500 text-onaccent"
                    : "border border-navy-700 text-muted"
                }`}
              >
                {lng}
              </button>
            ))}
          </li>
        </ul>
      </motion.div>
    </header>
  );
}

function LangSwitch({ active, onChange }: { active: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-navy-700 bg-navy-900/50 p-1">
      {langs.map((lng) => (
        <button
          key={lng}
          onClick={() => onChange(lng)}
          aria-pressed={active === lng}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
            active === lng ? "bg-amber-500 text-onaccent" : "text-muted hover:text-ink"
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
