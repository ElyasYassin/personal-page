import { sections } from "@/data/sections";
import { Container } from "@/components/Container";
import { EditorialCard } from "@/components/EditorialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/** The five gateways into the site, laid out like a table of contents. */
export function SectionIndex() {
  return (
    <section id="sections" aria-labelledby="sections-title" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading id="sections-title" title="Contents" aside={<>Nos. 01 — {String(sections.length).padStart(2, "0")}</>} />
        <ol className="grid grid-cols-1 divide-y divide-ink/15 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:divide-y-0 lg:-mx-5 lg:grid-cols-5 lg:gap-x-0">
          {sections.map((section, i) => (
            <Reveal
              as="li"
              key={section.href}
              delay={i * 80}
              className="lg:border-l lg:rule lg:px-5 lg:first:border-l-transparent"
            >
              <EditorialCard section={section} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
