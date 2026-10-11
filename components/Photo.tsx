import Image from "next/image";
import { publicFileExists } from "@/lib/images";
import { Crosshair } from "@/components/Marks";

type PhotoProps = {
  src: string;
  alt: string;
  /** Passed to next/image so the right size is downloaded. */
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

/**
 * Fills its (positioned) parent with a photograph. While the file doesn't
 * exist yet, renders a drafting-sheet placeholder that names the exact path
 * to drop the image into — so the design never depends on stand-in artwork.
 */
export function Photo({ src, alt, sizes, priority, className = "", imageClassName = "" }: PhotoProps) {
  if (publicFileExists(src)) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt || "Photograph placeholder"}
      className={`drafting-grid absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden bg-paper-deep text-muted ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-sand/40 via-transparent to-ink/[0.06] ${imageClassName}`} />
      <Crosshair className="relative h-5 w-5 text-ink/40" />
      <span className="label relative max-w-[85%] truncate text-center text-[0.5625rem] normal-case tracking-[0.06em] text-muted/90">{src}</span>
    </div>
  );
}
