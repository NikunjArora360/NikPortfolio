import type { ProjectEntry } from '../../types/content'
import { TagRow } from '../ui/Tag'

export function ProjectCard({ title, description, href, tags }: ProjectEntry) {
  const content = (
    <>
      <p className="project-card__title">{title}</p>
      <p className="project-card__description">{description}</p>
      <TagRow tags={tags} />
    </>
  )

  if (href) {
    return (
      <a className="project-card" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return <div className="project-card">{content}</div>
}
