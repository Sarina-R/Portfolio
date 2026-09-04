import { SKILLS } from '@/lib/data/skills'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { TiltCard } from '@/components/ui/tilt-card'

const COLOR_BG: Record<string, string> = {
  teal: '#10938C',
  gold: '#F6B93E',
  pink: '#FF3D8A',
  purple: '#6E3FA6',
  ink: '#14110F',
  cream: '#F3ECDC',
}
const COLOR_TEXT: Record<string, string> = {
  teal: '#F3ECDC',
  gold: '#14110F',
  pink: '#F3ECDC',
  purple: '#F3ECDC',
  ink: '#F3ECDC',
  cream: '#14110F',
}

export function SkillsGrid() {
  return (
    <section className='border-b-[6px] border-ink bg-paper px-6 py-20 sm:px-10'>
      <div className='mx-auto max-w-6xl'>
        <SectionEyebrow label='toolbox' color='gold' rotate={2} />
        <h2 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
          What I reach for.
        </h2>

        <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
          {SKILLS.map((s) => (
            <TiltCard
              key={s.label}
              className='border-[4px] border-ink p-5 shadow-brutal'
              style={{
                background: COLOR_BG[s.color],
                color: COLOR_TEXT[s.color],
              }}
            >
              <h3 className='font-display text-lg'>{s.label}</h3>
              <ul className='mt-3 space-y-1.5 text-sm font-medium'>
                {s.items.map((it) => (
                  <li key={it} className='flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 shrink-0 bg-current' />
                    {it}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
