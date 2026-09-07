import { Hero } from '@/components/home/hero'
import { Marquee } from '@/components/home/marquee'
import { FeaturedWork } from '@/components/home/featured-work'
import { CareerAtAGlance } from '@/components/home/career-glance'
import { Capabilities } from '@/components/home/capabilities'
import { Manifesto } from '@/components/home/manifesto'
import { WhyMe } from '@/components/home/why-me'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Capabilities />
      <CareerAtAGlance />
      <WhyMe />
      <FeaturedWork />
      <Manifesto />
    </>
  )
}
