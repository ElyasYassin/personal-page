import type { Photo } from "@/lib/types";

/**
 * Homepage copy. The headline is split into lines so the layout controls
 * line breaks; `highlight` marks the words set in burgundy.
 */
export const hero = {
  kicker: ["Engineer", "Researcher", "Builder", "Writer", "Photographer"],
  headline: [
    [{ text: "Ideas," }],
    [{ text: "Machines," }],
    [{ text: "and a " }, { text: "More", highlight: true }],
    [{ text: "Interesting Life.", highlight: true }],
  ],
  intro:
    "I'm Elyas Larfi — blending engineering, research, writing, photography, and exploration. A personal website for curiosity, creation, and the pursuit of a more interesting life.",
  primaryCta: { label: "Explore my work", href: "#sections" },
  secondaryCta: { label: "About me", href: "/about" },
  image: {
    id: "F-001",
    src: "/images/hero.jpg",
    alt: "Photograph from the archive",
    aspect: 4 / 5,
    caption: "Untitled, from the archive.",
  } satisfies Photo,
};
