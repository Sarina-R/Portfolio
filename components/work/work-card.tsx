'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Work, WorkColor } from '@/lib/data/works'
import { ShotTile } from '@/components/work/shot-tile'
import { TransitionLink } from '@/components/layout/page-transition'

const COLOR_CLASS: Record<WorkColor, string> = {
  teal: 'bg-teal text-cream',
  gold: 'bg-gold text-ink',
  pink: 'bg-pink text-cream',
  purple: 'bg-purple text-cream',
}

const FAN_ANGLES = [-10, -3, 4, 11, 18]

export function WorkCard({
  work,
  onOpen,
}: {
  work: Work
  onOpen: (w: Work) => void
}) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className='group relative border-[4px] border-ink bg-paper p-5 transition-transform duration-200 ease-out hover:-translate-y-1'
      style={{ boxShadow: hover ? '10px 10px 0 #14110F' : '6px 6px 0 #14110F' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='flex items-start justify-between gap-3'>
        <div>
          <span
            className={`inline-block border-[3px] border-ink px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide ${COLOR_CLASS[work.color]}`}
          >
            {work.slug}
          </span>
          <h3 className='mt-3 font-display text-2xl leading-[0.95] text-ink sm:text-[26px]'>
            {work.title}
          </h3>
          <p className='mt-1 text-sm text-ink/70'>{work.tagline}</p>
        </div>

        <TransitionLink
          href={work.slug}
          className='grid h-11 w-11 shrink-0 place-items-center border-[3px] border-ink bg-cream shadow-brutal-sm transition-transform duration-150 hover:rotate-45'
        >
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </TransitionLink>
      </div>

      <div
        className='relative mt-6 h-[220px] cursor-pointer select-none sm:h-[260px]'
        onClick={() => onOpen(work)}
      >
        {work.images.map((src, i) => {
          const angle = FAN_ANGLES[i % FAN_ANGLES.length]
          const spreadX = hover ? i * 26 - (work.images.length - 1) * 13 : 0
          const spreadY = hover ? -i * 4 : i * -2
          return (
            <div
              key={src}
              className='absolute left-1/2 top-2 h-[190px] w-[150px] transition-all duration-300 ease-out sm:h-[220px] sm:w-[175px]'
              style={{
                transform: `translate(-50%, 0) translate(${spreadX}px, ${spreadY}px) rotate(${hover ? angle : angle * 0.35}deg)`,
                zIndex: hover ? i : work.images.length - i,
                boxShadow: hover
                  ? '6px 6px 0 rgba(20,17,15,0.9)'
                  : '3px 3px 0 rgba(20,17,15,0.9)',
              }}
            >
              <ShotTile
                src={src}
                index={i}
                color={work.color}
                label={`${work.title} shot ${i + 1}`}
              />
            </div>
          )
        })}
      </div>

      <div className='mt-6 flex flex-wrap gap-2'>
        {work.tags.map((t) => (
          <span
            key={t}
            className='border-[2px] border-ink bg-cream px-2 py-1 font-mono text-[11px] font-bold text-ink'
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
