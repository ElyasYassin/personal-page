import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Crosshair } from "@/components/Marks";

/** Temporary page body for sections that haven't been built yet. */
export function ForthcomingPage({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading title={`${number} — ${title}`} aside="In preparation" />
      <div className="grid gap-10 py-16 lg:grid-cols-12">
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] lg:col-span-7">{title}</h1>
        <div className="lg:col-span-4 lg:col-start-9">
          <Crosshair className="mb-6 h-4 w-4 text-burgundy" />
          <p className="text-[1.0625rem] leading-relaxed text-ink/85">{description}</p>
          <p className="label mt-6 text-muted">This section is being typeset.</p>
          <Link href="/" className="caps link-line mt-10 inline-block pb-1 [background-size:100%_1px]">
            ← Return home
          </Link>
        </div>
      </div>
    </Container>
  );
}
