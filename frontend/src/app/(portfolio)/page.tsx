import { PortfolioLayout } from './layout'
import { HeroSection } from '@/features/hero'
import { AboutSection } from '@/features/about'
import { SkillsSection } from '@/features/skills'
import { ProjectsSection } from '@/features/projects'
import { ContactSection } from '@/features/contact'


export function PortfolioPage() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </PortfolioLayout>
  )
}
