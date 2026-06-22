export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#hero"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Hikmetoglu Transport - əsas səhifə"
    >
      <img
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        className="h-10 w-auto shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        Hikmetoglu <span className="text-amber-400">Transport</span>
      </span>
    </a>
  );
}
