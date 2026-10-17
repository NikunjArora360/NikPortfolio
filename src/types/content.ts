export interface NavItem {
  id: SectionId
  label: string
}

export type SectionId = 'playground' | 'connect' | 'north-star' | 'trajectory'

export interface ProjectEntry {
  title: string
  description: string
  href?: string
  tags: string[]
}

export interface ConnectLink {
  label: string
  href: string
}

export interface ListItemEntry {
  title: string
  description: string
}

export interface AccentOption {
  id: string
  label: string
  value: string
  contrast: string
}
