/**
 * Shared content types. Pages and components only ever read these shapes,
 * so content can move to MDX or a CMS later without touching the UI.
 */

export type Photo = {
  /** Archive identifier, e.g. "A-014". Shown in small mono type. */
  id: string;
  /** Path under /public, e.g. "/images/archive/01.jpg". */
  src: string;
  alt: string;
  /** Intrinsic aspect ratio as width / height (3/2 landscape, 2/3 portrait…). */
  aspect: number;
  caption?: string;
  /** Only fill these in with real information — never invent EXIF data. */
  date?: string;
  location?: string;
  camera?: string;
  lens?: string;
  /** Free-form tags; collections are derived from these, never hard-coded. */
  tags?: string[];
  /** Present the frame inside a contact-sheet / film-strip border. */
  filmFrame?: boolean;
};

export type SectionLink = {
  number: string;
  title: string;
  href: string;
  description: string;
  image: Pick<Photo, "src" | "alt">;
  accent: "burgundy" | "forest";
};

export type NavItem = { label: string; href: string };
