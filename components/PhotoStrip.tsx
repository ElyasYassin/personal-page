import Link from "next/link";
import type { Photo as PhotoType } from "@/lib/types";
import { Container } from "@/components/Container";
import { FilmFrame } from "@/components/FilmFrame";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Marks";

/**
 * "Selected Frames": a horizontal run of photographs at mixed aspect ratios,
 * some cut from a contact sheet, like leafing through years of negatives.
 * The whole strip links to /photography.
 */
export function PhotoStrip({ photos }: { photos: PhotoType[] }) {
  return (
    <section aria-labelledby="frames-title" className="border-t rule bg-paper-deep/60 pb-14 pt-12 sm:pb-16">
      <Container>
        <SectionHeading
          id="frames-title"
          title="Selected Frames"
          aside={
            <Link href="/photography" className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-burgundy">
              From the Archive
              <ArrowRight className="h-2 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          }
        />
      </Container>

      <Link href="/photography" aria-label="View the photography archive" className="group/strip block">
        <div className="scroll-quiet mt-8 overflow-x-auto pb-4">
          <ul className="flex w-max items-end gap-4 px-5 sm:gap-5 sm:px-8 lg:px-12">
            {photos.map((photo, i) => (
              <StripFrame key={photo.id} photo={photo} index={i} />
            ))}
          </ul>
        </div>
      </Link>
    </section>
  );
}

const STRIP_HEIGHT = "h-[200px] sm:h-[250px] lg:h-[290px]";

function StripFrame({ photo, index }: { photo: PhotoType; index: number }) {
  const sizes = "(min-width: 1024px) 440px, 320px";
  // The third frame gets the arch mask: a quiet nod to plastered arcades.
  const arch = index === 2 && !photo.filmFrame && photo.aspect <= 1;
  // Frames sit at slightly different heights, like prints laid on a table.
  const offset = index % 3 === 1 ? "lg:-translate-y-3" : index % 3 === 2 ? "lg:translate-y-1" : "";

  return (
    <li
      className={`shrink-0 transition-transform duration-700 ease-[var(--ease-editorial)] group-hover/strip:translate-y-0 ${offset}`}
    >
      <figure>
        <div className={`${STRIP_HEIGHT} grain overflow-hidden`} style={{ aspectRatio: photo.filmFrame ? photo.aspect * 0.92 : photo.aspect }}>
          {photo.filmFrame ? (
            <FilmFrame variant="contact" frameNumber={String(index + 12).padStart(2, "0")}>
              <Photo src={photo.src} alt={photo.alt} sizes={sizes} />
            </FilmFrame>
          ) : (
            <div className={`relative h-full w-full overflow-hidden ${arch ? "mask-arch" : ""}`}>
              <Photo src={photo.src} alt={photo.alt} sizes={sizes} />
            </div>
          )}
        </div>
        <figcaption className="label mt-2.5 flex justify-between gap-4 text-[0.5625rem] text-muted">
          <span>{photo.id}</span>
          {photo.date && <span>{photo.date}</span>}
        </figcaption>
      </figure>
    </li>
  );
}
