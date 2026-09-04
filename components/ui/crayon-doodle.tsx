'use client'

import { motion } from 'framer-motion'
import { useId } from 'react'

/**
 * Reusable "crayon" SVG accents — a few hand-drawn shapes (underline, circle,
 * scribble, star, arrow) sharing one wobble filter, animated in via
 * framer-motion's pathLength on scroll (once, not on every re-render).
 *
 * Deliberately kept out of the page-transition overlay: an SVG turbulence
 * filter animating full-screen on every route change is a real perf cost.
 * Here it's a small, static-ish accent triggered once per section, which is
 * cheap and reads as intentional rather than scattered.
 */

type CrayonProps = {
  color?: string
  className?: string
  delay?: number
}

function useCrayonFilterId() {
  return `crayon-${useId().replace(/[:]/g, '')}`
}

function CrayonFilter({ filterId }: { filterId: string }) {
  return (
    <defs>
      <filter id={filterId} x='-20%' y='-20%' width='140%' height='140%'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='0.9'
          numOctaves='2'
          seed='7'
          result='noise'
        />
        <feDisplacementMap in='SourceGraphic' in2='noise' scale='3' />
      </filter>
    </defs>
  )
}

export function CrayonUnderline({
  color = '#FF3D8A',
  className = '',
  delay = 0,
}: CrayonProps) {
  const filterId = useCrayonFilterId()
  return (
    <svg
      className={className}
      viewBox='0 0 300 20'
      fill='none'
      preserveAspectRatio='none'
      aria-hidden
    >
      <CrayonFilter filterId={filterId} />
      <motion.path
        d='M3 12 C 60 4, 110 17, 160 8 S 240 3, 297 11'
        stroke={color}
        strokeWidth={7}
        strokeLinecap='round'
        filter={`url(#${filterId})`}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function CrayonCircle({
  color = '#F6B93E',
  className = '',
  delay = 0,
}: CrayonProps) {
  const filterId = useCrayonFilterId()
  return (
    <svg className={className} viewBox='0 0 120 120' fill='none' aria-hidden>
      <CrayonFilter filterId={filterId} />
      <motion.path
        d='M60 8 C 92 8 110 32 110 60 C 110 90 88 111 59 111 C 30 111 9 89 10 59 C 11 30 30 8 60 8 Z'
        stroke={color}
        strokeWidth={6}
        strokeLinecap='round'
        fill='none'
        filter={`url(#${filterId})`}
        initial={{ pathLength: 0, rotate: -6, opacity: 0 }}
        whileInView={{ pathLength: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function CrayonScribble({
  color = '#6E3FA6',
  className = '',
  delay = 0,
}: CrayonProps) {
  const filterId = useCrayonFilterId()
  return (
    <svg className={className} viewBox='0 0 100 60' fill='none' aria-hidden>
      <CrayonFilter filterId={filterId} />
      <motion.path
        d='M6 40 C 20 10, 35 55, 50 22 S 75 5, 94 32'
        stroke={color}
        strokeWidth={5}
        strokeLinecap='round'
        filter={`url(#${filterId})`}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function CrayonStar({
  color = '#10938C',
  className = '',
  delay = 0,
}: CrayonProps) {
  const filterId = useCrayonFilterId()
  return (
    <svg className={className} viewBox='0 0 60 60' fill='none' aria-hidden>
      <CrayonFilter filterId={filterId} />
      <motion.path
        d='M30 4 L36 24 L56 24 L40 36 L46 56 L30 44 L14 56 L20 36 L4 24 L24 24 Z'
        stroke={color}
        strokeWidth={4}
        strokeLinejoin='round'
        strokeLinecap='round'
        fill='none'
        filter={`url(#${filterId})`}
        initial={{ pathLength: 0, scale: 0.7, opacity: 0 }}
        whileInView={{ pathLength: 1, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: 'easeInOut' }}
      />
    </svg>
  )
}
