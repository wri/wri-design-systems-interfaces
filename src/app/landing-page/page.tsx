import { HeroSection } from '@/components/LandingPage/HeroSection'
import { KeyFactorsSection } from '@/components/LandingPage/KeyFactorsSection'
import { TargetAudienceSection } from '@/components/LandingPage/TargetAudienceSection'
import { ProcessSection } from '@/components/LandingPage/ProcessSection'
import { CTASection } from '@/components/LandingPage/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyFactorsSection />
      <TargetAudienceSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
