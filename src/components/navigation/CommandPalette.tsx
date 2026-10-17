import { useEffect, useMemo, useRef, useState } from 'react'
import { navItems } from '../../content/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface CommandPaletteProps {
  onClose: () => void
}

export function CommandPalette({ onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [rawActiveIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return navItems
    return navItems.filter((item) => item.label.toLowerCase().includes(normalized))
  }, [query])

  // Clamp rather than reset-on-change: as the query narrows the result list,
  // activeIndex may point past the end until the next arrow/mouse move picks
  // a fresh one. Deriving this during render avoids an extra effect/render.
  const activeIndex = Math.min(rawActiveIndex, Math.max(results.length - 1, 0))

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function navigateTo(id: string) {
    const target = document.getElementById(id)
    onClose()
    if (!target) return
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
    const heading = document.getElementById(`${id}-heading`)
    heading?.setAttribute('tabindex', '-1')
    heading?.focus()
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((current) => Math.min(current + 1, results.length - 1))
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((current) => Math.max(current - 1, 0))
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      const item = results[activeIndex]
      if (item) navigateTo(item.id)
      return
    }
    if (event.key === 'Tab') {
      // Simple focus trap: only the input is focusable inside the dialog,
      // so keep focus there regardless of shift state.
      event.preventDefault()
      inputRef.current?.focus()
    }
  }

  function handleBackdropClick(event: React.MouseEvent) {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="command-palette__backdrop" onMouseDown={handleBackdropClick}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="command-palette"
        onKeyDown={handleKeyDown}
      >
        <input
          ref={inputRef}
          type="text"
          className="command-palette__input"
          placeholder="Jump to a section…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Filter sections"
          autoComplete="off"
        />
        <div className="command-palette__list" role="listbox" aria-label="Sections">
          {results.length === 0 && <p className="command-palette__empty">No matching section.</p>}
          {results.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="option"
              aria-selected={index === activeIndex}
              className={
                index === activeIndex
                  ? 'command-palette__item command-palette__item--active'
                  : 'command-palette__item'
              }
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => navigateTo(item.id)}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
