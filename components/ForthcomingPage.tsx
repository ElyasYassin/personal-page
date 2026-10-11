import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

/** Temporary page body for sections that haven't been built yet. */
export function ForthcomingPage({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading title={`${number} — ${title}`} aside="In progress" />
      <div className="grid gap-10 py-16 lg:grid-cols-12">
        <h1 className="display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.92] lg:col-span-7">{title}</h1>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="text-[1.0625rem] leading-relaxed text-ink/80">{description}</p>
          <p className="label mt-6 text-ocean">This section is being built.</p>
          <Link href="/" className="caps link-line mt-10 inline-block pb-1 [background-size:100%_1px] hover:text-signal">
            ← Back home
          </Link>
        </div>
      </div>
    </Container>
  );
}
