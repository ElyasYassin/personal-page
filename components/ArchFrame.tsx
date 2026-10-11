import { ArchOutline, archClip, type ArchShape } from "@/components/ArchDefs";

/**
 * A photograph set into a horseshoe-arched niche in a tiled wall: the outer
 * panel carries zellige linework and a double fillet (the alfiz), and the
 * arch-shaped print mount sits inside it.
 */
export function ArchFrame({
  children,
  aspect,
  shape = "tall",
  className = "",
}: {
  children: React.ReactNode;
  /** Aspect ratio (w / h) of the photograph area. */
  aspect: number;
  shape?: ArchShape;
  className?: string;
}) {
  return (
    <div
      className={`zellige-strong border border-ink/45 bg-paper-deep p-3 outline outline-1 -outline-offset-[7px] outline-ink/25 sm:p-4 ${className}`}
    >
      <div className="relative">
        <div className="bg-[#f7f3ea] p-2 sm:p-2.5" style={{ clipPath: archClip(shape) }}>
          <div className="grain relative" style={{ aspectRatio: aspect, clipPath: archClip(shape) }}>
            {children}
          </div>
        </div>
        <ArchOutline shape={shape} className="text-ink/50" />
      </div>
    </div>
  );
}
