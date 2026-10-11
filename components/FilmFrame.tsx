/**
 * Frames a photograph.
 * - "plate":   thin off-white mount with a hairline border (print on a page)
 * - "contact": dark film base with sprocket holes and edge numbers
 *              (a frame cut from a contact sheet)
 */
export function FilmFrame({
  children,
  variant = "plate",
  frameNumber,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "plate" | "contact";
  frameNumber?: string;
  className?: string;
}) {
  if (variant === "contact") {
    return (
      <div className={`flex h-full flex-col bg-film px-1.5 ${className}`}>
        <Sprockets />
        <div className="relative min-h-0 flex-1">{children}</div>
        <div className="flex items-center justify-between py-[3px]">
          <span className="font-mono text-[0.5rem] tracking-[0.12em] text-[#d9a75f]/80">{frameNumber}</span>
          <span className="font-mono text-[0.5rem] tracking-[0.12em] text-[#d9a75f]/60">▸ {frameNumber}A</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`border rule bg-[#f7f3ea] p-2 sm:p-2.5 ${className}`}>
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function Sprockets() {
  return (
    <div aria-hidden="true" className="flex h-3 items-center justify-between gap-1 overflow-hidden">
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className="h-[5px] w-[7px] shrink-0 rounded-[1px] bg-paper/80" />
      ))}
    </div>
  );
}
