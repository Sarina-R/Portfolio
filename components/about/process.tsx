import { PROCESS } from '@/lib/data/skills'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'

const ACCENTS = ['#10938C', '#F6B93E', '#FF3D8A', '#6E3FA6']

export function Process() {
  return (
    <section className='border-b-[6px] border-ink bg-cream px-6 py-20 sm:px-10'>
      <div className='mx-auto max-w-6xl'>
        <SectionEyebrow label='how I work' color='purple' rotate={-2} />
        <h2 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
          Four steps, every project.
        </h2>

        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className='relative border-[3px] border-ink bg-paper p-5 shadow-brutal-sm'
            >
              <span
                className='absolute -left-1 -top-3 border-[3px] border-ink px-2 py-0.5 font-mono text-xs font-bold text-ink'
                style={{ background: ACCENTS[i % ACCENTS.length] }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className='mt-4 font-display text-xl text-ink'>{p.step}</h3>
              <p className='mt-2 text-sm leading-relaxed text-ink/70'>
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
