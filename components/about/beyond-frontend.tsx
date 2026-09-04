import { BEYOND_FRONTEND } from '@/lib/data/skills'
import { CrayonCircle } from '@/components/ui/crayon-doodle'

const TAG_COLORS = ['#10938C', '#FF3D8A', '#6E3FA6', '#14110F']

export function BeyondFrontend() {
  return (
    <section className='relative overflow-hidden border-b-[6px] border-ink bg-gold px-6 py-16 sm:px-10'>
      <CrayonCircle
        color='#14110F'
        className='pointer-events-none absolute -right-8 -top-8 h-28 w-28 opacity-20 sm:h-36 sm:w-36'
      />
      <div className='relative mx-auto max-w-3xl'>
        <h2 className='font-display text-3xl leading-[0.95] text-ink sm:text-4xl'>
          {BEYOND_FRONTEND.heading}
        </h2>
        <p className='mt-5 text-[15px] leading-relaxed text-ink/85 sm:text-base'>
          {BEYOND_FRONTEND.body}
        </p>
        <div className='mt-6 flex flex-wrap gap-2'>
          {BEYOND_FRONTEND.tags.map((t, i) => (
            <span
              key={t}
              className='border-[3px] border-ink px-3 py-1 font-mono text-xs font-bold text-cream'
              style={{ background: TAG_COLORS[i % TAG_COLORS.length] }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
