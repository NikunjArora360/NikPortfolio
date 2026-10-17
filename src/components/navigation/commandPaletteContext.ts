import { createContext, useContext, type RefObject } from 'react'

export interface CommandPaletteContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  triggerRef: RefObject<HTMLButtonElement | null>
}

export const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(null)

export function useCommandPalette() {
  const context = useContext(CommandPaletteContext)
  if (!context) {
    throw new Error('useCommandPalette must be used within CommandPaletteProvider')
  }
  return context
}
