# Redesign Log (September 2026)

Record of the site redesign. For how to run/edit/deploy, see `README.md`.

## What was wrong

- Hero images had **text baked into the photos** (WELCOME! + bio on a beach selfie; an internship pitch on a graduation portrait).
- "Resume" was a photo of a printed **2019-era resume** (stale dates, old address/phone).
- 47MB of `.psd` sources committed to the repo.
- Contact page was an `<h1>` stub; nav had a dead search box; Films/Music were Bootstrap placeholder cards (same thumbnail repeated, sample text).
- No design system, no footer, emoji brand, default CRA logo/favicon, dead CSS (`.app`, `.blue`, `.red`, `.checkboxes`, `.answer`), unused `react-pdf`/`pdf` deps.

## What changed

**Assets**
- Extracted the original text-free photos from `Beach.psd`/`Suit.psd` (psd-tools, "Background" layer), cropped to portraits, recompressed → `src/assets/portrait.jpg`, `src/assets/about.jpg`.
- Deleted `Beach.jpg`, `Suit.JPG`, `AKRESUME.jpg`, both `.psd` files; `*.psd` added to `.gitignore`.

**Pages**
- `Home`: carousel → hero (name, headline, CTAs, framed portrait) + About section + "What I do" cards.
- `Resume`: rebuilt around the **LinkedIn profile** (linkedin.com/in/ali-khosravi-devops) — profile card with CTA, plus CKA / Georgia Tech / focus / elsewhere cards. LinkedIn blocks iframe embedding, so this is a card + link, not an embed.
- `Contact`: new page (LinkedIn / email / YouTube cards).
- `Films`: data-driven grid, click-to-play YouTube embeds. First real entry: "Tip" (TSA Nationals 2013, 1st Place, channel @ALIKFILMS1).
- `Music`: data-driven grid with a clean empty state (no tracks known yet).
- `NotFound`: 404 route for unknown URLs.
- Nav: removed dead search box, router `Link`s (active state via NavLink), text wordmark instead of 👨‍💻 emoji, SVG moon/sun theme toggle.

**Design system** (`src/style.css`)
- CSS variable tokens for light/dark (bg, surface, text, muted, border, accent, shadow, radius); Bootstrap's `--bs-primary`/`--bs-body-*`/link variables mapped onto them so all Bootstrap components theme correctly.
- Inter font (Google Fonts, in `public/index.html`), consistent eyebrow/title/section rhythm, `PageHeader` + `Footer` on every route.
- New "AK" monogram logo (logo192/512) and favicon, replacing the CRA React atom.

**Plumbing**
- `useTheme`: lazy-init from `localStorage` (no light-theme flash on load).
- `public/index.html`: real title/description, Open Graph tags, theme-color.
- Removed `react-pdf` + `pdf` deps and the `postinstall` pdf.worker copy; `public/pdf.worker.min.js` deleted.
- `gh-pages` 2.1.1 → ^6.
- Fixed dark-mode bug: Bootstrap's `body{background-color:var(--bs-body-bg)}` (loaded after style.css) overrode the themed background — now `--bs-body-bg: var(--bg)` is set in both token blocks.

**Verified**: `npm run build` clean (70KB JS / 33KB CSS gzip); all five routes + dark mode visually checked via headless Chrome screenshots.

## Needs Your Input

1. **Films**: add entries to `src/data/films.js` (title, description, year, YouTube `videoId`).
2. **Music**: SoundCloud is `https://soundcloud.com/thebigtomat` (added to profile + Contact/Resume/Footer/Music). Add specific tracks to `src/data/music.js` when ready.
3. **Email**: `alikhosravi1000@gmail.com` confirmed (matches current resume).
4. **GitHub** (and anything else) → add to `src/data/profile.js` + `Footer.js`.
5. **Hosting**: if GitHub Pages deep-link refreshes 404, see `README.md` → Known caveats (HashRouter or 404.html trick).
