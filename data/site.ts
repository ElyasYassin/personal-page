import type { NavItem } from "@/lib/types";

export const site = {
  name: "Elyas Larfi",
  title: "Elyas Larfi — Ideas, Machines, and a More Interesting Life",
  description:
    "The personal archive of Elyas Larfi: engineering, research, writing, photography, and exploration.",
  /** Edition marker shown in the header/footer — purely editorial. */
  edition: "Vol. I",
  social: [
    { label: "GitHub", href: "https://github.com/ElyasYassin" },
  ],
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Photography", href: "/photography" },
  { label: "About", href: "/about" },
];

export const languages = [
  { code: "fr", label: "FR", dir: "ltr" },
  { code: "en", label: "EN", dir: "ltr" },
  { code: "ar", label: "عربي", dir: "rtl" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];
