import type { SectionLink } from "@/lib/types";

export const sections: SectionLink[] = [
  {
    number: "01",
    title: "Research",
    href: "/research",
    description:
      "AI, robotics, systems, and experiments at the intersection of science and real-world impact.",
    image: { src: "/images/sections/research.jpg", alt: "Research" },
    accent: "burgundy",
  },
  {
    number: "02",
    title: "Projects",
    href: "/projects",
    description:
      "Things I build — from hardware experiments to software tools and personal projects.",
    image: { src: "/images/sections/projects.jpg", alt: "Projects" },
    accent: "forest",
  },
  {
    number: "03",
    title: "Writing",
    href: "/writing",
    description:
      "Essays, notes, research thoughts, technology, and ideas outside of engineering.",
    image: { src: "/images/sections/writing.jpg", alt: "Writing" },
    accent: "burgundy",
  },
  {
    number: "04",
    title: "Photography",
    href: "/photography",
    description:
      "Places, people, machines, streets, and everyday moments documented over time.",
    image: { src: "/images/sections/photography.jpg", alt: "Photography" },
    accent: "forest",
  },
  {
    number: "05",
    title: "About",
    href: "/about",
    description: "My background, interests, work, and the bigger picture.",
    image: { src: "/images/sections/about.jpg", alt: "About" },
    accent: "burgundy",
  },
];
