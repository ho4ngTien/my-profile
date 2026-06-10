import { PortfolioLayout } from './layout'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { PortfolioSection } from './components/PortfolioSection'
import { ResumeSection } from './components/ResumeSection'
import { ServicesSection } from './components/ServicesSection'
import { SkillsSection } from './components/SkillsSection'
import { StatsSection } from './components/StatsSection'
import { TestimonialsSection } from './components/TestimonialsSection'

export function PortfolioPage() {
  return (
    <PortfolioLayout>
      <main className="relative xl:ml-80">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </PortfolioLayout>
  )
}
