import { connectLinks } from '../../content/connect'

export function ConnectSection() {
  if (connectLinks.length === 0) {
    return (
      <div className="empty-state" role="status">
        Contact details and links will go here.
      </div>
    )
  }

  return (
    <ul className="simple-list">
      {connectLinks.map((link) => (
        <li key={link.href} className="simple-list__item">
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
