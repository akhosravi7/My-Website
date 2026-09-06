# Ali Khosravi — Personal Website

Portfolio site for Ali Khosravi (AI DevOps Lead at Pienso, filmmaker/musician as "ALK FILMS"). React SPA deployed to GitHub Pages.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Dev server on :3000 |
| `npm run build` | Production build to `build/` (run this before committing changes) |
| `npm run deploy` | Publish `build/` to the `gh-pages` branch |

`package.json` sets `"homepage": "."` so all asset paths are relative — required for GitHub Pages.

## Project structure

```
src/
  App.js              Routes + layout shell (nav, main, footer, scroll-to-top)
  style.css           All design tokens (CSS vars) + component styles — the "design system"
  data/
    profile.js        Name, headline, location, LinkedIn/YouTube/email, skills ← edit identity here
    films.js          Film cards (title, description, year, YouTube videoId) ← add films here
    music.js          Track cards (title, description, url) ← add tracks here
  components/
    Home.js           Hero + about + "what I do" cards
    Resume.js         LinkedIn profile card + CKA/education/focus highlight cards
    Films.js          Data-driven grid with click-to-play YouTube embeds
    Music.js          Data-driven grid (empty state until tracks are added)
    Contact.js        LinkedIn / email / YouTube cards
    NavigationMenu.js Always-dark fixed navbar, theme toggle (no search)
    Footer.js         Brand + page links + social links
    PageHeader.js     Shared page title block (eyebrow + h1 + subtitle)
    NotFound.js       404 route
  assets/
    portrait.jpg      Formal portrait (hero) — extracted from Suit.psd
    about.jpg         Casual photo (about section) — extracted from Beach.psd
  hooks/
    useTheme.js       Light/dark theme, persisted in localStorage ("theme"),
                      applied via <body data-theme="dark">
public/               index.html (SEO/OG/Inter font), favicon + logo (AK monogram), manifest
```

## How to make content changes

- **Identity/links/skills** → `src/data/profile.js` (single source of truth for nav, footer, resume, contact).
- **Add a film** → append to `src/data/films.js`; `videoId` is the part after `watch?v=` in a YouTube URL. Thumbnails and embeds are generated from it.
- **Add a track** → append to `src/data/music.js` (any link: YouTube, SoundCloud, Spotify).
- **Photos** → replace files in `src/assets/`; keep them ≤ ~1200px wide, JPEG quality ~85. Never bake text into images.
- **Styling** → tweak CSS variables at the top of `src/style.css` (`:root` = light, `body[data-theme="dark"]` = dark). Bootstrap is imported in `src/index.js` *after* style.css, so Bootstrap wins on conflicts — that's why theme-aware `--bs-*` variables are set in both token blocks (see `--bs-body-bg`).

## Design decisions (why it's built this way)

- **Bootstrap 5 + react-bootstrap** kept (not migrated to Tailwind) — grid/nav/buttons come from it; visual identity comes entirely from CSS variables in `style.css`.
- **Resume page features LinkedIn** (linkedin.com/in/ali-khosravi-devops) instead of a resume file. LinkedIn blocks iframes (`X-Frame-Options: deny`), so it's a profile card + CTA — do not try to iframe it.
- **Always-dark navbar** in both themes; content area follows the theme.
- **Text is always HTML** (old version had text baked into JPGs).

## Known caveats

- **GitHub Pages deep links**: `BrowserRouter` means refreshing on `/resume` 404s on GitHub Pages (only `/` and `/home` resolve server-side). If this matters, switch to `HashRouter` in `src/App.js` or add a `404.html` copy of `index.html` to `build/` via a postbuild script.
- **Images are bundled** via webpack `import` from `src/assets` — that's intentional (hashed filenames, tree-shaken).
- `logo192.png`/`logo512.png`/`favicon.ico` are generated "AK" monograms (dark navy + blue), replaceable.

## Open items

See `REDESIGN_PLAN.md` → "Needs Your Input" (add more films/music, confirm email, optional GitHub link).
