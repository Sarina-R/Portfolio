import {
  CrayonCircle,
  CrayonScribble,
  CrayonUnderline,
} from '@/components/ui/crayon-doodle'

export function Manifesto() {
  return (
    <section className='relative overflow-hidden border-b-[6px] border-ink bg-ink px-6 py-24 sm:px-10'>
      <CrayonCircle
        color='#F6B93E'
        className='pointer-events-none absolute -left-6 top-10 h-24 w-24 opacity-80 sm:h-32 sm:w-32'
      />
      <CrayonScribble
        color='#10938C'
        className='pointer-events-none absolute bottom-10 right-6 h-16 w-28 opacity-80 sm:right-16'
      />

      <div className='mx-auto max-w-4xl text-center'>
        <p className='font-display text-3xl leading-[1.05] text-cream sm:text-5xl'>
          I don't ship mockups.
        </p>
        <p className='mt-2 font-display text-3xl leading-[1.05] text-gold sm:text-5xl'>
          I ship the real thing —
        </p>
        <p className='mt-2 font-display text-3xl leading-[1.05] text-pink sm:text-5xl'>
          state for state, pixel for pixel.
        </p>
        <CrayonUnderline color='#6E3FA6' className='mx-auto mt-6 h-4 w-48' />
      </div>
    </section>
  )
}
