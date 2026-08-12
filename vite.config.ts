import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ---------------------------------------------------------------------
// GitHub Pages deployment note:
// If you deploy to https://<username>.github.io/<repo-name>/ (a project
// page, i.e. NOT a <username>.github.io repo), Vite needs to know the
// repo name so built asset URLs are correct. Set it below.
//
// If instead this repo IS named <username>.github.io (a user/org page,
// served from the domain root), set BASE_PATH to '/'.
// ---------------------------------------------------------------------
const BASE_PATH = '/portfolio/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: BASE_PATH,
})
