import { SELECTED_PROJECTS } from '@/lib/data/projects'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { CrayonStar } from '@/components/ui/crayon-doodle'
import { ExternalLink, GitBranch } from 'lucide-react'

export function SelectedProjects() {
  return (
    <section className='relative border-b-[6px] border-ink bg-cream px-6 py-20 sm:px-10'>
      <div className='mx-auto max-w-6xl'>
        <SectionEyebrow label='from the resume' color='gold' rotate={-2} />
        <h2 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
          A few things I've built.
        </h2>

        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {SELECTED_PROJECTS.map((p) => (
            <div
              key={p.title}
              className='relative border-[4px] border-ink bg-paper p-6 shadow-brutal'
            >
              <span
                className='absolute -right-3 -top-3 h-6 w-6 border-[3px] border-ink'
                style={{ background: p.color }}
              />
              <h3 className='font-display text-2xl text-ink'>{p.title}</h3>
              <p className='mt-1 font-mono text-xs font-bold text-ink/50'>
                {p.stack}
              </p>
              <p className='mt-3 text-sm leading-relaxed text-ink/80'>
                {p.description}
              </p>
              {(p.github || p.live) && (
                <div className='mt-4 flex flex-wrap gap-3'>
                  {p.github && (
                    <a
                      href={p.github}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-1.5 border-[3px] border-ink bg-ink px-3 py-1.5 text-xs font-bold text-cream hover:bg-purple'
                    >
                      <GitBranch size={14} /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-1.5 border-[3px] border-ink bg-cream px-3 py-1.5 text-xs font-bold text-ink hover:bg-gold'
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <CrayonStar
          color='#FF3D8A'
          className='pointer-events-none absolute bottom-10 left-6 hidden h-10 w-10 sm:block'
        />
      </div>
    </section>
  )
}
