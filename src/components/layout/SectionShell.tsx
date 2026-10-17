import type { ReactNode } from 'react'

interface SectionShellProps {
  id: string
  eyebrow: string
  heading: string
  children: ReactNode
}

export function SectionShell({ id, eyebrow, heading, children }: SectionShellProps) {
  return (
    <section id={id} className="section-shell" aria-labelledby={`${id}-heading`}>
      <div className="section-shell__header">
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={`${id}-heading`} className="section-heading">
          {heading}
        </h2>
      </div>
      {children}
    </section>
  )
}
