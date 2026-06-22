import { Sun, Moon } from "lucide-react";
import { type Theme } from "../../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  toggle: () => void;
  className?: string;
};

export function ThemeToggle({ theme, toggle, className = "" }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "İşıqlı rejimə keç" : "Qaranlıq rejimə keç"}
      aria-pressed={theme === "light"}
      className={`group grid h-10 w-10 place-items-center rounded-full border border-navy-700 bg-navy-900/50 text-ink transition-all duration-300 ease-out-strong hover:border-amber-500/50 active:scale-90 ${className}`}
    >
      <span className="relative h-5 w-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 text-amber-400 transition-all duration-300 ${
            theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 text-amber-400 transition-all duration-300 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
