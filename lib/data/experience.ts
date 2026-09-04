export type ExperienceRole = {
  role: string
  org: string
  when: string
  color: string
  points: string[]
}

export const EXPERIENCE: ExperienceRole[] = [
  {
    role: 'Frontend Developer',
    org: 'Melal Institute',
    when: 'Apr 2026 — Present',
    color: '#10938C',
    points: [
      'Build and maintain production educational and administrative apps in Next.js, React, TypeScript and Tailwind CSS.',
      'Build exam-management workflows, dashboards and role-based interfaces for multiple user types.',
      'Design config-driven question-creation interfaces where UI and validation adapt to the question type.',
      'Make deliberate Server/Client Component decisions to control rendering cost.',
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'AVIS',
    when: 'Jun 2024 — Feb 2026',
    color: '#F6B93E',
    points: [
      'Built a configuration-driven brand identity platform generating multiple branded sites from centralized JSON.',
      'Extended the architecture with MDX for predefined layouts and fully custom content.',
      'Implemented multilingual experiences with localized routes and content delivery.',
      'Translated detailed UI/UX designs into pixel-accurate, animated interfaces.',
    ],
  },
  {
    role: 'UI/UX Designer → Frontend Developer',
    org: 'AVIS',
    when: 'Sep 2023 — May 2024',
    color: '#FF3D8A',
    points: [
      'Designed interfaces and user flows in Figma, building a strong product and visual-design foundation.',
      'Created responsive layouts and reusable UI patterns with attention to hierarchy and usability.',
      'Strengthened the design-to-code workflow by combining UI/UX understanding with production implementation.',
    ],
  },
]
