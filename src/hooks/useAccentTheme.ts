import { useCallback, useEffect, useState } from 'react'
import { accentOptions, defaultAccentId } from '../content/accents'

const STORAGE_KEY = 'nikportfolio:accent'

function readStoredAccent(): string {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && accentOptions.some((option) => option.id === stored)) {
      return stored
    }
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back silently.
  }
  return defaultAccentId
}

function applyAccent(id: string) {
  const option = accentOptions.find((candidate) => candidate.id === id) ?? accentOptions[0]
  const root = document.documentElement
  root.style.setProperty('--accent', option.value)
  root.style.setProperty('--accent-contrast', option.contrast)
}

export function useAccentTheme() {
  const [accentId, setAccentId] = useState(readStoredAccent)

  useEffect(() => {
    applyAccent(accentId)
    try {
      window.localStorage.setItem(STORAGE_KEY, accentId)
    } catch {
      // Ignore write failures — the theme still applies for this session.
    }
  }, [accentId])

  const selectAccent = useCallback((id: string) => setAccentId(id), [])

  return { accentId, selectAccent, accentOptions }
}
