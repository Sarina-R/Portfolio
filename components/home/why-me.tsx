'use client'

import { motion } from 'framer-motion'
import {
  Search,
  CheckCircle2,
  MessageCircle,
  Wrench,
  Target,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { CrayonScribble } from '@/components/ui/crayon-doodle'

type NoteColor = 'teal' | 'gold' | 'pink' | 'purple'

const CARD_BG: Record<NoteColor, string> = {
  teal: 'bg-[#10938C] text-cream',
  gold: 'bg-[#F6B93E] text-ink',
  pink: 'bg-[#FF3D8A] text-cream',
  purple: 'bg-[#6E3FA6] text-cream',
}

type Note = {
  icon: LucideIcon
  color: NoteColor
  stamp: string
  title: string
  body: string
  rotate: number
}

const NOTES: Note[] = [
  {
    icon: Search,
    color: 'gold',
    stamp: 'ROOT CAUSE',
    title: "I don't patch symptoms.",
    body: 'When something breaks, I trace it back until I know why — not just far enough to make the error disappear.',
    rotate: -3,
  },
  {
    icon: CheckCircle2,
    color: 'teal',
    stamp: 'SELF-REVIEWED',
    title: 'I judge my own output.',
    body: "Before a PR goes up, I've already asked whether it solves the actual problem — not just whether it compiles.",
    rotate: 2,
  },
  {
    icon: MessageCircle,
    color: 'pink',
    stamp: 'ALIGNED',
    title: 'I talk to designers and PMs, not just tickets.',
    body: "Specs have gaps. I flag the annoying questions in week one, so we're not rebuilding the feature in week three.",
    rotate: -2,
  },
  {
    icon: Wrench,
    color: 'purple',
    stamp: 'MAINTAINABLE',
    title: 'Code the next dev can pick up.',
    body: 'Readable, documented, and structured so nobody — including future me — has to reverse-engineer my intent.',
    rotate: 3,
  },
  {
    icon: Target,
    color: 'pink',
    stamp: 'OUTCOME',
    title: 'I ship the result, not the ticket.',
    body: '"Done" means it holds up for a real user in production — not that the acceptance criteria technically passed.',
    rotate: -1.5,
  },
  {
    icon: Sparkles,
    color: 'gold',
    stamp: 'STILL DIGGING',
    title: 'Curious by default.',
    body: 'I keep pushing on how an interface actually feels, long after most people would call it good enough.',
    rotate: 2.5,
  },
]

export function WhyMe() {
  return (
    <section
      id='why-me'
      className='relative overflow-hidden border-b-[6px] border-ink bg-paper px-6 py-20 sm:px-10'
      style={{
        backgroundImage:
          'radial-gradient(rgba(20,17,15,0.08) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }}
    >
      <CrayonScribble
        color='#10938C'
        className='pointer-events-none absolute -left-6 top-16 hidden h-16 w-28 sm:block'
      />
      <motion.div
        className='pointer-events-none absolute right-8 top-24 hidden sm:block'
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CrayonScribble color='#6E3FA6' className='h-14 w-24' />
      </motion.div>

      <div className='relative mx-auto max-w-6xl'>
        <SectionEyebrow label='the pitch' color='gold' rotate={-2} />

        <h2 className='relative mt-5 max-w-2xl font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
          I&apos;m not just a{' '}
          <span className='relative inline-block'>
            coder.
            <svg
              viewBox='0 0 220 16'
              className='pointer-events-none absolute -bottom-4 left-0 h-4 w-full sm:h-5'
              preserveAspectRatio='none'
              aria-hidden
            >
              <motion.path
                d='M2 10 Q 20 2 38 10 T 74 10 T 110 10 T 146 10 T 182 10 T 218 10'
                stroke='#FF3D8A'
                strokeWidth={7}
                strokeLinecap='round'
                fill='none'
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.3 }}
              />
            </svg>
          </span>
        </h2>

        <p className='mt-5 max-w-xl text-ink/70'>
          Anyone can turn a Figma file into HTML. What teams actually need is
          judgment — someone who questions the spec, tracks down why something
          is really broken, and doesn&apos;t call it done until it holds up in
          production.
        </p>

        <div className='mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {NOTES.map((note, i) => {
            const Icon = note.icon
            return (
              <motion.div
                key={note.title}
                className='relative border-[4px] border-ink bg-[cream] p-6'
                style={{ boxShadow: '6px 6px 0 #14110F' }}
                initial={{ opacity: 0, y: 24, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: note.rotate }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
              >
                <span className='absolute -top-3 left-5 border-[2px] border-ink bg-white! px-2 py-0.5 font-mono text-[10px] font-bold text-ink/60'>
                  FILE №{String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className={`grid h-11 w-11 place-items-center border-[3px] border-ink ${CARD_BG[note.color]}`}
                >
                  <Icon size={20} strokeWidth={2.5} />
                </div>

                <h3 className='mt-4 font-display text-xl leading-tight text-ink'>
                  {note.title}
                </h3>
                <p className='mt-2 text-sm text-ink/70'>{note.body}</p>

                <motion.span
                  className={`absolute -bottom-3 -right-3 rounded-full border-[3px] border-black bg-white! px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide `}
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: -8 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 14,
                    delay: i * 0.08 + 0.25,
                  }}
                >
                  {note.stamp}
                </motion.span>
              </motion.div>
            )
          })}
        </div>

        <div className='mt-14 flex justify-end'>
          <span
            className='border-[3px] border-ink bg-gold px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-ink shadow-brutal-sm'
            style={{ transform: 'rotate(-3deg)' }}
          >
            case closed — worth hiring
          </span>
        </div>
      </div>
    </section>
  )
}
