import { Hero } from "@/components/Hero";
import { SectionIndex } from "@/components/SectionIndex";
import { PhotoStrip } from "@/components/PhotoStrip";
import { getSelectedFrames } from "@/data/photos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div aria-hidden="true" className="zellige-frieze h-6 sm:h-7" />
      <SectionIndex />
      <PhotoStrip photos={getSelectedFrames()} />
    </>
  );
}
