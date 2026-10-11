import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Container } from "@/components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-snow">
      <div aria-hidden="true" className="terrain-lines absolute inset-0 -z-10 text-snow opacity-[0.06]" />
      <Container className="pb-8 pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label flex items-center gap-2.5 text-snow/60">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-signal" />
              {site.edition}
            </p>
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-snow/70">
              Engineering, research, and photographs — from the mountains to the sea, and the machines in between.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="label mb-4 text-snow/50">Index</p>
            <ul className="grid grid-cols-2 gap-y-2.5 text-[0.9375rem]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line text-snow/85 hover:text-snow">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="label mb-4 text-snow/50">Elsewhere</p>
            <ul className="space-y-2.5 text-[0.9375rem]">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="link-line text-snow/85 hover:text-snow" rel="me noopener" target="_blank">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="display mt-16 select-none whitespace-nowrap text-[clamp(3rem,13.5vw,13rem)] font-bold uppercase leading-[0.8] tracking-[-0.045em] text-snow/[0.92]"
        >
          {site.name}
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t rule-light pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-snow/50">© {year} {site.name} · All photographs by the author</p>
          <p className="label text-snow/50">
            <span lang="fr">Fait à la main</span> · <span lang="ar" dir="rtl">صُنع باليد</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
