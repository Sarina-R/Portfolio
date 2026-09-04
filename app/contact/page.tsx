import type { Metadata } from 'next'
import { Mail, GitBranch, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { SectionEyebrow } from '@/components/ui/section-eyebrow'

export const metadata: Metadata = { title: 'Contact — Sarina Rezanezhad' }

const CHANNELS = [
  {
    icon: Mail,
    label: 'SarinnaRezanezhadfard@gmail.com',
    href: 'mailto:SarinnaRezanezhadfard@gmail.com',
  },
  { icon: Phone, label: '+98 993 802 3855', href: 'tel:+989938023855' },
  {
    icon: GitBranch,
    label: 'github.com/Sarina-R',
    href: 'https://github.com/Sarina-R',
  },
  { icon: MapPin, label: 'Iran', href: undefined },
]

export default function ContactPage() {
  return (
    <section className='border-b-[6px] border-ink bg-cream px-6 py-20 sm:px-10'>
      <div className='mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.9fr_1.1fr]'>
        <div>
          <SectionEyebrow label='contact' color='purple' rotate={-2} />
          <h1 className='mt-5 font-display text-4xl leading-[0.95] text-ink sm:text-5xl'>
            Say hello.
          </h1>
          <p className='mt-5 max-w-sm text-[15px] leading-relaxed text-ink/80'>
            Have a product that needs a frontend developer who thinks in systems
            and cares about the details? I'd like to hear about it.
          </p>

          <ul className='mt-8 space-y-3'>
            {CHANNELS.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className='flex items-center gap-3 border-[3px] border-ink bg-paper px-4 py-3 text-sm font-bold shadow-brutal-sm'>
                  <Icon size={16} /> {label}
                </span>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel='noreferrer'
                      className='inline-block transition-transform hover:-translate-y-0.5'
                    >
                      {content}
                    </a>
                  ) : (
                    <div>{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
