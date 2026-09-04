import { GitBranch, Mail, Phone } from 'lucide-react'
import { TransitionLink } from '@/components/layout/page-transition'

export function Footer() {
  return (
    <footer className='border-t-[6px] border-ink bg-ink px-6 py-16 sm:px-10 bg-amber-400'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='font-display text-4xl leading-[0.95] text-cream sm:text-6xl'>
          Let's build
          <br />
          something sharp.
        </h2>

        <div className='mt-8 flex flex-wrap gap-4'>
          <a
            href='mailto:SarinnaRezanezhadfard@gmail.com'
            className='flex items-center gap-2 border-[3px] border-cream bg-pink px-5 py-3 font-bold text-cream shadow-brutal-cream transition-transform hover:-translate-y-0.5'
          >
            <Mail size={18} /> SarinnaRezanezhadfard@gmail.com
          </a>
          <a
            href='tel:+989938023855'
            className='flex items-center gap-2 border-[3px] border-cream bg-transparent px-5 py-3 font-bold text-cream transition-colors hover:bg-cream hover:text-ink'
          >
            <Phone size={18} /> +98 993 802 3855
          </a>
          <a
            href='https://github.com/Sarina-R'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 border-[3px] border-cream bg-transparent px-5 py-3 font-bold text-cream transition-colors hover:bg-cream hover:text-ink'
          >
            <GitBranch size={18} /> github.com/Sarina-R
          </a>
        </div>

        <div className='mt-12 flex flex-wrap items-center justify-between gap-4 border-t-[2px] border-cream/20 pt-6'>
          <p className='font-mono text-xs text-cream/50'>
            Frontend Developer — React · Next.js · TypeScript — Iran
          </p>
          <nav className='flex gap-5 text-sm font-bold text-cream/70'>
            <TransitionLink href='/about' className='hover:text-cream'>
              About
            </TransitionLink>
            <TransitionLink href='/work' className='hover:text-cream'>
              Work
            </TransitionLink>
            <TransitionLink href='/contact' className='hover:text-cream'>
              Contact
            </TransitionLink>
          </nav>
        </div>
      </div>
    </footer>
  )
}
