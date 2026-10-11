import type { Metadata } from "next";
import { ForthcomingPage } from "@/components/ForthcomingPage";
import { sections } from "@/data/sections";

const section = sections.find((s) => s.href === "/about")!;

export const metadata: Metadata = { title: section.title, description: section.description };

export default function Page() {
  return <ForthcomingPage number={section.number} title={section.title} description={section.description} />;
}
