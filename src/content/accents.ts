import type { AccentOption } from '../types/content'

// Curated accent presets. Charcoal/white surface tokens never change —
// only this one variable swaps.
export const accentOptions: AccentOption[] = [
  { id: 'lime', label: 'Lime', value: '#c6ff3d', contrast: '#0f1108' },
  { id: 'amber', label: 'Amber', value: '#ffb648', contrast: '#1a1002' },
  { id: 'cyan', label: 'Cyan', value: '#5fe3e0', contrast: '#06161a' },
  { id: 'coral', label: 'Coral', value: '#ff7a5c', contrast: '#1a0906' },
  { id: 'violet', label: 'Violet', value: '#b79bff', contrast: '#140c26' },
]

export const defaultAccentId = accentOptions[0].id
