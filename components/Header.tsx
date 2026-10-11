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
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="6.75" cy="6.75" r="4.75" />
      <path d="M10.25 10.25 14.5 14.5" />
    </svg>
  );
}

/** Thin dark instrument bar, the same on every page. */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b rule-light bg-ink/95 text-snow backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2 w-2 bg-signal" />
          <span className="display text-[0.9375rem] font-semibold uppercase tracking-[0.02em]">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`caps relative block px-3.5 py-2 transition-colors ${
                      active ? "text-snow" : "text-snow/60 hover:text-snow"
                    }`}
                  >
                    {item.label}
                    {active && <span aria-hidden="true" className="absolute inset-x-3.5 -bottom-[11px] h-0.5 bg-signal" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" title="Search" className="text-snow/75 transition-colors hover:text-signal">
            <SearchIcon className="h-4 w-4" />
          </button>
          <span aria-hidden="true" className="hidden h-4 w-px bg-snow/20 sm:block" />
          <LanguageSwitcher className="hidden sm:flex" />
          <button
            type="button"
            className="caps -mr-1 px-1 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t rule-light lg:hidden">
          <Container className="py-3">
            <ol>
              {navigation.map((item, i) => (
                <li key={item.href} className="border-b rule-light last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="flex items-baseline gap-4 py-3"
                  >
                    <span className="label w-6 text-signal">{String(i).padStart(2, "0")}</span>
                    <span className="display text-2xl font-medium">{item.label}</span>
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
