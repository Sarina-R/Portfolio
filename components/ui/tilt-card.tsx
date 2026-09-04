'use client'

import React, { useRef, useState } from 'react'

type TiltCardProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  strength?: number
}

/**
 * Cursor-reactive tilt wrapper. Previously inlined inside SkillsGrid — pulled
 * out so Capabilities can reuse it instead of redefining the same hook.
 */
export function TiltCard({
  children,
  className = '',
  style,
  strength = 6,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState<React.CSSProperties>({})

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        setTilt({
          transform: `perspective(900px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg)`,
        })
      }}
      onMouseLeave={() =>
        setTilt({ transform: 'perspective(900px) rotateY(0) rotateX(0)' })
      }
      className={`transition-transform duration-150 will-change-transform ${className}`}
      style={{ ...style, ...tilt }}
    >
      {children}
    </div>
  )
}
