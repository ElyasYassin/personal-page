import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Container } from "@/components/Container";
import { IronworkDivider, StarOrnament } from "@/components/Marks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper">
      <IronworkDivider className="block text-ink/20" />
      <Container className="pb-10 pt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl leading-tight text-ink">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              An engineer&rsquo;s field notebook, a photography archive, and a journal — kept with care.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="label mb-4 text-muted">Index</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line text-ink/85 hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="label mb-4 text-muted">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="link-line text-ink/85 hover:text-ink" rel="me noopener" target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t rule pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-muted">
            © {year} {site.name} &nbsp;·&nbsp; All photographs by the author
          </p>
          <StarOrnament className="order-first h-4 w-4 text-burgundy/70 sm:order-none" />
          <p className="label text-muted">
            {site.edition} &nbsp;·&nbsp; <span lang="fr">Fait à la main</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
