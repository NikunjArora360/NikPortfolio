import type { ProjectEntry } from '../types/content'

// Generic word banks for the Idea Mixer widget — not personal claims,
// just raw material for a "remix" button to recombine.
export const ideaMixerBanks = {
  domains: [
    'a grocery list',
    'a weather forecast',
    'a bus schedule',
    'a recipe box',
    'a to-do app',
    'a chat log',
    'a spreadsheet',
    'a map of a city',
  ],
  formats: [
    'that talks back',
    'turned into a game',
    'you can argue with',
    'drawn as a comic strip',
    'that explains itself out loud',
    'rebuilt as a puzzle',
    'that gets weirder over time',
    'you control with your voice',
  ],
  twists: [
    'but it only works at night',
    'but it forgets everything each morning',
    'but two people have to agree first',
    'but it is always slightly wrong',
    'but it runs entirely offline',
    'but it is powered by a coin flip',
    'but it only speaks in questions',
    'but it is three years too early',
  ],
}

// Real project entries go here once they exist. Left empty on purpose —
// the UI shows an honest "nothing here yet" state rather than filler cards.
export const projects: ProjectEntry[] = []
