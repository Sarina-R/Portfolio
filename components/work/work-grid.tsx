'use client'

import { useMemo, useState } from 'react'
import type { Work } from '@/lib/data/works'
import { WorkCard } from '@/components/work/work-card'
import { WorkLightbox } from '@/components/work/work-lightbox'
import { cn } from '@/lib/utils'

export function WorkGrid({ works }: { works: Work[] }) {
  const [active, setActive] = useState<{ work: Work; index: number } | null>(
    null,
  )
  const [filter, setFilter] = useState<string>('All')

  const tags = useMemo(() => {
    const s = new Set<string>()
    works.forEach((w) => w.tags.forEach((t) => s.add(t)))
    return ['All', ...Array.from(s)]
  }, [works])

  const filtered =
    filter === 'All' ? works : works.filter((w) => w.tags.includes(filter))

  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={cn(
              'border-[3px] border-ink px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors',
              filter === t
                ? 'bg-ink text-cream'
                : 'bg-cream text-ink hover:bg-gold',
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 '>
        {filtered.map((w) => (
          <WorkCard
            key={w.id}
            work={w}
            onOpen={(work, index) => setActive({ work, index: index ?? 0 })}
          />
        ))}
      </div>

      {active && (
        <WorkLightbox
          work={active.work}
          initialIndex={active.index}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  )
}
