# Nikunj Arora — Portfolio

Personal portfolio site, built with React, TypeScript, and Vite. Deployed to GitHub Pages at
[nikunjarora360.github.io/NikPortfolio](https://nikunjarora360.github.io/NikPortfolio/).

## Structure

Four sections, all on one page, reachable by anchor nav or the command palette (`Ctrl+K` / `Cmd+K`):

- **Playground** — homepage. Intro, two small interactive widgets (Idea Mixer, Accent Lab), and a
  project showcase.
- **Connect** — contact details and links.
- **North Star** — long-term project ideas.
- **Trajectory** — professional direction.

Real content (bio, links, project entries, etc.) lives in `src/content/*.ts`. Those files currently
hold placeholders/empty arrays on purpose — edit them directly to add real copy; no other files need
to change.

## Development

```bash
npm install
npm run dev      # starts the dev server
npm run build    # type-checks and builds to dist/
npm run preview  # serves the production build locally
npm run lint     # oxlint
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to GitHub Pages via `actions/deploy-pages`. One manual step is required once per repo: in
**Settings → Pages**, set **Source** to **GitHub Actions**.

This is a GitHub Pages *project* site, so `vite.config.ts` sets `base: '/NikPortfolio/'` for
production builds (`mode === 'production'`, which covers both `vite build` and `vite preview`) and
`base: '/'` for `vite dev`.
