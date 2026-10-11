import { sections } from "@/data/sections";
import { Container } from "@/components/Container";
import { EditorialCard } from "@/components/EditorialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/** The five gateways into the site. */
export function SectionIndex() {
  return (
    <section id="sections" aria-labelledby="sections-title" className="scroll-mt-14 py-16 sm:py-24">
      <Container>
        <SectionHeading id="sections-title" title="Index" aside={<>{sections.length} sections</>} />
        <ol className="grid grid-cols-1 divide-y divide-ink/12 sm:mt-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 sm:divide-y-0 lg:grid-cols-5 lg:gap-x-5">
          {sections.map((section, i) => (
            <Reveal as="li" key={section.href} delay={i * 70}>
              <EditorialCard section={section} total={sections.length} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
