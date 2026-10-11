import Link from "next/link";
import { hero } from "@/data/home";
import { Container } from "@/components/Container";
import { FilmFrame } from "@/components/FilmFrame";
import { Photo } from "@/components/Photo";
import { TechnicalLabel } from "@/components/TechnicalLabel";
import { ArrowRight, CropMarks, RegistrationMark } from "@/components/Marks";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const { image } = hero;

  return (
    <section aria-labelledby="hero-title" className="border-b rule">
      <Container className="grid grid-cols-1 gap-14 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        {/* ── Text column ── */}
        <div className="flex flex-col justify-between lg:col-span-6 xl:col-span-6">
          <Reveal>
            <p className="label flex flex-wrap gap-x-2 gap-y-1 text-muted">
              {hero.kicker.map((word, i) => (
                <span key={word} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-sand">/</span>}
                  {word}
                </span>
              ))}
            </p>

            <h1
              id="hero-title"
              className="mt-8 font-display text-[clamp(3.25rem,8.2vw,7.75rem)] font-normal leading-[0.9] tracking-[-0.015em] text-ink sm:mt-10"
            >
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part, j) =>
                    "highlight" in part && part.highlight ? (
                      <em key={j} className="font-medium text-burgundy">
                        {part.text}
                      </em>
                    ) : (
                      <span key={j}>{part.text}</span>
                    ),
                  )}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={150} className="mt-10 lg:mt-14">
            <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-6">
              <span aria-hidden="true" className="label hidden pt-1 text-muted sm:block">
                §&nbsp;01
              </span>
              <div className="max-w-[34rem]">
                <p className="text-[1.0625rem] leading-[1.65] text-ink/85">{hero.intro}</p>
                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                  <Link
                    href={hero.primaryCta.href}
                    className="caps group inline-flex items-center gap-4 border border-forest bg-forest px-6 py-3.5 text-paper transition-colors duration-500 hover:bg-ink hover:border-ink"
                  >
                    {hero.primaryCta.label}
                    <ArrowRight className="h-2.5 w-5 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1" />
                  </Link>
                  <Link href={hero.secondaryCta.href} className="caps link-line pb-1 text-ink [background-size:100%_1px] hover:text-burgundy">
                    {hero.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Photograph ── */}
        <Reveal delay={100} className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <figure className="relative mx-auto max-w-[560px] px-6 sm:px-8 lg:max-w-none">
            {/* top annotations */}
            <div className="mb-3 flex items-end justify-between">
              <TechnicalLabel>Fig. 01</TechnicalLabel>
              <TechnicalLabel>{image.id} &nbsp;·&nbsp; 35&nbsp;mm</TechnicalLabel>
            </div>

            <div className="relative">
              <CropMarks inset="-14px" className="text-ink/45" />
              <RegistrationMark className="absolute -right-7 -top-7 hidden h-5 w-5 text-ink/40 sm:block" />

              {/* vertical film-edge markings, left */}
              <span
                aria-hidden="true"
                className="label absolute -left-6 bottom-0 hidden rotate-180 whitespace-nowrap text-[0.5625rem] text-muted/80 [writing-mode:vertical-rl] sm:block"
              >
                ▸ 14 &nbsp;&nbsp; ▸ 14A &nbsp;&nbsp; ISO 400
              </span>

              {/* vertical coordinates, right */}
              <span
                aria-hidden="true"
                className="label absolute -right-6 top-0 hidden rotate-180 whitespace-nowrap text-[0.5625rem] text-muted/80 [writing-mode:vertical-rl] sm:block"
              >
                36°45′ N &nbsp;—&nbsp; 03°03′ E
              </span>

              <FilmFrame className="grain">
                <div className="relative" style={{ aspectRatio: image.aspect }}>
                  <Photo src={image.src} alt={image.alt} priority sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 48vw, 90vw" />
                </div>
              </FilmFrame>
            </div>

            {/* scale bar + caption */}
            <div className="mt-5 flex items-start justify-between gap-6">
              <figcaption className="font-display text-[1.0625rem] italic leading-snug text-ink/80">
                {image.caption}
              </figcaption>
              <ScaleBar />
            </div>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}

/** A small drafting scale bar — decorative. */
function ScaleBar() {
  return (
    <div aria-hidden="true" className="shrink-0 pt-1 text-ink/60">
      <svg width="88" height="10" viewBox="0 0 88 10" fill="none" stroke="currentColor" strokeWidth="0.75">
        <path d="M0.5 1v8M22 5v4M44 1v8M66 5v4M87.5 1v8M0.5 9h87" />
        <rect x="0.5" y="7" width="21.5" height="2" fill="currentColor" stroke="none" />
        <rect x="44" y="7" width="22" height="2" fill="currentColor" stroke="none" />
      </svg>
      <div className="label mt-1 flex justify-between text-[0.5rem] text-muted">
        <span>0</span>
        <span>1 : 1</span>
      </div>
    </div>
  );
}
