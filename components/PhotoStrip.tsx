import Link from "next/link";
import type { Photo as PhotoType } from "@/lib/types";
import { Container } from "@/components/Container";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Viewfinder } from "@/components/Marks";

/**
 * "Field Log": a horizontal run of photographs at mixed aspect ratios with
 * mono readouts. Viewfinder brackets frame each one on hover. The whole
 * strip links to /photography.
 */
export function PhotoStrip({ photos }: { photos: PhotoType[] }) {
  return (
    <section aria-labelledby="frames-title" className="border-t rule bg-ice/60 pb-14 pt-12 sm:pb-20">
      <Container>
        <SectionHeading
          id="frames-title"
          title="Field log"
          aside={
            <Link href="/photography" className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-signal">
              Selected frames
              <ArrowRight className="h-2 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          }
        />
      </Container>

      <Link href="/photography" aria-label="View the photography archive" className="block">
        <div className="scroll-quiet mt-8 overflow-x-auto pb-4">
          <ul className="flex w-max items-end gap-4 px-5 sm:gap-5 sm:px-8 lg:px-12">
            {photos.map((photo, i) => (
              <li key={photo.id} className="group/frame shrink-0">
                <figure>
                  <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]" style={{ aspectRatio: photo.aspect }}>
                    <div className="grain absolute inset-0 overflow-hidden">
                      <Photo
                        src={photo.src}
                        alt={photo.alt}
                        sizes="(min-width: 1024px) 640px, 420px"
                        imageClassName="transition-transform duration-[1200ms] ease-[var(--ease-instrument)] group-hover/frame:scale-[1.03]"
                      />
                    </div>
                    <Viewfinder
                      inset="8px"
                      size={12}
                      className="z-[2] text-snow opacity-0 transition-opacity duration-500 group-hover/frame:opacity-100"
                    />
                  </div>
                  <figcaption className="label mt-2.5 flex justify-between gap-4 text-muted">
                    <span>
                      <span className="text-ink">{String(i + 1).padStart(2, "0")}</span>&nbsp;&nbsp;{photo.id}
                    </span>
                    <span className="truncate">{[photo.location, photo.elevation, photo.date].filter(Boolean).join(" · ")}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </section>
  );
}
