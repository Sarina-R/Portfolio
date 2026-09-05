import type { Metadata } from 'next'
import { Bio } from '@/components/about/bio'
import { ExperienceTimeline } from '@/components/about/experience-timeline'
import { SkillsGrid } from '@/components/about/skills-grid'
import { SelectedProjects } from '@/components/about/selected-projects'
import { Process } from '@/components/about/process'
import { BeyondFrontend } from '@/components/about/beyond-frontend'

export const metadata: Metadata = { title: 'About — Sarina Rezanezhad' }

export default function AboutPage() {
  return (
    <>
      <Bio />
      <ExperienceTimeline />
      <SkillsGrid />
      <SelectedProjects />
      <Process />
      <BeyondFrontend />
    </>
  )
}
