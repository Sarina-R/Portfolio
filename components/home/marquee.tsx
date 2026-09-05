const TECH = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'shadcn/ui',
  'Framer Motion',
  'Zustand',
  'SWR',
  'Nest.js',
  'Figma',
]
const HIGHLIGHTS = [
  '3+ Years Shipping Frontend',
  'Config-Driven UI',
  'Accessibility',
  'Pixel-Accurate',
  'Clean code',
]

const MARKS = ['✦', '✎', '✳', '●']
const MARK_COLORS = ['#10938C', '#F6B93E', '#FF3D8A', '#6E3FA6']

function Row({
  items,
  reverse = false,
  bg,
  textClass,
}: {
  items: string[]
  reverse?: boolean
  bg: string
  textClass: string
}) {
  const row = [...items, ...items]
  return (
    <div className={`overflow-hidden border-b-[6px] border-ink py-3 ${bg}`}>
      <div
        className={`flex w-max animate-marquee gap-8 ${reverse ? '[animation-direction:reverse]' : ''}`}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className={`flex items-center gap-8 font-display text-xl ${textClass}`}
          >
            {t}
            <span style={{ color: MARK_COLORS[i % MARK_COLORS.length] }}>
              {MARKS[i % MARKS.length]}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <>
      <Row items={TECH} bg='bg-ink' textClass='text-cream' />
      <Row items={HIGHLIGHTS} reverse bg='bg-paper' textClass='text-ink' />
    </>
  )
}
