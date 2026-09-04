'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Full-screen layered transition between routes — a stack of brand-color
 * rectangles that sweep in from the left, fully cover the viewport, then
 * continue sweeping off to the right to uncover the new route underneath.
 *
 * The content's own entrance animation (fade + rise) lives separately, in
 * app/template.tsx — that's the idiomatic App Router way to re-play an
 * animation on every navigation without this provider needing to know
 * whether your header/nav sit inside or outside {children}.
 *
 * Phases (~1.9s total):
 *   1. idle      — overlay hidden, site interactive
 *   2. covering  — bands sweep in from the left until fully covered (~0.65s)
 *   3. hold      — brief pause, crayon-star mark spins, new route mounts underneath (~0.45s)
 *   4. revealing — bands continue sweeping right and off-screen (~0.65s)
 */

type Phase = 'idle' | 'covering' | 'hold' | 'revealing'

// 6 strips cycling the brand palette — denser than 4 for a proper "confetti wipe".
const BANDS: { color: string; delay: number }[] = [
  { color: '#10938C', delay: 0 },
  { color: '#F6B93E', delay: 0.05 },
  { color: '#FF3D8A', delay: 0.1 },
  { color: '#6E3FA6', delay: 0.15 },
  { color: '#10938C', delay: 0.2 },
  { color: '#F6B93E', delay: 0.25 },
]

const TransitionContext = createContext<{ navigate: (href: string) => void }>({
  navigate: () => {},
})

export function useTransitionRouter() {
  return useContext(TransitionContext)
}

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('idle')
  const busy = useRef(false)

  const navigate = useCallback(
    (href: string) => {
      if (busy.current) return
      busy.current = true
      setPhase('covering')

      window.setTimeout(() => {
        setPhase('hold')
        router.push(href)

        window.setTimeout(() => {
          setPhase('revealing')

          window.setTimeout(() => {
            setPhase('idle')
            busy.current = false
          }, 650)
        }, 450)
      }, 650)
    },
    [router],
  )

  const covering = phase === 'covering' || phase === 'hold'

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <AnimatePresence>
        {phase !== 'idle' && (
          <div className='pointer-events-none fixed inset-0 z-[999] overflow-hidden'>
            {BANDS.map((b, i) => (
              <motion.div
                key={i}
                className='absolute inset-0'
                style={{ background: b.color }}
                initial={{ x: '-100%' }}
                animate={{ x: covering ? '0%' : '100%' }}
                transition={{
                  duration: 0.65,
                  ease: [0.76, 0, 0.24, 1],
                  delay: covering ? b.delay : (BANDS.length - 1 - i) * 0.05,
                }}
              />
            ))}

            <AnimatePresence>
              {phase === 'hold' && (
                <motion.div
                  className='absolute inset-0 z-10 grid place-items-center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.svg
                    viewBox='0 0 60 60'
                    className='h-16 w-16'
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <path
                      d='M30 4 L36 24 L56 24 L40 36 L46 56 L30 44 L14 56 L20 36 L4 24 L24 24 Z'
                      stroke='#F3ECDC'
                      strokeWidth={4}
                      strokeLinejoin='round'
                      strokeLinecap='round'
                      fill='none'
                    />
                  </motion.svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  )
}

export function TransitionLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const { navigate } = useTransitionRouter()

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
        navigate(href)
      }}
    >
      {children}
    </a>
  )
}
