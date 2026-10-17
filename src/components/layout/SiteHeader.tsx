import { navItems, site } from '../../content/site'
import { KeyHint } from '../ui/KeyHint'
import { useCommandPalette } from '../navigation/commandPaletteContext'

export function SiteHeader() {
  const { open, triggerRef } = useCommandPalette()

  return (
    <header className="site-header">
      <a href="#playground" className="site-header__mark">
        {site.name}
      </a>
      <nav className="site-header__nav" aria-label="Section navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="site-header__link">
            {item.label}
          </a>
        ))}
      </nav>
      <button
        ref={triggerRef}
        type="button"
        className="palette-trigger"
        onClick={open}
        aria-haspopup="dialog"
      >
        Search
        <KeyHint>⌘K</KeyHint>
      </button>
    </header>
  )
}
