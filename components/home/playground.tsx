'use client'

import { useEffect, useRef, useState } from 'react'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'

const COLORS = ['#10938C', '#F6B93E', '#FF3D8A', '#6E3FA6']

export function Playground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const colorIndex = useRef(0)
  const last = useRef<{ x: number; y: number } | null>(null)
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const draw = (x: number, y: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    if (!touched) setTouched(true)

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = COLORS[colorIndex.current % COLORS.length]
    ctx.lineWidth = 6

    ctx.beginPath()
    ctx.moveTo(
      last.current ? last.current.x : x,
      last.current ? last.current.y : y,
    )
    ctx.lineTo(x, y)
    ctx.stroke()
    last.current = { x, y }
  }

  const pointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.buttons !== 1 && e.pointerType === 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    draw(e.clientX - rect.left, e.clientY - rect.top)
  }

  const lift = () => {
    last.current = null
    colorIndex.current += 1
  }

  const clear = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setTouched(false)
  }

  return (
    <section className='border-b-[6px] border-ink bg-gold px-6 py-20 sm:px-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-wrap items-end justify-between gap-4'>
          <div>
            <SectionEyebrow label='try it' color='pink' rotate={-2} />
            <h2 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
              Built for real interfaces.
              <br />
              Drawn for fun.
            </h2>
          </div>
          <button
            onClick={clear}
            className='border-[3px] border-ink bg-cream px-5 py-3 font-bold text-ink shadow-brutal-sm transition-transform hover:-translate-y-0.5'
          >
            Clear
          </button>
        </div>

        <div className='relative mt-10 border-[4px] border-ink bg-paper shadow-brutal-lg'>
          <canvas
            ref={canvasRef}
            onPointerMove={pointerMove}
            onPointerUp={lift}
            onPointerLeave={lift}
            className='h-[360px] w-full touch-none sm:h-[420px]'
          />
          {!touched && (
            <p className='pointer-events-none absolute inset-0 flex items-center justify-center font-display text-lg text-ink/30 sm:text-2xl'>
              scribble here
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
