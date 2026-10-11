import { Hero } from "@/components/Hero";
import { SectionIndex } from "@/components/SectionIndex";
import { PhotoStrip } from "@/components/PhotoStrip";
import { getSelectedFrames } from "@/data/photos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionIndex />
      <PhotoStrip photos={getSelectedFrames()} />
    </>
  );
}
