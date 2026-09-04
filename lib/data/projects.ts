export type SelectedProject = {
  title: string
  stack: string
  description: string
  github?: string
  live?: string
  color: string
}

export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    title: 'Exam Management Platform',
    stack: 'Next.js · TypeScript · React · React Hook Form · Zod',
    description:
      'A comprehensive exam creation and management system with role-based permissions, dynamic question banks with search and multi-step selection, and a config-driven question editor where question types render their own UI and validation rules.',
    color: '#10938C',
  },
  {
    title: 'International Health Platform',
    stack: 'Next.js · TypeScript · Internationalization',
    description:
      'A multilingual healthcare platform with route-based internationalization, localized content delivery, and reusable, accessible UI components consistent across device sizes.',
    live: 'https://razavihospitalipd.com',
    color: '#F6B93E',
  },
  {
    title: 'Brand Identity Platform',
    stack: 'Next.js · TypeScript · Tailwind CSS · MDX · JSON-driven Rendering',
    description:
      'A configurable multi-page brand-book platform generating complete website experiences from centralized JSON — theme, layout and typography change without rewriting pages.',
    github: 'https://github.com/Sarina-R/brand-identity',
    live: 'https://brand-identity-three.vercel.app',
    color: '#FF3D8A',
  },
  {
    title: 'Canva-Like Editor',
    stack: 'React · JSON-driven Rendering',
    description:
      'A Canva-like editor extended with QR code generation and structured JSON-driven content rendering, with flexible template generation from configuration data.',
    github: 'https://github.com/Sarina-R/canva-clone',
    color: '#6E3FA6',
  },
]
