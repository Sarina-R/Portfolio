import { STATS } from '@/lib/data/skills'
import { CrayonUnderline } from '../ui/crayon-doodle'

const CARD_STYLES = [
  { bg: '#10938C', text: '#F3ECDC', rotate: 'sm:-rotate-1' },
  { bg: '#F6B93E', text: '#14110F', rotate: 'sm:rotate-1' },
  { bg: '#FF3D8A', text: '#F3ECDC', rotate: 'sm:-rotate-1' },
]

export function StatsBand() {
  return (
    <section className='border-b-[6px] border-ink bg-cream px-6 py-10 sm:px-10'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3'>
        {STATS.map((s, i) => {
          const c = CARD_STYLES[i % CARD_STYLES.length]
          return (
            <div
              key={s.label}
              className={`border-[3px] border-ink p-5 shadow-brutal-sm ${c.rotate}`}
              style={{ background: c.bg, color: c.text }}
            >
              <p className='font-display text-4xl'>{s.value}</p>
              <CrayonUnderline
                color={c.text}
                className='mt-2 h-3 w-20'
                delay={0.1 * i}
              />
              <p className='mt-2 text-sm opacity-80'>{s.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
