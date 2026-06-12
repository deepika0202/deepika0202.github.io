# Portfolio — deepika0202.github.io

## Stack

- React 19 + Vite 7
- Tailwind CSS 4
- React Router 7 (import from `react-router`, not `react-router-dom`)

## Commands

```bash
npm run dev      # start dev server (opens src/entry.html)
npm run build    # build + prerender + copy dist files to repo root
npm test         # vitest suite
npm run lint     # eslint
npm run preview  # preview built site
```

## Deployment

GitHub Pages serves the **master branch root** (legacy mode). `npm run build`
prerenders `/` to static HTML and copies everything to the repo root — committing those artifacts IS the deploy. The GitHub Action only verifies the build; it does not publish.

## Project Structure

- `src/` — React components and pages
  - `entry.html` — HTML entry point (served by Vite dev server)
  - `main.jsx` — Browser entry point (client-side React)
  - `prerender-entry.jsx` — SSR entry point (build-time rendering)
  - `App.jsx` — Main app component
  - `pages/Home.jsx` — Home page with portfolio content
  - `components/` — Reusable components (Navbar, Footer)
  - `index.css` — Tailwind + custom CSS
- `public/` — Static assets copied as-is
  - `favicon.svg`, `robots.txt`, `sitemap.xml`, `404.html`
  - `Deepika_Chaturvedi_Resume.pdf` — Resume file
  - `images/` — Portfolio images
- `scripts/prerender.mjs` — Build-time SSR renderer
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js` — Config files
