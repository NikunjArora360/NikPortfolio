import { projects } from '../../content/playground'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid() {
  if (projects.length === 0) {
    return (
      <div className="empty-state" role="status">
        Projects will show up here once they are added.
      </div>
    )
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}
