'use client'
import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Work, WorkColor } from '@/lib/data/works'
import { ShotTile } from '@/components/work/shot-tile'

const MAT_BG: Record<WorkColor, string> = {
  teal: '#0d3f3c',
  gold: '#3a2c0e',
  pink: '#3a0e24',
  purple: '#241033',
}

export function WorkLightbox({
  work,
  initialIndex = 0,
  onClose,
}: {
  work: Work
  initialIndex?: number
  onClose: () => void
}) {
  const [idx, setIdx] = useState(initialIndex)

  useEffect(() => {
    setIdx(initialIndex)
  }, [initialIndex, work.id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx((v) => (v + 1) % work.images.length)
      if (e.key === 'ArrowLeft')
        setIdx((v) => (v - 1 + work.images.length) % work.images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [work.images.length, onClose])

  const previousImage = () =>
    setIdx((v) => (v - 1 + work.images.length) % work.images.length)
  const nextImage = () => setIdx((v) => (v + 1) % work.images.length)

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 sm:p-8'
      onClick={onClose}
    >
      <div
        className='relative flex h-[92vh] w-full max-w-5xl flex-col border-[4px] border-cream bg-[#f3ecdc] shadow-brutal-cream'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex shrink-0 items-center justify-between border-b-[4px] border-ink px-5 py-3'>
          <div>
            <p className='font-display text-lg'>{work.title}</p>
            <p className='font-mono text-xs text-ink/60'>
              {String(idx + 1).padStart(2, '0')} /{' '}
              {String(work.images.length).padStart(2, '0')}
              <span className='ml-2 hidden text-ink/40 sm:inline'>
                · scroll or double-click to zoom, drag to pan
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className='grid h-9 w-9 place-items-center border-[3px] border-ink bg-cream hover:bg-pink'
            aria-label='Close gallery'
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div className='relative min-h-0 flex-1 overflow-hidden shadow-md'>
          <div className='absolute inset-4 sm:inset-8'>
            <ShotTile
              src={work.images[idx]}
              index={idx}
              color={work.color}
              label={`${work.title} shot ${idx + 1}`}
            />
          </div>
          <button
            onClick={previousImage}
            className='absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border-[3px] border-ink bg-cream hover:bg-gold'
            aria-label='Previous image'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className='absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center border-[3px] border-ink bg-cream hover:bg-gold'
            aria-label='Next image'
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className='shrink-0 px-5 py-4 text-sm text-ink/80'>
          {work.description}
        </p>

        <div className='flex shrink-0 gap-2 overflow-x-auto border-t-[4px] border-ink p-3'>
          {work.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIdx(i)}
              className='h-16 w-16 shrink-0 overflow-hidden border-[3px] sm:h-20 sm:w-20'
              style={{
                borderColor: i === idx ? '#14110F' : 'rgba(20,17,15,0.3)',
              }}
            >
              <ShotTile
                src={src}
                index={i}
                color={work.color}
                label={`thumb ${i + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
