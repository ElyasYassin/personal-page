/** Small instrument graphics. Decorative only (aria-hidden). */

type MarkProps = { className?: string };

export function Crosshair({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M8 0v6M8 10v6M0 8h6M10 8h6" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 24 12" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M2 10 10 2M4 2h6v6" />
    </svg>
  );
}

/**
 * Viewfinder corner brackets around the parent (which must be relative).
 * `size` is the bracket arm length in px.
 */
export function Viewfinder({ inset = "0px", size = 14, className = "" }: { inset?: string; size?: number; className?: string }) {
  const arm = "absolute border-current";
  const s = { width: size, height: size };
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`} style={{ inset }}>
      <span className={`${arm} left-0 top-0 border-l border-t`} style={s} />
      <span className={`${arm} right-0 top-0 border-r border-t`} style={s} />
      <span className={`${arm} bottom-0 left-0 border-b border-l`} style={s} />
      <span className={`${arm} bottom-0 right-0 border-b border-r`} style={s} />
    </div>
  );
}

/**
 * Vertical altitude / depth gauge: summit to sea floor, with sea level
 * marked. Ties the two halves of the site's world together.
 */
const GAUGE_TICKS = [4800, 4000, 3000, 2000, 1000, 0, -1000, -2000, -3000, -4000];

export function AltitudeGauge({ className = "" }: MarkProps) {
  const top = 4800;
  const bottom = -4000;
  const pos = (v: number) => ((top - v) / (top - bottom)) * 100;
  const minor = Array.from({ length: (top - bottom) / 200 + 1 }, (_, i) => top - i * 200);

  return (
    <div aria-hidden="true" className={`relative w-16 ${className}`}>
      <span className="label absolute -top-6 right-0 text-[0.625rem] text-snow/50">Alt · m</span>
      <div className="absolute inset-y-0 right-0 w-px bg-snow/30" />
      {minor.map((v) => (
        <span key={v} className="absolute right-0 h-px w-1.5 bg-snow/30" style={{ top: `${pos(v)}%` }} />
      ))}
      {GAUGE_TICKS.map((v) => (
        <span key={v} className="absolute right-0 flex -translate-y-1/2 items-center gap-2" style={{ top: `${pos(v)}%` }}>
          <span className={`label text-[0.625rem] ${v === 0 ? "text-signal" : "text-snow/55"}`}>
            {v === 0 ? "0 Sea" : v.toLocaleString("en-US").replace(",", " ").replace("-", "−")}
          </span>
          <span className={`h-px ${v === 0 ? "w-5 bg-signal" : "w-3 bg-snow/60"}`} />
        </span>
      ))}
      <span className="label absolute -bottom-6 right-0 text-[0.625rem] text-snow/50">Depth</span>
    </div>
  );
}
