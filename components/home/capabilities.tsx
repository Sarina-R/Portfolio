import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { CrayonUnderline } from '@/components/ui/crayon-doodle'
import {
  Boxes,
  SlidersHorizontal,
  Palette,
  Gauge,
  Accessibility,
} from 'lucide-react'
import { TiltCard } from '../ui/tilt-card'

const CAPS = [
  {
    title: 'Complex problem solving',
    body: 'Breaking down complex requirements into maintainable solutions — from application logic and state to data flows, integrations and edge cases.',
    icon: Boxes,
    bg: '#10938C',
    text: '#F3ECDC',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    title: 'Server ⇄ Client, on purpose',
    body: 'Every boundary is a decision, not a default — kept deliberately thin to control what actually ships to the browser.',
    icon: SlidersHorizontal,
    bg: '#F6B93E',
    text: '#14110F',
    span: '',
  },
  {
    title: 'Accessible by design',
    body: 'Semantic HTML, keyboard navigation and thoughtful interactions — built so interfaces work for more people.',
    icon: Accessibility,
    bg: '#FF3D8A',
    text: '#F3ECDC',
    span: '',
  },
  {
    title: 'Design-to-code fidelity',
    body: 'Figma files translated into pixel-accurate, animated interfaces — not an approximation of the design.',
    icon: Palette,
    bg: '#6E3FA6',
    text: '#F3ECDC',
    span: '',
  },
  {
    title: 'Performance-minded',
    body: "Dynamic imports, memoization and image optimization, so the polish doesn't cost the load time.",
    icon: Gauge,
    bg: '#14110F',
    text: '#F3ECDC',
    span: '',
  },
]

export function Capabilities() {
  return (
    <section className='border-b-[6px] border-ink bg-cream px-6 py-20 sm:px-10'>
      <div className='mx-auto max-w-6xl'>
        <SectionEyebrow label='how I build' color='teal' rotate={-2} />
        <h2 className='mt-5 max-w-xl font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
          Not just interfaces —
          <br />
          systems that hold up.
        </h2>
        <CrayonUnderline color='#FF3D8A' className='mt-3 h-4 w-40' />

        <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {CAPS.map((c) => (
            <TiltCard
              key={c.title}
              className={`border-[4px] border-ink p-6 shadow-brutal ${c.span}`}
              style={{ background: c.bg, color: c.text }}
            >
              <c.icon size={28} strokeWidth={2.25} />
              <h3 className='mt-4 font-display text-xl leading-tight'>
                {c.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed opacity-90'>
                {c.body}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
