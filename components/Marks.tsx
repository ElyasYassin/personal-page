/**
 * Drafting marks drawn as inline SVG: registration targets, crop marks,
 * crosshairs, and the small star ornament. Decorative only (aria-hidden).
 */

type MarkProps = { className?: string };

export function RegistrationMark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="0.75">
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 0v24M0 12h24" />
    </svg>
  );
}

export function Crosshair({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="0.75">
      <path d="M8 0v6M8 10v6M0 8h6M10 8h6" />
    </svg>
  );
}

/** L-shaped crop marks at each corner of the parent (parent must be relative). */
export function CropMarks({ inset = "-12px", className = "" }: { inset?: string; className?: string }) {
  const arm = "absolute h-3 w-3 border-current";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`} style={{ inset }}>
      <span className={`${arm} left-0 top-0 border-l border-t`} />
      <span className={`${arm} right-0 top-0 border-r border-t`} />
      <span className={`${arm} bottom-0 left-0 border-b border-l`} />
      <span className={`${arm} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

/** Eight-point star (two overlapping squares) — used as a quiet ornament. */
export function StarOrnament({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="0.9">
      <rect x="6" y="6" width="12" height="12" />
      <rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  );
}

/**
 * A horizontal divider loosely drawn from wrought-iron balcony railings:
 * a rail with small linked loops between balusters.
 */
export function IronworkDivider({ className = "" }: MarkProps) {
  return (
    <svg className={className} aria-hidden="true" width="100%" height="14">
      <defs>
        <pattern id="ironwork" width="28" height="14" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.75">
            <path d="M0 1h28M0 13h28M0 1v12" />
            <path d="M14 7c-3.5 0-5-2.5-5-6M14 7c3.5 0 5-2.5 5-6M14 7c-3.5 0-5 2.5-5 6M14 7c3.5 0 5 2.5 5 6" />
            <circle cx="14" cy="7" r="1.25" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="14" fill="url(#ironwork)" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 24 12" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}
