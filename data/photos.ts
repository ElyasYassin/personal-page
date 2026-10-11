import type { Photo } from "@/lib/types";

/**
 * The photo archive. Drop files into /public/images/archive and edit the
 * entries below. Leave date / location / elevation / camera empty unless
 * they're real.
 */
export const photos: Photo[] = [
  { id: "A-001", src: "/images/archive/01.jpg", alt: "", aspect: 3 / 2 },
  { id: "A-002", src: "/images/archive/02.jpg", alt: "", aspect: 2 / 3 },
  { id: "A-003", src: "/images/archive/03.jpg", alt: "", aspect: 16 / 9 },
  { id: "A-004", src: "/images/archive/04.jpg", alt: "", aspect: 4 / 5 },
  { id: "A-005", src: "/images/archive/05.jpg", alt: "", aspect: 3 / 2 },
  { id: "A-006", src: "/images/archive/06.jpg", alt: "", aspect: 1 },
  { id: "A-007", src: "/images/archive/07.jpg", alt: "", aspect: 2 / 3 },
  { id: "A-008", src: "/images/archive/08.jpg", alt: "", aspect: 21 / 9 },
];

/** Frames featured in the homepage "Field Log" strip, in order. */
export const selectedFrames = ["A-001", "A-002", "A-003", "A-004", "A-005", "A-006", "A-007", "A-008"];

export function getSelectedFrames(): Photo[] {
  return selectedFrames
    .map((id) => photos.find((p) => p.id === id))
    .filter((p): p is Photo => Boolean(p));
}
