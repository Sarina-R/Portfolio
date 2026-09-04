export type WorkColor = "teal" | "gold" | "pink" | "purple";

export type Work = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  color: WorkColor;
  images: string[];
  problem: string;
  approach: string[];
  results: string[];
};

// Swap each `images` path with real screenshots placed under
// /public/work/<slug>/ — the gallery falls back to a styled
// placeholder automatically until the file exists.
export const WORKS: Work[] = [
  {
    id: "dashboard",
    slug: "melal-dashboard",
    title: "Melal Ops Dashboard",
    tagline: "Running an entire language school from one screen",
    description:
      "An internal Next.js dashboard for Melal Institute covering class scheduling, instructor payments, and placement exams.",
    role: "Frontend Developer",
    year: "2025",
    tags: ["Next.js", "SWR", "React Hook Form", "shadcn/ui"],
    color: "teal",
    images: [
      "/work/melal-dashboard/1.jpg",
      "/work/melal-dashboard/2.jpg",
      "/work/melal-dashboard/3.jpg",
      "/work/melal-dashboard/4.jpg",
    ],
    problem:
      "Operations staff were tracking classes, instructor pay, and placement exams across spreadsheets and phone calls — nothing lived in one system, and mistakes were expensive.",
    approach: [
      "Built the classes table and detail panels first, migrating from mock data to a live education-metadata API with SWR",
      "Shipped an extra-work payments flow with a debounced instructor-search combobox and a status-colored approval dialog",
      "Designed a question builder covering 11 question types, driven by a single QUESTION_TYPE_META registry instead of scattered conditionals",
      "Added scope-based conditional rendering so each role only sees the actions they're allowed to take",
    ],
    results: [
      "One system replaced three disconnected spreadsheets for scheduling and payments",
      "Exam authors can preview the exact JSON payload before publishing, cutting review errors",
      "Constants-driven question types make adding an 11th format a config change, not a rewrite",
    ],
  },
  {
    id: "marketing",
    slug: "melal-marketing",
    title: "Melal Institute — Public Site",
    tagline: "A Persian-first RTL site that actually moves",
    description:
      "The public marketing site for Melal Institute: a bento services grid, an audio-synced story section, and a locations directory — all RTL, all animated with intent.",
    role: "Frontend Developer",
    year: "2025",
    tags: ["Framer Motion", "RTL / Persian", "Performance"],
    color: "pink",
    images: [
      "/work/melal-marketing/1.jpg",
      "/work/melal-marketing/2.jpg",
      "/work/melal-marketing/3.jpg",
    ],
    problem:
      "The existing site read like a translated template — RTL was patched on afterward, and nothing about the motion or layout felt native to a Persian-first audience.",
    approach: [
      "Built the services section as an RTL bento grid with a rank-cycling discount-card stack and cursor-reactive panels",
      "Designed a karaoke-style story section that highlights words in sync with narrated audio",
      "Wrote a flags marquee with a cursor-spotlight reveal for partner logos",
      "Fixed sequential .woff2 font-loading bottlenecks and code-split below-the-fold sections with next/dynamic",
    ],
    results: [
      "About page LCP improved after removing the font-loading waterfall",
      "Motion choices are RTL-native — grid ordering and cursor logic mirror correctly instead of being flipped after the fact",
    ],
  },
  {
    id: "exambuilder",
    slug: "exam-builder",
    title: "Adaptive Exam Builder",
    tagline: "Question banks that brief non-technical staff",
    description:
      "A focused case study inside the ops dashboard: a question-authoring tool that non-engineers can trust.",
    role: "Frontend Developer",
    year: "2025",
    tags: ["Zod", "Field Arrays", "JSON-driven UI"],
    color: "gold",
    images: [
      "/work/exam-builder/1.jpg",
      "/work/exam-builder/2.jpg",
      "/work/exam-builder/3.jpg",
      "/work/exam-builder/4.jpg",
      "/work/exam-builder/5.jpg",
    ],
    problem:
      "Exam content lived in whatever format the last person used. Adaptive exams and score-based exams needed different logic, but the UI didn't tell authors which rules applied.",
    approach: [
      "Modeled 11 question types with type-driven correct-answer logic via a shared metadata registry",
      "Branched the exam-connect flow between adaptive and score-based exam types inside a single two-panel layout",
      "Added a confirmation modal with a live JSON preview so authors see exactly what will publish",
      "Used React Hook Form field arrays to keep large, repeating question sets fast and validated",
    ],
    results: [
      "Non-technical staff author exams without engineering support",
      "Type mistakes are caught before publish, not after a student sees them",
    ],
  },
  {
    id: "designsystem",
    slug: "design-system",
    title: "Component Library & Design System",
    tagline: "One source of truth instead of five slightly different buttons",
    description:
      "A personal design-system project: a Storybook-documented component library built with accessibility and reuse as first-class requirements.",
    role: "Design & Frontend",
    year: "2024",
    tags: ["Storybook", "Accessibility", "Atomic Design", "Figma"],
    color: "purple",
    images: [
      "/work/design-system/1.jpg",
      "/work/design-system/2.jpg",
      "/work/design-system/3.jpg",
    ],
    problem:
      "Every new feature reinvented its own buttons, inputs, and spacing scale — inconsistent by default, expensive to fix later.",
    approach: [
      "Started in Figma with a token system for color, type, and spacing before writing a single component",
      "Built each component atomic-first — primitives composed into patterns, documented live in Storybook",
      "Wrote accessibility into the components themselves: focus states, ARIA roles, and keyboard navigation by default",
    ],
    results: [
      "New features compose from existing primitives instead of one-off CSS",
      "Design and engineering review the same living documentation instead of a static Figma file drifting out of sync",
    ],
  },
];

export function getWorkBySlug(slug: string) {
  return WORKS.find((w) => w.slug === slug);
}
