'use client'

import React, { useRef, useState } from 'react'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { TransitionLink } from '@/components/layout/page-transition'

const HERO_IMAGE = '/hero.jpg'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const [broken, setBroken] = useState(false)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setStyle({
      transform: `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`,
    })
  }

  return (
    <section className='relative overflow-hidden border-b-[6px] border-ink'>
      <div className='grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr]'>
        <div
          className='bg-grid relative flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 md:py-24'
          style={{ backgroundColor: '#10938C' }}
        >
          <div className='absolute -top-4 left-6 w-fit -rotate-6 border-[4px] border-ink bg-gold px-4 py-2 font-display text-3xl text-ink shadow-brutal sm:text-4xl'>
            frontend&nbsp;dev
          </div>

          <p className='mt-14 font-mono text-sm font-bold uppercase tracking-widest text-cream sm:mt-16'>
            Sarina Rezanezhad
          </p>
          <h1 className='font-display text-[15vw] leading-[0.85] text-cream sm:text-[64px] md:text-[76px]'>
            Interfaces
            <br />
            built with
            <br />
            <span className='relative inline-block'>
              intent.
              <svg
                className='absolute -bottom-2 left-0 w-full'
                height='14'
                viewBox='0 0 300 14'
                preserveAspectRatio='none'
              >
                <path
                  d='M2 8 C 60 2, 120 12, 180 6 S 260 2, 298 8'
                  stroke='#FF3D8A'
                  strokeWidth='6'
                  fill='none'
                  strokeLinecap='round'
                />
              </svg>
            </span>
          </h1>

          <p className='max-w-md text-[15px] leading-relaxed text-cream/90 sm:text-base'>
            Nearly three years turning React, Next.js and TypeScript into
            production products — component systems, complex workflows, people
            actually enjoy using.
          </p>

          <div className='flex flex-wrap items-center gap-3 pt-2'>
            <TransitionLink
              href='/work'
              className='group flex items-center gap-2 border-[3px] border-ink bg-pink px-5 py-3 font-bold text-cream shadow-brutal transition-transform hover:-translate-y-0.5'
            >
              See the work
              <ArrowRight
                size={18}
                className='transition-transform group-hover:translate-x-1'
              />
            </TransitionLink>
            <TransitionLink
              href='/contact'
              className='flex items-center gap-2 border-[3px] border-ink bg-cream px-5 py-3 font-bold text-ink shadow-brutal transition-transform hover:-translate-y-0.5'
            >
              <Mail size={18} />
              Say hello
            </TransitionLink>
          </div>
        </div>

        <div
          className='relative flex items-center justify-center overflow-hidden px-8 py-14'
          style={{ background: '#F6B93E' }}
        >
          <svg
            className='absolute right-4 top-6 h-10 w-16 text-ink'
            viewBox='0 0 100 40'
            fill='none'
          >
            <path
              d='M2 30 L18 4 L34 30 L50 4 L66 30 L82 4 L98 30'
              stroke='currentColor'
              strokeWidth='6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <Sparkles
            className='absolute left-8 bottom-10 text-purple'
            size={28}
          />

          <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={() =>
              setStyle({
                transform: 'perspective(900px) rotateY(0) rotateX(0)',
              })
            }
            className='relative w-full max-w-[320px] border-[5px] border-ink bg-paper shadow-brutal-lg transition-transform duration-150 ease-out will-change-transform'
            style={style}
          >
            <div className='aspect-[4/5] w-full overflow-hidden'>
              {!broken ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={HERO_IMAGE}
                  alt='Sarina Rezanezhad'
                  onError={() => setBroken(true)}
                  className='h-full w-full object-cover'
                  draggable={false}
                />
              ) : (
                <div className='flex h-full w-full items-center justify-center bg-teal font-mono text-xs text-cream'>
                  /public/hero.jpg
                </div>
              )}
            </div>
            <div className='absolute -bottom-5 -right-5 -rotate-3 border-[3px] border-ink bg-purple px-3 py-1 font-mono text-xs font-bold text-cream shadow-brutal-sm bg-amber-200'>
              open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
