import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// This is a GitHub Pages *project* site (not a <user>.github.io user site),
// so production output must be served from the /NikPortfolio/ subpath.
// Keyed off `mode` (not `command`): both `vite build` and `vite preview`
// run in 'production' mode, so this keeps `npm run preview` consistent
// with the asset paths actually baked into the built index.html. Only
// `vite dev` runs in 'development' mode and keeps base at '/'.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/NikPortfolio/' : '/',
  plugins: [react()],
}))
