import { useState } from 'react'
import { ideaMixerBanks } from '../../content/playground'

function pickRandom(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)]
}

export function IdeaMixer() {
  const [idea, setIdea] = useState<string | null>(null)

  function remix() {
    const domain = pickRandom(ideaMixerBanks.domains)
    const format = pickRandom(ideaMixerBanks.formats)
    const twist = pickRandom(ideaMixerBanks.twists)
    setIdea(`${domain}, ${format} — ${twist}.`)
  }

  return (
    <div className="widget-card">
      <div>
        <p className="widget-card__title">Idea Mixer</p>
        <p className="widget-card__hint">Remixes a small set of local word banks into a prompt.</p>
      </div>
      <p
        className={idea ? 'idea-mixer__output' : 'idea-mixer__output idea-mixer__output--empty'}
        aria-live="polite"
      >
        {idea ?? 'Press remix to generate an idea.'}
      </p>
      <button type="button" className="button" onClick={remix}>
        Remix
      </button>
    </div>
  )
}
