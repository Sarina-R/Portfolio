export type SkillColor = 'teal' | 'gold' | 'pink' | 'purple' | 'ink' | 'cream'

export const STATS = [
  { label: 'Years shipping frontend', value: '3+' },
  { label: 'Companies', value: '2' },
  { label: 'Selected projects', value: '4' },
]

// Reorganized into the 6 categories from the resume's "Core Skills" section
// (previously 4 categories — the grid below now expects up to 6).
export const SKILLS: { label: string; color: SkillColor; items: string[] }[] = [
  {
    label: 'Frontend Engineering',
    color: 'teal',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'shadcn/ui',
    ],
  },
  {
    label: 'Architecture & Data',
    color: 'gold',
    items: [
      'Component Architecture',
      'Feature-Based Structure',
      'Zustand',
      'Context API',
      'SWR',
      'REST APIs',
    ],
  },
  {
    label: 'Next.js & Performance',
    color: 'pink',
    items: [
      'App Router',
      'Server/Client Components',
      'Dynamic Import',
      'Image Optimization',
      'Caching',
    ],
  },
  {
    label: 'UI Engineering',
    color: 'purple',
    items: [
      'Pixel-Accurate Implementation',
      'Responsive Design',
      'Accessibility',
      'Design Systems',
      'Figma',
      'Framer Motion',
    ],
  },
  {
    label: 'Forms, Validation & Quality',
    color: 'ink',
    items: ['React Hook Form', 'Zod', 'Jest', 'Storybook', 'Clean Code'],
  },
  {
    label: 'Collaboration & Tooling',
    color: 'cream',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Branching Workflows',
      'Agile Collaboration',
      'MDX',
    ],
  },
]

// Draft copy — the resume doesn't specify a process, so write this in your
// own voice before shipping it.
export const PROCESS = [
  {
    step: 'Understand',
    detail:
      'Requirements, Figma files and edge cases first — before a single component gets built.',
  },
  {
    step: 'Architect',
    detail:
      'Reusable, config-driven patterns so new variants are a data change, not a rewrite.',
  },
  {
    step: 'Build',
    detail:
      'Pixel-accurate, accessible, animated — with deliberate Server/Client boundaries throughout.',
  },
  {
    step: 'Refine',
    detail:
      "Performance passes, edge cases and polish until it's ready for production traffic.",
  },
]

// Draft copy, grounded in the resume's UI/UX → frontend background — edit to taste.
export const BEYOND_FRONTEND = {
  heading: 'I started in design — it still shows.',
  body: 'Before I was a frontend developer, I was designing interfaces and user flows in Figma. That background is why I care as much about interaction quality and visual hierarchy as I do about clean, maintainable code — the two were never separate disciplines for me.',
  tags: ['Figma', 'UI/UX', 'Motion Design', 'Design Systems'],
}
