import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'
import { SectionShell } from './components/layout/SectionShell'
import { CommandPaletteProvider } from './components/navigation/CommandPaletteProvider'
import { HeroIntro } from './components/playground/HeroIntro'
import { IdeaMixer } from './components/playground/IdeaMixer'
import { AccentLab } from './components/playground/AccentLab'
import { ProjectGrid } from './components/playground/ProjectGrid'
import { ConnectSection } from './components/sections/ConnectSection'
import { NorthStarSection } from './components/sections/NorthStarSection'
import { TrajectorySection } from './components/sections/TrajectorySection'

function App() {
  return (
    <CommandPaletteProvider>
      <SiteHeader />
      <main>
        <section id="playground" aria-labelledby="playground-heading" className="section-shell">
          <h1 className="visually-hidden" id="playground-heading">
            Playground
          </h1>
          <HeroIntro />
          <div className="widget-grid">
            <IdeaMixer />
            <AccentLab />
          </div>
          <ProjectGrid />
        </section>

        <SectionShell id="connect" eyebrow="Reach out" heading="Connect">
          <ConnectSection />
        </SectionShell>

        <SectionShell id="north-star" eyebrow="Looking ahead" heading="North Star">
          <NorthStarSection />
        </SectionShell>

        <SectionShell id="trajectory" eyebrow="Where this is headed" heading="Trajectory">
          <TrajectorySection />
        </SectionShell>
      </main>
      <SiteFooter />
    </CommandPaletteProvider>
  )
}

export default App
