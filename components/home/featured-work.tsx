'use client'

import { useState } from 'react'
import { WORKS } from '@/lib/data/works'
import { WorkCard } from '@/components/work/work-card'
import { WorkLightbox } from '@/components/work/work-lightbox'
import { TransitionLink } from '@/components/layout/page-transition'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { CrayonScribble } from '@/components/ui/crayon-doodle'
import type { Work } from '@/lib/data/works'

export function FeaturedWork() {
  const [active, setActive] = useState<Work | null>(null)
  const featured = WORKS.slice(0, 3)

  return (
    <section
      id='work'
      className='relative border-b-[6px] border-ink bg-paper px-6 py-20 sm:px-10'
    >
      <CrayonScribble
        color='#F6B93E'
        className='pointer-events-none absolute right-10 top-8 hidden h-14 w-24 sm:block'
      />
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-wrap items-end justify-between gap-4'>
          <div>
            <SectionEyebrow label='selected work' color='pink' rotate={2} />
            <h2 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
              Products, not mockups.
            </h2>
          </div>
          <TransitionLink
            href='/work'
            className='border-[3px] border-ink bg-cream px-5 py-3 font-bold text-ink shadow-brutal-sm transition-transform hover:-translate-y-0.5'
          >
            View all work
          </TransitionLink>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {featured.map((w, i) => (
            <div
              key={w.id}
              className={
                i === 0
                  ? 'sm:-rotate-[0.5deg]'
                  : i === 2
                    ? 'sm:rotate-[0.5deg]'
                    : ''
              }
            >
              <WorkCard work={w} onOpen={setActive} />
            </div>
          ))}
        </div>
      </div>

      {active && <WorkLightbox work={active} onClose={() => setActive(null)} />}
    </section>
  )
}
