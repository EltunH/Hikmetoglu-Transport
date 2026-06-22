/**
 * Ambient page background — sits behind every section (fixed, -z-10).
 * Themeable dot-grid (static, faded toward edges) + two soft amber glows so
 * the navy sections never read as empty. Pure CSS transform/opacity, off the
 * main thread, very low opacity so it never competes with content.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="net-grid absolute inset-0" />
      <div className="aurora absolute -left-[12%] top-[16%] h-[44vh] w-[44vh] rounded-full bg-amber-500/[0.06] blur-[120px]" />
      <div
        className="aurora absolute right-[-10%] top-[58%] h-[40vh] w-[40vh] rounded-full bg-amber-400/[0.05] blur-[120px]"
        style={{ animationDelay: "8s" }}
      />
    </div>
  );
}
