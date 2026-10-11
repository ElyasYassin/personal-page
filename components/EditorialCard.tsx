import Link from "next/link";
import type { SectionLink } from "@/lib/types";
import { Photo } from "@/components/Photo";
import { ArrowRight } from "@/components/Marks";

/**
 * A section of the publication rather than a "card": an image plate, a
 * folio number, a serif title, one line of description, and an accent rule
 * that turns into a tiled band on hover.
 */
export function EditorialCard({ section }: { section: SectionLink }) {
  const accent = section.accent === "burgundy" ? "bg-burgundy" : "bg-forest";

  return (
    <Link
      href={section.href}
      className="group flex h-full gap-5 py-6 sm:flex-col sm:gap-0 sm:py-0"
    >
      <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden bg-paper-deep sm:w-full">
        <Photo
          src={section.image.src}
          alt={section.image.alt}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 112px"
          imageClassName="transition-transform duration-[1400ms] ease-[var(--ease-editorial)] group-hover:scale-[1.035]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:pt-5">
        <div className="flex items-center justify-between">
          <span className="label text-muted">{section.number}</span>
          <ArrowRight className="h-2.5 w-5 text-ink/70 transition-all duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1 group-hover:text-burgundy" />
        </div>

        <h3 className="mt-2 font-display text-[1.875rem] leading-[1.05] text-ink sm:mt-3 sm:text-[2.125rem]">
          {section.title}
        </h3>

        <div aria-hidden="true" className="relative mt-3 h-[6px] w-full">
          <span className={`absolute left-0 top-[2px] h-px w-6 ${accent} transition-[width] duration-700 ease-[var(--ease-editorial)] group-hover:w-14`} />
          <span className="tile-band absolute left-16 top-0 h-[6px] w-0 bg-[length:6px_6px] opacity-0 transition-all duration-700 ease-[var(--ease-editorial)] group-hover:w-12 group-hover:opacity-70" />
        </div>

        <p className="mt-3 text-[0.875rem] leading-[1.6] text-muted">{section.description}</p>
      </div>
    </Link>
  );
}
