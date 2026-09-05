export type WorkColor = 'teal' | 'gold' | 'pink' | 'purple'

export type Work = {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  role: string
  year: string
  tags: string[]
  color: WorkColor
  images: string[]
  problem: string
  approach: string[]
  results: string[]
}

export const WORKS: Work[] = [
  {
    id: 'marketing',
    slug: 'https://melalinstitute.com/company',
    title: 'Melal Institute — Public Site',
    tagline: 'A Persian-first RTL site that actually moves',
    description:
      'The public marketing site for Melal Institute: a bento services grid, an audio-synced story section, and a locations directory — all RTL, all animated with intent.',
    role: 'Frontend Developer',
    year: '2025',
    tags: ['Framer Motion', 'RTL / Persian', 'Performance'],
    color: 'pink',
    images: [
      '/work/melal-marketing/1.png',
      '/work/melal-marketing/2.png',
      '/work/melal-marketing/3.png',
      '/work/melal-marketing/4.png',
      '/work/melal-marketing/5.png',
    ],
    problem:
      'The existing site read like a translated template — RTL was patched on afterward, and nothing about the motion or layout felt native to a Persian-first audience.',
    approach: [
      'Built the services section as an RTL bento grid with a rank-cycling discount-card stack and cursor-reactive panels',
      'Designed a karaoke-style story section that highlights words in sync with narrated audio',
      'Wrote a flags marquee with a cursor-spotlight reveal for partner logos',
      'Fixed sequential .woff2 font-loading bottlenecks and code-split below-the-fold sections with next/dynamic',
    ],
    results: [
      'About page LCP improved after removing the font-loading waterfall',
      'Motion choices are RTL-native — grid ordering and cursor logic mirror correctly instead of being flipped after the fact',
    ],
  },
  {
    id: 'exambuilder',
    slug: '#',
    title: 'Adaptive Exam Builder',
    tagline: 'Question banks that brief non-technical staff',
    description:
      'A focused case study inside the ops dashboard: a question-authoring tool that non-engineers can trust.',
    role: 'Frontend Developer',
    year: '2025',
    tags: ['Zod', 'Field Arrays', 'JSON-driven UI'],
    color: 'gold',
    images: [
      '/work/exam-builder/1.png',
      '/work/exam-builder/2.png',
      '/work/exam-builder/3.png',
      '/work/exam-builder/4.png',
    ],
    problem:
      "Exam content lived in whatever format the last person used. Adaptive exams and score-based exams needed different logic, but the UI didn't tell authors which rules applied.",
    approach: [
      'Modeled 11 question types with type-driven correct-answer logic via a shared metadata registry',
      'Branched the exam-connect flow between adaptive and score-based exam types inside a single two-panel layout',
      'Added a confirmation modal with a live JSON preview so authors see exactly what will publish',
      'Used React Hook Form field arrays to keep large, repeating question sets fast and validated',
    ],
    results: [
      'Non-technical staff author exams without engineering support',
      'Type mistakes are caught before publish, not after a student sees them',
    ],
  },
  {
    id: 'avis',
    slug: 'https://www.avisengine.com/',
    title: 'AVIS Landing Pages',
    tagline:
      'Four products, five landing pages, and one modern animated experience',
    description:
      'A collection of landing pages for AVIS and four related products. I designed and developed the experience myself, creating a modern visual direction inspired by product-focused websites and bringing it to life with animations and interactive details.',
    role: 'UI Design & Frontend Development',
    year: '2024',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Responsive Design'],
    color: 'purple',
    images: [
      '/work/avis/1.png',
      '/work/avis/2.png',
      '/work/avis/3.png',
      '/work/avis/4.png',
      '/work/avis/5.png',
    ],
    problem:
      'The challenge was to design multiple landing pages for AVIS and its products while keeping the experience visually consistent. Each product needed its own identity while still feeling like part of the same ecosystem.',
    approach: [
      'Designed the visual direction myself, inspired by modern product websites and clean, contemporary interfaces',
      'Created a consistent visual language across AVIS and its four products while giving each landing page its own personality',
      'Built five responsive landing pages using reusable components and a scalable frontend structure',
      'Added animations and interactive details to create a dynamic, polished, and engaging experience',
    ],
    results: [
      'Designed and developed five landing pages across AVIS and its product ecosystem',
      'Created a modern, fully animated experience with a strong and consistent visual identity',
      'Built reusable components and patterns to maintain consistency across multiple products',
    ],
  },
]

export function getWorkBySlug(slug: string) {
  return WORKS.find((w) => w.slug === slug)
}
