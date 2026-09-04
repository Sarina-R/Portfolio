import { TransitionLink } from '@/components/layout/page-transition'
import { ArrowRight } from 'lucide-react'
import { CrayonStar, CrayonScribble } from '@/components/ui/crayon-doodle'

export function CtaBand() {
  return (
    <section className='relative overflow-hidden border-b-[6px] border-ink bg-purple px-6 py-16 text-center sm:px-10'>
      <CrayonStar
        color='#F6B93E'
        className='pointer-events-none absolute left-8 top-8 h-10 w-10 sm:left-16'
      />
      <CrayonScribble
        color='#FF3D8A'
        className='pointer-events-none absolute bottom-6 right-8 h-12 w-20 sm:right-20'
      />
      <p className='font-display text-3xl leading-tight text-cream sm:text-5xl'>
        Got a product that needs a frontend that feels this alive?
      </p>
      <TransitionLink
        href='/contact'
        className='mt-8 inline-flex items-center gap-2 border-[3px] border-cream bg-pink px-6 py-4 font-bold text-cream shadow-brutal-cream transition-transform hover:-translate-y-0.5'
      >
        Start a conversation
        <ArrowRight size={18} />
      </TransitionLink>
    </section>
  )
}
