'use client'

import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import type { Work, WorkColor } from '@/lib/data/works'
import { ShotTile } from '@/components/work/shot-tile'
import { TransitionLink } from '@/components/layout/page-transition'

const COLOR_CLASS: Record<WorkColor, string> = {
  teal: 'bg-teal text-cream',
  gold: 'bg-gold text-ink',
  pink: 'bg-pink text-cream',
  purple: 'bg-purple text-cream',
}

const MAT_CLASS: Record<WorkColor, string> = {
  teal: 'bg-teal/15',
  gold: 'bg-gold/20',
  pink: 'bg-pink/15',
  purple: 'bg-purple/15',
}

export function WorkCard({
  work,
  onOpen,
}: {
  work: Work
  onOpen: (w: Work, index?: number) => void
}) {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const mvX = useMotionValue(0.5)
  const mvY = useMotionValue(0.5)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mvX.set((e.clientX - rect.left) / rect.width)
    mvY.set((e.clientY - rect.top) / rect.height)
  }

  const tileStep = () => {
    const tile = scrollerRef.current?.querySelector(
      '[data-tile]',
    ) as HTMLElement | null
    return (tile?.offsetWidth ?? 200) + 16
  }

  const scrollBy = (dir: 1 | -1) =>
    scrollerRef.current?.scrollBy({
      left: dir * tileStep(),
      behavior: 'smooth',
    })

  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    setActive(Math.round(el.scrollLeft / tileStep()))
  }

  return (
    <motion.div
      className='group relative border-[4px] border-ink bg-paper p-5'
      style={{
        boxShadow: hover ? '10px 10px 0 #14110F' : '6px 6px 0 #14110F',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false)
        mvX.set(0.5)
        mvY.set(0.5)
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
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

      <div className='relative mt-6'>
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onWheel={(e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX))
              e.currentTarget.scrollLeft += e.deltaY
          }}
          className='flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-clip scroll-smooth pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden'
        >
          {work.images.map((src, i) => (
            <motion.button
              key={src}
              data-tile
              onClick={() => onOpen(work, i)}
              className={`relative aspect-[9/16] h-72 shrink-0 snap-center border-[3px] border-ink sm:h-96 ${MAT_CLASS[work.color]}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className='absolute inset-1.5'>
                <ShotTile
                  src={src}
                  index={i}
                  color={work.color}
                  label={`${work.title} shot ${i + 1}`}
                />
              </div>
              <span className='absolute bottom-2 right-2 grid h-7 w-7 place-items-center rounded-full border-[2px] border-ink bg-cream/90 opacity-0 transition-opacity group-hover:opacity-100'>
                <ZoomIn size={13} strokeWidth={2.5} />
              </span>
            </motion.button>
          ))}
        </div>

        {work.images.length > 1 && (
          <>
            <button
              onClick={() => scrollBy(-1)}
              className='absolute left-1 top-1/2 hidden -translate-y-1/2 place-items-center border-[3px] border-ink bg-cream/95 p-1.5 shadow-brutal-sm sm:grid sm:opacity-0 sm:group-hover:opacity-100'
              aria-label='Scroll left'
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className='absolute right-1 top-1/2 hidden -translate-y-1/2 place-items-center border-[3px] border-ink bg-cream/95 p-1.5 shadow-brutal-sm sm:grid sm:opacity-0 sm:group-hover:opacity-100'
              aria-label='Scroll right'
            >
              <ChevronRight size={16} />
            </button>
            <span className='absolute -bottom-1 right-1 border-[2px] border-ink bg-ink px-2 py-0.5 font-mono text-[10px] font-bold text-cream'>
              {String(Math.min(active + 1, work.images.length)).padStart(
                2,
                '0',
              )}
              /{String(work.images.length).padStart(2, '0')}
            </span>
          </>
        )}
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
    </motion.div>
  )
}
