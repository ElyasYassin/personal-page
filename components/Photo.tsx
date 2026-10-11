import Image from "next/image";
import { publicFileExists } from "@/lib/images";
import { Crosshair } from "@/components/Marks";

type PhotoProps = {
  src: string;
  alt: string;
  /** Passed to next/image so the right size is downloaded. */
  sizes: string;
  priority?: boolean;
  /** Placeholder surface: "light" on snow pages, "dark" on instrument surfaces. */
  tone?: "light" | "dark";
  /** Where the placeholder prints its file path: centred, or tucked into a corner. */
  placeholderLabel?: "center" | "corner";
  className?: string;
  imageClassName?: string;
};

/** Stable pseudo-random number in [0, 1) from a string, so each placeholder shows a different stretch of terrain. */
function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return ((h >>> 0) % 1000) / 1000;
}

/**
 * Fills its (positioned) parent with a photograph. Until the file exists,
 * renders a survey-map placeholder that names the exact path to drop the
 * image into — so the design never depends on stand-in artwork.
 */
export function Photo({
  src,
  alt,
  sizes,
  priority,
  tone = "light",
  placeholderLabel = "center",
  className = "",
  imageClassName = "",
}: PhotoProps) {
  if (publicFileExists(src)) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imageClassName}`} />
      </div>
    );
  }

  const dark = tone === "dark";
  const h = hash(src);
  const terrainStyle = {
    maskSize: "260%",
    maskPosition: `${Math.round(h * 100)}% ${Math.round(((h * 7) % 1) * 100)}%`,
  };
  return (
    <div
      role="img"
      aria-label={alt || "Photograph placeholder"}
      className={`absolute inset-0 overflow-hidden ${dark ? "bg-slate text-snow" : "bg-ice text-ink"} ${className}`}
    >
      <div className={`absolute inset-0 ${imageClassName}`}>
        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-[radial-gradient(120%_90%_at_75%_10%,#2b3c45_0%,#1a252b_45%,#0d1316_100%)]"
              : "bg-[linear-gradient(160deg,#eef1f0_0%,#dfe5e4_60%,#d3dcdc_100%)]"
          }`}
        />
        <div className={`terrain-lines absolute inset-0 ${dark ? "opacity-[0.16]" : "opacity-[0.22]"}`} style={terrainStyle} />
      </div>
      <div
        className={`relative flex h-full flex-col gap-3 ${
          placeholderLabel === "corner" ? "items-end justify-end p-6 pb-24 sm:p-10 sm:pb-28" : "items-center justify-center"
        }`}
      >
        {placeholderLabel === "center" && <Crosshair className={`h-4 w-4 ${dark ? "text-snow/50" : "text-ink/45"}`} />}
        <span className={`label max-w-[85%] truncate text-center normal-case tracking-normal ${dark ? "text-snow/55" : "text-muted"}`}>
          {src}
        </span>
      </div>
    </div>
  );
}
