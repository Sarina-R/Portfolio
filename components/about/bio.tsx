import { GitBranch, Phone } from 'lucide-react'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'
import { CrayonUnderline } from '@/components/ui/crayon-doodle'

export function Bio() {
  return (
    <section className='border-b-[6px] border-ink bg-cream px-6 py-20 sm:px-10'>
      <div className='mx-auto max-w-3xl'>
        <SectionEyebrow label='about' color='teal' rotate={-2} />
        <h1 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-6xl'>
          Design thinking,
          <br />
          shipped as{' '}
          <span className='relative inline-block'>
            code.
            <CrayonUnderline
              color='#FF3D8A'
              className='absolute -bottom-3 left-0 h-4 w-full'
            />
          </span>
        </h1>
        <p className='mt-8 max-w-xl text-[15px] leading-relaxed text-ink/80 sm:text-base'>
          I'm a frontend developer with nearly three years building production
          web applications in React, Next.js, and TypeScript. I work at the seam
          between UI/UX and engineering — reusable design systems, REST API
          integration, state management, and JSON-driven rendering for
          multilingual, RTL products. I care about pixel-accuracy,
          accessibility, and code that's still pleasant to touch six months
          later.
        </p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='https://github.com/Sarina-R'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 border-[3px] border-ink bg-ink px-4 py-2 text-sm font-bold text-cream hover:bg-purple'
          >
            <GitBranch size={16} /> Sarina-R
          </a>
          <a
            href='tel:+989938023855'
            className='flex items-center gap-2 border-[3px] border-ink bg-cream px-4 py-2 text-sm font-bold text-ink hover:bg-gold'
          >
            <Phone size={16} /> +98 993 802 3855
          </a>
        </div>
      </div>
    </section>
  )
}
