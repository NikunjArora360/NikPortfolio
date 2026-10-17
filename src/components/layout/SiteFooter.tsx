import { site } from '../../content/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>{site.name}</span>
      <span>Built with React, TypeScript, and Vite.</span>
    </footer>
  )
}
