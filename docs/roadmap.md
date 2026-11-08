# Roadmap

The plan of work for Pinch. Each step ends in a working state that can be deployed, gets its own branch and PR into `master`. Decisions behind it are in [CLAUDE.md](../CLAUDE.md#decisions-log).

## MVP

### 0. Groundwork — `chore/prepare`

- [x] Restyled map on screen (`public/map-style.json`, `Atlas`, MapLibre worker fix)
- [x] Decisions, privacy rules and git flow written into CLAUDE.md
- [x] `photos/` in `.gitignore`
- [x] Choose hosting — Vercel
- [x] Deploy the current map, auto-deploy on push to `master`, preview deploys for PRs

### 1. Data and photos — `feat/photo-pipeline`

- [ ] `Memory` interface: slug, title, note, date (local, with offset), coordinates `{ lng, lat }`, city/country, photos (each with a required `alt`, width and height)
- [ ] Bun + `sharp` script: originals from `photos/` → auto-orient, 2–3 sizes in AVIF/WebP, metadata dropped, tiny placeholder, prints width/height
- [ ] Dev-only map click that logs coordinates
- [ ] 8 real memories from the first batch of photos (Orenburg, Sep–Nov 2026, mostly at night) — trips come later

### 2. Tokens and fonts — `feat/design-tokens`

- [ ] One static memory card with a real photo
- [ ] Compare 2–3 font pairs on it, pick one, self-host the `.woff2` files
- [ ] Tokens in `index.css`: colours, type scale, radii, warm shadows, durations, easing curves

### 3. Layout shell — `feat/layout`

- [ ] TanStack Router: `/` and `/m/$slug`
- [ ] Desktop: left panel + map
- [ ] Mobile: Vaul bottom sheet with three snap points (peek / half / full)

### 4. Pins — `feat/pins`

- [ ] Photo pin as a `<button>` with `aria-label`; selected state with a terracotta ring
- [ ] Clusters with `supercluster`, drawn as a stack of 2–3 photos with a count

### 5. List — `feat/memory-list`

- [ ] Memories in the visible map area, newest first
- [ ] Two-way hover sync between list rows and pins

### 6. Opened memory — `feat/memory-view`

- [ ] Panel swaps list → memory (back returns to the list); on mobile the sheet opens at half
- [ ] Photo gallery on `scroll-snap`
- [ ] Camera flies to the place
- [ ] View Transition for pin → memory
- [ ] Measure: is the transition interruptible enough when clicking another pin mid-way?

### 7. Lightbox — `feat/lightbox`

- [ ] Photo grows from the card to full screen
- [ ] Paging by swipe and arrows
- [ ] Close by Esc, tap or swipe down; focus trap

### 8. Polish and measurements — `feat/polish`

- [ ] Own attribution control: collapsed by default, in project tokens
- [ ] Map fades in once loaded; photo placeholders while loading
- [ ] Walk through every animation with `prefers-reduced-motion`
- [ ] Lighthouse on mobile with throttling; FPS while panning with ~100 pins — numbers into CLAUDE.md

## After MVP

- Lightbox zoom and pan (pinch, double tap, drag)
- Dark theme
- Collections / trips
- Timeline of all memories
- Search
- Other languages
- Backend, and maybe a multi-user service
