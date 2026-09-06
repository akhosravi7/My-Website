# Website Redesign — Implementation Plan

## Problem

The site looked dated and unpolished:

- Hero images had **text burned into the photos** (uneditable, inaccessible, blurry).
- Photos were old and low quality; the "resume" was a **photo of a printed 2019 resume** (stale dates, old address/phone).
- 47MB of `.psd` source files were committed to the repo.
- Contact page was a stub (`<h1>Contact Me</h1>`).
- Nav contained a **dead search box** with no handler.
- Films/Music pages were Bootstrap placeholder cards (same YouTube thumbnail repeated, "Card Title" sample text).
- No design system: default Bootstrap look, no palette, no typography scale, no footer.
- Dead CSS (`.app`, `.blue`, `.red`, `.checkboxes`, `.answer`) and unused heavy deps (`react-pdf`, `pdf`).

## Design Direction

- **Modern, minimal portfolio**: one accent color (blue), generous whitespace, Inter typeface.
- Light/dark mode via CSS variables (kept, but made consistent).
- Always-dark navbar with a text wordmark (replaces the 👨‍💻 emoji).
- Consistent `PageHeader` + `Footer` on every route.
- **Resume page now features the LinkedIn profile** (linkedin.com/in/ali-khosravi-devops) instead of the outdated scan. LinkedIn blocks iframe embedding (`X-Frame-Options: deny`), so this is a polished profile card + "View on LinkedIn" CTA — the professional standard — not a literal embed.
- Data-driven Films/Music pages (content in `src/data/`, easy to extend).
- All text lives in HTML — never baked into images.

## Action List

### P0 — Images & Resume (✅ done)
- [x] Extracted original photos from the `.psd` files (clean "Background" layers, no text) using `psd-tools`.
- [x] Cropped + recompressed to `src/assets/portrait.jpg` (formal, hero) and `src/assets/about.jpg` (casual, about section).
- [x] Resume rebuilt as a real page featuring the LinkedIn profile (headline, CTA) + CKA certification card. Old scan and generated PDF deleted.
- [x] Removed `Beach.psd`, `Suit.psd`, `AKRESUME.jpg`, `Beach.jpg`, `Suit.JPG` from the repo; `*.psd` added to `.gitignore`.

### P1 — Layout & Structure
- [x] Home: replaced carousel with a proper hero (name, headline, CTA buttons, portrait in framed card) + About section + Explore cards.
- [x] Contact: real page — LinkedIn (primary), email, YouTube; removed stub.
- [x] Removed dead search box from the nav; nav uses router `Link`s (no full page reloads).
- [x] Design system in `src/style.css`: CSS variables for both themes, Inter font, spacing, card/button styles.
- [x] Added `PageHeader` and `Footer` components, applied site-wide.
- [x] Replaced emoji brand with text wordmark.
- [x] Deleted all dead CSS.

### P2 — Content & Consistency
- [x] Films: data-driven grid (`src/data/films.js`) with click-to-play YouTube embeds. First entry: "Tip" (TSA Nationals 2013, 1st Place, ALK FILMS).
- [x] Music: same data-driven structure (`src/data/music.js`) with a clean empty state — **add tracks there**.
- [x] Dark mode: consistent theming for all components; `useTheme` lazy-initializes from `localStorage` (no flash).
- [x] Added 404 route for unknown URLs.
- [x] SEO: real `<title>`, meta description, Open Graph tags in `public/index.html`.

### P3 — Cleanup & Polish
- [x] Removed unused deps `react-pdf` + `pdf` and the `postinstall` pdf.worker copy; removed `public/pdf.worker.min.js`.
- [x] `gh-pages` 2.1.1 → ^6 (2019-era package).
- [x] `loading="lazy"` on content images.
- [x] `npm run build` passes clean.

## Needs Your Input

1. **Films**: add more entries to `src/data/films.js` (title, description, year, YouTube `videoId`).
2. **Music**: add tracks to `src/data/music.js` — what format (YouTube audio, SoundCloud, Spotify link)?
3. **Email**: `alikhosravi1000@gmail.com` is from the old resume — update in `src/data/profile.js` if stale.
4. **GitHub / other links**: add to `src/data/profile.js` if you want them in the footer/contact.
5. **Favicon**: still the CRA default; consider a personal monogram.
6. **Hosting note**: `BrowserRouter` + GitHub Pages 404s on deep-link refresh. If this bites, add a `404.html` copy trick or switch to `HashRouter`.
