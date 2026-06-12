import { PortfolioLayout } from './layout'
import { About } from '../../features/about'
import { Contact } from '../../features/contact'
import { Hero } from '../../features/hero'
import { Projects } from '../../features/projects'
import { Resume } from '../../features/resume'
import { Services } from '../../features/services'
import { Skills } from '../../features/skills'

export function PortfolioPage() {
  return (
    <PortfolioLayout>
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Contact />
      </main>
    </PortfolioLayout>
  )
}
