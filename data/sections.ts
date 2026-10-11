import type { SectionLink } from "@/lib/types";

export const sections: SectionLink[] = [
  {
    number: "01",
    title: "Research",
    href: "/research",
    tag: "ML · Robotics · Systems",
    description:
      "AI, robotics, systems, and experiments at the intersection of science and real-world impact.",
    image: { src: "/images/sections/research.jpg", alt: "Research" },
  },
  {
    number: "02",
    title: "Projects",
    href: "/projects",
    tag: "Hardware · Software · Builds",
    description:
      "Things I build — from hardware experiments to software tools and personal projects.",
    image: { src: "/images/sections/projects.jpg", alt: "Projects" },
  },
  {
    number: "03",
    title: "Writing",
    href: "/writing",
    tag: "Essays · Notes",
    description:
      "Essays, notes, research thoughts, technology, and ideas outside of engineering.",
    image: { src: "/images/sections/writing.jpg", alt: "Writing" },
  },
  {
    number: "04",
    title: "Photography",
    href: "/photography",
    tag: "Mountains · Sea · Machines",
    description:
      "Mountains, oceans, cars, machines, and the roads between them — documented over time.",
    image: { src: "/images/sections/photography.jpg", alt: "Photography" },
  },
  {
    number: "05",
    title: "About",
    href: "/about",
    tag: "Background · Interests",
    description:
      "My background, skiing, the sea, motorsport, what I'm learning, and the bigger picture.",
    image: { src: "/images/sections/about.jpg", alt: "About" },
  },
];
