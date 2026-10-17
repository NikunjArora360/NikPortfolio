import { useAccentTheme } from '../../hooks/useAccentTheme'
import { AccentSwatch } from '../ui/AccentSwatch'

export function AccentLab() {
  const { accentId, selectAccent, accentOptions } = useAccentTheme()

  return (
    <div className="widget-card">
      <div>
        <p className="widget-card__title">Accent Lab</p>
        <p className="widget-card__hint">Swap the one accent colour. The dark theme stays fixed.</p>
      </div>
      <div className="accent-lab__swatches" role="radiogroup" aria-label="Accent colour">
        {accentOptions.map((option) => (
          <AccentSwatch
            key={option.id}
            label={option.label}
            color={option.value}
            checked={option.id === accentId}
            onSelect={() => selectAccent(option.id)}
          />
        ))}
      </div>
    </div>
  )
}
