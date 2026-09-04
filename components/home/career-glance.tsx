import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { EXPERIENCE } from '@/lib/data/experience'

export function CareerAtAGlance() {
  return (
    <section className='border-b-[6px] border-ink bg-paper px-6 py-16 sm:px-10'>
      <div className='mx-auto max-w-6xl'>
        <SectionEyebrow label='career, briefly' color='purple' rotate={2} />
        <div className='relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3'>
          {EXPERIENCE.map((r, i) => (
            <div
              key={r.role + r.when}
              className={`relative border-[3px] border-ink bg-cream p-5 shadow-brutal-sm ${
                i % 2 === 0 ? 'sm:mt-0' : 'sm:mt-8'
              }`}
            >
              <span
                className='absolute -top-3 left-4 h-5 w-5 border-[3px] border-ink'
                style={{ background: r.color }}
              />
              <p className='font-mono text-xs font-bold text-ink/50'>
                {r.when}
              </p>
              <h3 className='mt-2 font-display text-lg text-ink'>{r.role}</h3>
              <p className='text-sm font-bold text-ink/70'>{r.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
