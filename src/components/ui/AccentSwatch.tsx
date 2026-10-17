interface AccentSwatchProps {
  label: string
  color: string
  checked: boolean
  onSelect: () => void
}

export function AccentSwatch({ label, color, checked, onSelect }: AccentSwatchProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      aria-label={label}
      className="accent-swatch"
      style={{ background: color }}
      onClick={onSelect}
    />
  )
}
