import { trajectoryItems } from '../../content/trajectory'

export function TrajectorySection() {
  if (trajectoryItems.length === 0) {
    return (
      <div className="empty-state" role="status">
        Professional fields and directions will go here.
      </div>
    )
  }

  return (
    <ul className="simple-list">
      {trajectoryItems.map((item) => (
        <li key={item.title} className="simple-list__item">
          <p className="simple-list__item-title">{item.title}</p>
          <p className="simple-list__item-description">{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
