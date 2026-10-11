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
    <div role="group" aria-label="Language" className={`flex items-center gap-1 ${className}`}>
      {languages.map((lang) => {
        const on = active === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            lang={lang.code}
            dir={lang.dir}
            aria-pressed={on}
            onClick={() => setActive(lang.code)}
            className={`flex h-6 min-w-7 items-center justify-center px-1.5 transition-colors duration-300 ${
              lang.code === "ar" ? "text-[0.8125rem] leading-none" : "label"
            } ${on ? "bg-snow text-ink" : "text-snow/60 hover:text-snow"}`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
