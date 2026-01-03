# Copilot / AI Agent Instructions

Short, actionable guide to work effectively in this repo (React CRA site).

- **Big picture:** Single-page React app (Create React App) built in `src/`. Routing is handled in `src/App.js` via `react-router-dom` (`Routes` + `Route`). Entry point is `src/index.js` which mounts the app inside `BrowserRouter` with `basename={process.env.PUBLIC_URL}` for GitHub Pages.

- **Key files:** `package.json` (scripts & deps), `src/index.js` (global listeners, router), `src/App.js` (routes), `src/pages/*` (page components, e.g. `Home.js`, `About.js`), `src/components/*` (shared UI: `Navigation.js`, `Footer.js`). Static assets live under `src/images`, `src/assets`, and `src/sounds`.

- **Build / run / deploy commands:**
  - Start local dev: `npm start`
  - Build production: `npm run build` (outputs to `build/`)
  - Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages -d build`); `predeploy` runs `build` automatically.
  - Tests: `npm test` (uses CRA test runner)

- **Project-specific patterns / gotchas:**
  - `src/index.js` registers global DOM event listeners (scroll, custom logic). When editing components that add listeners, follow the existing cleanup patterns to avoid duplicate listeners or memory leaks.
  - `Home.js` manipulates the DOM directly (creates custom cursor, SVG filters, audio playback on first user interaction). Prefer using explicit cleanup in `useEffect` and avoid adding duplicate global listeners.
  - Assets sometimes contain spaces in filenames (example: `src/assets/2025 Nathan resume.pdf`) — imports already reference them; preserve exact filenames or update imports when renaming.
  - Routing uses element prop: `<Route path="/" element={<Home/>} />` (react-router v6+ style). Add new routes by editing `src/App.js` and linking from `src/components/Navigation.js` via `Link`.

- **Conventions:**
  - Simple component structure: small presentational components in `src/components`, page layouts in `src/pages` with accompanying CSS files (e.g. `Home.css`, `About.css`).
  - Styles scoped by component CSS files; class names like `.section-container`, `.banner-container`, and `.scroll-in` are used by JS for behaviour. If renaming classes, update JS selectors in `src/index.js` and `src/pages/Home.js` accordingly.

- **Integration & external deps:**
  - `react-router-dom` for routing; `gh-pages` for deployment (devDependency). `react-scripts` (CRA) drives build/test/start. No backend code in repo — the site is static.

- **When changing behavior that touches global state or listeners:**
  - Run `npm start` locally and test the interactive parts (banner cursor, hover sounds, scroll-in effects).
  - Verify cleanup logic in `useEffect` returns so hot-reload doesn't accumulate listeners.

- **Example change workflow:**
  1. Edit `src/pages/Home.js` or `src/components/Navigation.js`.
  2. Run `npm start` and exercise routes and UI that use custom cursor, audio, or scroll effects.
  3. Run `npm run build` and inspect `build/` if preparing a deploy.

- **Files to avoid editing casually:** `build/` (compiled output) and `public/index.html` unless you need to change meta or static tags. Keep `homepage` in `package.json` in sync with GitHub Pages settings.

If anything here is unclear or you'd like more examples (e.g. adding a new route or safely refactoring the cursor/audio code), tell me which area and I'll expand with concrete edits and tests.
