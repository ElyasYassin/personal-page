import Link from "next/link";
import type { SectionLink } from "@/lib/types";
import { Photo } from "@/components/Photo";
import { ArrowUpRight } from "@/components/Marks";

/**
 * One of the five gateways: an image panel that picks up survey contours
 * on hover, a number, a mono tag line, a wide title, one line of copy.
 */
export function EditorialCard({ section, total }: { section: SectionLink; total: number }) {
  return (
    <Link href={section.href} className="group flex h-full gap-5 py-6 sm:flex-col sm:gap-0 sm:py-0">
      <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden bg-ice sm:w-full">
        <Photo
          src={section.image.src}
          alt={section.image.alt}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 112px"
          imageClassName="transition-transform duration-[1200ms] ease-[var(--ease-instrument)] group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="terrain-lines absolute inset-0 text-snow opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-60"
        />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[var(--ease-instrument)] group-hover:scale-x-100" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col sm:pt-5">
        <div className="flex items-center justify-between">
          <span className="label text-muted">
            <span className="text-ink">{section.number}</span> / {String(total).padStart(2, "0")}
          </span>
          <ArrowUpRight className="h-3 w-3 text-ink/60 transition-all duration-500 ease-[var(--ease-instrument)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
        </div>

        <h3 className="display mt-2 text-[1.75rem] font-semibold leading-none sm:mt-4 sm:text-[1.875rem]">{section.title}</h3>
        <p className="label mt-3 text-ocean">{section.tag}</p>
        <p className="mt-3 text-[0.9375rem] leading-[1.55] text-muted">{section.description}</p>
      </div>
    </Link>
  );
}
