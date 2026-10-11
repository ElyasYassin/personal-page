/**
 * Shared clip paths, rendered once in the layout. Horseshoe arches as in
 * Andalusian and Maghrebi architecture: the arc continues past the
 * half-circle before landing on jambs set slightly inside its widest point.
 *
 * Paths are in objectBoundingBox units, one per box proportion, so the arc
 * stays round rather than stretching.
 *   tall   — boxes around 4:5 (hero plate)
 *   square — boxes around 1:1 (archive frames)
 */
export const ARCH_PATHS = {
  tall: "M0.06,1 L0.06,0.59 A0.5,0.4 0 1 1 0.94,0.59 L0.94,1 Z",
  square: "M0.06,1 L0.06,0.7375 A0.5,0.5 0 1 1 0.94,0.7375 L0.94,1 Z",
} as const;

export type ArchShape = keyof typeof ARCH_PATHS;

export function archClip(shape: ArchShape) {
  return `url(#arch-${shape})`;
}

export function ArchDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        {Object.entries(ARCH_PATHS).map(([name, d]) => (
          <clipPath key={name} id={`arch-${name}`} clipPathUnits="objectBoundingBox">
            <path d={d} />
          </clipPath>
        ))}
      </defs>
    </svg>
  );
}

/** Hairline drawn along the arch edge (clip paths can't carry a border). */
export function ArchOutline({ shape, className = "" }: { shape: ArchShape; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible ${className}`}
    >
      <path d={ARCH_PATHS[shape]} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
