import { site } from '../../content/site'

export function HeroIntro() {
  return (
    <div className="hero">
      <span className="eyebrow">{site.eyebrow}</span>
      <h1 className="hero__name">{site.name}</h1>
      <p className="hero__tagline">{site.tagline}</p>
      <p className="hero__intro">{site.intro}</p>
    </div>
  )
}
