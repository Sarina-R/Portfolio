export type WorkColor = 'teal' | 'gold' | 'pink' | 'purple'

export type Work = {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  role: string
  tags: string[]
  color: WorkColor
  images: string[]
  problem: string
  approach: string[]
  results: string[]
}

export const WORKS: Work[] = [
  {
    id: 'exambuilder',
    slug: '#',
    title: 'Adaptive Exam Management',
    tagline: 'Question banks that brief non-technical staff',
    description:
      'A focused case study inside the ops dashboard: a question-authoring tool that non-engineers can trust.',
    role: 'Frontend Developer',
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
  {
    id: 'marketing',
    slug: 'https://melalinstitute.com/company',
    title: 'Melal Institute — Public Site',
    tagline: 'A Persian-first RTL site that actually moves',
    description:
      'The public marketing site for Melal Institute: a bento services grid, an audio-synced story section, and a locations directory — all RTL, all animated with intent.',
    role: 'Frontend Developer',
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
    id: 'razavi',
    slug: 'https://www.razavihospitalipd.com/en',
    title: 'Razavi Hospital — International Patient Platform',
    tagline:
      'A scalable, multilingual healthcare platform built for international patients and reusable across multiple brands.',
    description:
      'A fully dynamic international healthcare platform built with Next.js and TypeScript for Razavi Hospital’s International Patient Department (IPD). The platform supports English and Arabic, with an architecture designed to scale to additional languages, brands, and visual identities. Built around dynamic content, caching, performance optimization, automated testing, and reusable branding capabilities.',
    role: 'Frontend Developer',
    tags: [
      'Next.js',
      'TypeScript',
      'Internationalization',
      'Multilingual',
      'Dynamic Content',
      'Performance',
      'Jest',
    ],
    color: 'pink',
    images: ['/work/razavi/1.png', '/work/razavi/2.png', '/work/razavi/3.png'],

    problem:
      'The project required more than a traditional hospital website. It needed to serve international patients across multiple languages while remaining flexible enough to support future expansion, additional brands, and different visual identities. The architecture also needed to handle dynamic content efficiently without sacrificing performance or maintainability.',

    approach: [
      'Built the platform with Next.js and TypeScript, focusing on a scalable and maintainable frontend architecture',
      'Implemented multilingual support for English and Arabic, with the system designed to accommodate additional languages in the future',
      'Developed the website as a fully dynamic platform, allowing content and configuration to be managed without hardcoding pages or data',
      'Designed the architecture to support multiple brands, making it possible to reuse the same platform with different branding, visual identities, and configurations',
      'Implemented caching strategies to improve performance and reduce unnecessary requests',
      'Optimized application performance through efficient rendering, asset handling, and modern Next.js capabilities',
      'Used Jest to introduce automated testing and improve confidence when maintaining and extending the application',
      'Structured the project with reusability and long-term scalability in mind, allowing new features and brands to be integrated more efficiently',
    ],

    results: [
      'Delivered a scalable international healthcare platform rather than a one-off hospital website',
      'Created a multilingual foundation supporting English and Arabic, with the architecture prepared for future language expansion',
      'Built a reusable, brand-flexible system that could support other healthcare organizations with different branding requirements',
      'Improved maintainability through TypeScript, reusable architecture, automated testing, and dynamic content management',
      'Implemented caching and performance optimizations to support a faster and more efficient user experience',
      'Although development and long-term support were unfortunately interrupted due to the situation surrounding the Iran war, the project remains a strong example of scalable frontend architecture and product-oriented engineering',
    ],
  },
  {
    id: 'brand-book',
    slug: 'https://brands.firaworldcup.org/ir',
    title: 'JSON-Driven Brand Book Platform',
    tagline:
      'A configurable, white-label brand book platform where an entire branded website can be generated from data and extended with custom MDX components.',

    description:
      'A fully configurable brand book platform built with Next.js and TypeScript. The system allows brands to generate and customize their entire brand website through JSON-driven configuration, including themes, colors, typography, layout, and content. It also supports Next.js MDX, allowing each brand to extend the platform with custom interactive components while keeping the core system reusable and scalable.',

    role: 'Frontend Developer',

    tags: [
      'Next.js',
      'TypeScript',
      'JSON-Driven Architecture',
      'MDX',
      'White-Label',
      'Dynamic Theming',
      'Typography System',
      'Design Systems',
    ],

    color: 'pink',

    images: [
      '/work/branding/1.webp',
      '/work/branding/2.webp',
      '/work/branding/3.webp',
      '/work/branding/4.webp',
      '/work/branding/5.webp',
    ],

    problem:
      'Traditional brand books are often static documents or custom-built websites, making them difficult to maintain, reuse, or adapt for different brands. The challenge was to build a scalable platform where each brand could have its own visual identity, typography, theme, content, and custom components without requiring a completely new website or codebase.',

    approach: [
      'Designed the platform around a JSON-driven architecture, allowing an entire brand book website to be configured through structured data rather than hardcoded pages',
      'Built a reusable white-label system capable of supporting multiple brands with different visual identities from a shared codebase',
      'Created a dynamic theming system that allows each brand to define and change its own colors, visual styling, and overall website appearance',
      'Developed a flexible typography system supporting multiple font families within the same brand, such as separate fonts for headings, paragraphs, and other text roles',
      'Made typography configuration part of the global design system so font choices automatically propagate throughout the entire website',
      'Integrated Next.js MDX support, allowing brands to create rich content and use custom React components alongside standard documentation',
      'Designed the component architecture so brands could extend their brand books with custom components without modifying the platform core',
      'Separated branding configuration, content, and presentation logic to improve maintainability and make the system easier to scale',
    ],

    results: [
      'Created a reusable platform capable of generating complete brand book websites from configuration data',
      'Reduced the need to build a separate website and codebase for every new brand',
      'Enabled extensive visual customization, including themes, colors, typography, and multiple font roles',
      'Allowed brands to combine structured brand documentation with custom interactive React components through MDX',
      'Established a scalable foundation for a commercial white-label brand book product',
      'Turned the brand book from a static document into a flexible, extensible digital platform that could evolve with each brand',
    ],
  },
]

export function getWorkBySlug(slug: string) {
  return WORKS.find((w) => w.slug === slug)
}
