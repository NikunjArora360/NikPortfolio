import { northStarItems } from '../../content/northstar'

export function NorthStarSection() {
  if (northStarItems.length === 0) {
    return (
      <div className="empty-state" role="status">
        Long-term dreams and ambitious project concepts will go here.
      </div>
    )
  }

  return (
    <ul className="simple-list">
      {northStarItems.map((item) => (
        <li key={item.title} className="simple-list__item">
          <p className="simple-list__item-title">{item.title}</p>
          <p className="simple-list__item-description">{item.description}</p>
        </li>
      ))}
    </ul>
  )
}
