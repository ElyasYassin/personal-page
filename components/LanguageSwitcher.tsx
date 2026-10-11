"use client";

import { useState } from "react";
import { languages, type LanguageCode } from "@/data/site";

/**
 * FR / EN / عربي. Visual-only for now: it tracks a selection but does not
 * translate. When localization lands, swap the state for a route segment
 * (e.g. /[lang]/…) and set <html lang dir> from it.
 */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<LanguageCode>("en");

  return (
    <div role="group" aria-label="Language" className={`flex items-center ${className}`}>
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="mx-1.5 h-2.5 w-px bg-ink/25" />}
          <button
            type="button"
            lang={lang.code}
            dir={lang.dir}
            aria-pressed={active === lang.code}
            onClick={() => setActive(lang.code)}
            className={`px-0.5 transition-colors duration-300 ${
              lang.code === "ar" ? "text-[0.8125rem] leading-none" : "caps"
            } ${active === lang.code ? "text-ink" : "text-muted hover:text-ink"}`}
          >
            <span className={active === lang.code ? "border-b border-burgundy pb-0.5" : ""}>{lang.label}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
