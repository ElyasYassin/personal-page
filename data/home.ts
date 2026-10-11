import type { Photo, SpecItem } from "@/lib/types";

/**
 * Full-bleed background photograph. A wide landscape works best (mountains,
 * coastline, a car on an empty road). Fill in location / elevation / date
 * only if they're real — they appear as readouts in the hero.
 */
const heroImage: Photo = {
  id: "F-001",
  src: "/images/hero.jpg",
  alt: "",
  aspect: 16 / 9,
  caption: "From the archive",
};

/**
 * Homepage copy. The headline is split into lines so the layout controls
 * line breaks; `highlight` marks the words set in signal orange.
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
  image: heroImage,
  /** The spec bar along the bottom of the hero. */
  spec: [
    { label: "Terrain", value: "Mountains & oceans" },
    { label: "Machines", value: "Cars & robots" },
    { label: "Methods", value: "ML, control, hardware" },
    { label: "Medium", value: "Photographs & essays" },
  ] satisfies SpecItem[],
};
