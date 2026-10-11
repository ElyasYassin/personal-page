import Link from "next/link";
import { hero } from "@/data/home";
import { Container } from "@/components/Container";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { AltitudeGauge, ArrowRight, Viewfinder } from "@/components/Marks";

/**
 * Full-bleed photograph on a dark instrument surface: headline over a
 * scrim, survey contours, a summit-to-sea-floor gauge, and a spec bar.
 */
export function Hero() {
  const { image } = hero;
  const readout = [image.location, image.elevation, image.date].filter(Boolean).join("  ·  ");

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink text-snow">
      {/* Photograph + scrims + contours */}
      <div className="grain absolute inset-0 -z-10">
        <Photo src={image.src} alt={image.alt} tone="dark" placeholderLabel="corner" priority sizes="100vw" />
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-t from-ink via-transparent to-ink/30" />
        <div aria-hidden="true" className="terrain-lines absolute inset-0 z-[1] text-snow opacity-[0.07]" />
      </div>

      <Container className="relative flex min-h-[min(92svh,960px)] flex-col pt-10 sm:pt-14">
        <Viewfinder inset="24px 12px 0 12px" size={18} className="hidden text-snow/35 lg:block" />

        {/* Top readout row */}
        <div className="flex items-start justify-between gap-6 lg:px-8 lg:pt-6">
          <p className="label flex flex-wrap gap-x-2 gap-y-1 text-snow/70">
            {hero.kicker.map((word, i) => (
              <span key={word} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-signal">/</span>}
                {word}
              </span>
            ))}
          </p>
          <p className="label hidden shrink-0 text-right text-snow/50 sm:block">
            {image.id}
            {readout && <span className="block text-snow/70">{readout}</span>}
          </p>
        </div>

        {/* Headline + intro */}
        <div className="relative flex flex-1 items-end gap-10 pb-14 pt-16 lg:px-8 lg:pb-20">
          <div className="max-w-[56rem] flex-1">
            <Reveal>
              <h1
                id="hero-title"
                className="display text-[clamp(2.9rem,7.4vw,7.25rem)] font-semibold leading-[0.92] tracking-[-0.035em]"
              >
                {hero.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line.map((part, j) =>
                      "highlight" in part && part.highlight ? (
                        <span key={j} className="text-signal">
                          {part.text}
                        </span>
                      ) : (
                        <span key={j}>{part.text}</span>
                      ),
                    )}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={120} className="mt-9 max-w-[36rem]">
              <p className="text-[1.0625rem] leading-[1.65] text-snow/80">{hero.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href={hero.primaryCta.href}
                  className="caps group inline-flex items-center gap-4 bg-signal px-6 py-3.5 text-ink transition-colors duration-300 hover:bg-snow"
                >
                  {hero.primaryCta.label}
                  <ArrowRight className="h-2.5 w-5 transition-transform duration-500 ease-[var(--ease-instrument)] group-hover:translate-x-1" />
                </Link>
                <Link href={hero.secondaryCta.href} className="caps link-line pb-1 text-snow [background-size:100%_1px] hover:text-signal">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>

          <AltitudeGauge className="mb-6 hidden h-[340px] shrink-0 lg:block" />
        </div>
      </Container>

      {/* Spec bar — 1px gaps over a light ground draw the rules */}
      <div className="relative border-t rule-light bg-ink">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-snow/15 lg:grid-cols-4">
            {hero.spec.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1.5 bg-ink py-5 pr-4 ${i === 0 ? "pl-0" : i === 2 ? "pl-0 lg:pl-6" : "pl-5 lg:pl-6"}`}
              >
                <dt className="label text-snow/50">
                  <span className="text-signal">{String(i + 1).padStart(2, "0")}</span>&nbsp;&nbsp;{item.label}
                </dt>
                <dd className="display text-[1.0625rem] font-medium leading-snug sm:text-lg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
