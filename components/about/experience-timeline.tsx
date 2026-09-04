import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { EXPERIENCE } from '@/lib/data/experience'

export function ExperienceTimeline() {
  return (
    <section className='border-b-[6px] border-ink bg-paper px-6 py-20 sm:px-10'>
      <div className='mx-auto max-w-4xl'>
        <SectionEyebrow label='experience' color='pink' rotate={2} />
        <h2 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
          Three roles, one throughline.
        </h2>

        <div className='mt-12 space-y-10 border-l-[4px] border-ink pl-6 sm:pl-10'>
          {EXPERIENCE.map((r) => (
            <div key={r.role + r.when} className='relative'>
              <span
                className='absolute -left-[35px] top-1 h-5 w-5 border-[3px] border-ink sm:-left-[47px]'
                style={{ background: r.color }}
              />
              <p className='font-mono text-xs font-bold text-ink/50'>
                {r.when}
              </p>
              <h3 className='mt-1 font-display text-2xl text-ink'>{r.role}</h3>
              <p className='text-sm font-bold text-ink/70'>{r.org}</p>
              <ul className='mt-3 space-y-1.5'>
                {r.points.map((pt) => (
                  <li
                    key={pt}
                    className='flex gap-2 text-sm leading-relaxed text-ink/80'
                  >
                    <span className='mt-2 h-1.5 w-1.5 shrink-0 bg-current' />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
