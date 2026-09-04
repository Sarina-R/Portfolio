'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * Next.js remounts template.tsx (not layout.tsx) on every route change,
 * which is exactly the "play an animation once per navigation" primitive
 * page-transition.tsx needs — no need to guess whether your header lives
 * inside or outside the TransitionProvider tree.
 *
 * The 0.15s delay means content starts fading in a beat into the "hold"
 * phase — invisible under the overlay at that point — so it's already
 * partway through its animation by the time the bands start sweeping away,
 * and the two effects land together instead of content just popping in
 * after the wipe finishes.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      {children}
    </motion.div>
  )
}
