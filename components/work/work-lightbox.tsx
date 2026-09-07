'use client'
import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Work } from '@/lib/data/works'
import { ShotTile } from '@/components/work/shot-tile'
export function WorkLightbox({
  work,
  onClose,
}: {
  work: Work
  onClose: () => void
}) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') {
        setIdx((v) => (v + 1) % work.images.length)
      }
      if (e.key === 'ArrowLeft') {
        setIdx((v) => (v - 1 + work.images.length) % work.images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [work.images.length, onClose])
  const previousImage = () => {
    setIdx((v) => (v - 1 + work.images.length) % work.images.length)
  }
  const nextImage = () => {
    setIdx((v) => (v + 1) % work.images.length)
  }
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 sm:p-8'
      onClick={onClose}
    >
      <div
        className='relative flex max-h-[90vh] w-full max-w-3xl flex-col border-[4px] border-cream bg-[#f3ecdc] shadow-brutal-cream'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='flex shrink-0 items-center justify-between border-b-[4px] border-ink px-5 py-3'>
          <div>
            <p className='font-display text-lg'>{work.title}</p>
            <p className='font-mono text-xs text-ink/60'>
              {String(idx + 1).padStart(2, '0')} /{' '}
              {String(work.images.length).padStart(2, '0')}
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
        {/* Image */}
        <div className='relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-cream'>
          <div className='relative mx-auto aspect-[9/16] h-full max-h-[65vh] w-full'>
            <ShotTile
              src={work.images[idx]}
              index={idx}
              color={work.color}
              label={`${work.title} shot ${idx + 1}`}
              fit='contain'
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
        {/* Description */}
        <p className='shrink-0 px-5 py-4 text-sm text-ink/80'>
          {work.description}
        </p>
        {/* Thumbnails */}
        <div className='flex shrink-0 gap-2 overflow-x-auto border-t-[4px] border-ink p-3'>
          {work.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIdx(i)}
              className='aspect-[9/16] h-20 w-auto shrink-0 overflow-hidden border-[3px]'
              style={{
                borderColor: i === idx ? '#14110F' : 'rgba(20,17,15,0.3)',
              }}
            >
              <ShotTile
                src={src}
                index={i}
                color={work.color}
                label={`thumb ${i + 1}`}
                fit='contain'
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
