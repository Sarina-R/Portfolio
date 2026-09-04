import dynamic from 'next/dynamic'
import { Hero } from '@/components/home/hero'
import { Marquee } from '@/components/home/marquee'
import { StatsBand } from '@/components/home/stats-band'
import { FeaturedWork } from '@/components/home/featured-work'
import { CtaBand } from '@/components/home/cta-band'
import { CareerAtAGlance } from '@/components/home/career-glance'
import { Capabilities } from '@/components/home/capabilities'
import { Manifesto } from '@/components/home/manifesto'

const Playground = dynamic(() =>
  import('@/components/home/playground').then((m) => m.Playground),
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Capabilities />
      <StatsBand />
      <CareerAtAGlance />
      <FeaturedWork />
      <Manifesto />
      <Playground />
      <CtaBand />
    </>
  )
}
