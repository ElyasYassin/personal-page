"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1">
      <circle cx="6.75" cy="6.75" r="4.75" />
      <path d="M10.25 10.25 14.5 14.5" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b rule bg-paper/92 backdrop-blur-[2px]">
      <Container className="flex h-14 items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="caps font-medium tracking-[0.26em] text-ink">{site.name}</span>
          <span className="label hidden text-[0.5625rem] text-muted xl:inline">{site.edition}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`caps link-line pb-1 transition-colors ${
                      active ? "text-ink [background-size:100%_1px]" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <button type="button" aria-label="Search" title="Search" className="text-ink/80 transition-colors hover:text-burgundy">
            <SearchIcon className="h-[15px] w-[15px]" />
          </button>
          <span aria-hidden="true" className="hidden h-4 w-px bg-ink/20 sm:block" />
          <LanguageSwitcher className="hidden sm:flex" />
          <button
            type="button"
            className="caps -mr-1 px-1 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t rule lg:hidden">
          <Container className="py-4">
            <ol>
              {navigation.map((item, i) => (
                <li key={item.href} className="border-b rule last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="flex items-baseline gap-4 py-3"
                  >
                    <span className="label w-6 text-muted">{String(i).padStart(2, "0")}</span>
                    <span className="font-display text-2xl">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <LanguageSwitcher className="mt-4 sm:hidden" />
          </Container>
        </nav>
      )}
    </header>
  );
}
