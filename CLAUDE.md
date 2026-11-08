# Pinch

Pinch is a personal atlas of memories: a map where every pin is a place I've been — a café, a viewpoint, a sunset — with its photos and a short note. A photo album laid out on a map instead of in a grid. For now it's a frontend-only React 19 + Vite app; a backend may come later, if the frontend earns it.

It's a **public, read-only showcase**: anyone with the link can browse my atlas; only I add memories, through the code. A multi-user service with accounts may come one day, not now. The plan of work lives in [docs/roadmap.md](docs/roadmap.md).

The project exists to be beautiful and to show what I can build. Polish and restraint matter more than feature count.

## How we work here

- **Claude teaches, I write.** Don't create or edit project code unless I ask for it explicitly in that message. By default: explain, suggest, review, point at docs, show a small illustrative snippet in chat — then let me write it. Docs like this file and the README are the exception when I ask for them.
- **Answer in Russian.** Identifiers, docs and this file stay English.
- **Don't decide for me silently.** When a choice shapes the project (a library, a data shape, a new dependency), lay out the trade-off briefly with a recommendation and let me pick. Record settled decisions in this file.
- **Check the docs first.** When a library misbehaves — especially right after a major version — read its official docs and migration guide before digging into its source.
- **Git flow.** `master` is the main branch. Every feature gets its own branch, then a PR merged into `master`. Commits follow Conventional Commits (`feat: …`, `fix: …`, `docs: …`, `chore: …`), and branch names mirror them: `feat/photo-pipeline`, `fix/map-worker`, `docs/roadmap`. I make the commits; Claude may suggest the message.

## What can't be compromised

- **The photos carry the mood; the interface is the frame.** Memories come from any time of day — a sunset canal, a night street, a grey morning café, a bright noon square. The UI must not assume or fake any particular light: no sunset gradients or golden overlays on top of photos. Golden hour is the feeling of the interface itself — warm, soft, unhurried: cream backgrounds, warm dark-brown ink instead of black, one terracotta accent. That frame has to sit well next to a cold blue night photo just as well as next to a sunset. UI elements never compete with the photos.

- **No AI slop.** No decorative flowers, ribbons, sparkles, glows, gradients-for-the-sake-of-it, emoji in UI, or italic serif everywhere. Every element must earn its place. When in doubt, remove it. If something looks like a generic "beautiful app" mockup, it's wrong.

- **Motion is purposeful, fast and interruptible** — Emil Kowalski's approach:
  - ease-out with a custom curve, never `ease-in` for UI and not the default `ease`;
  - 150–300 ms for UI; longer only for "story" transitions (a pin opening into its memory);
  - nothing appears from `scale(0)` — start around `scale(0.95)` with opacity, and `transform-origin` points at whatever triggered it;
  - interactive animations use CSS transitions so they can be interrupted and reversed; `@keyframes` only for things that play once;
  - high-frequency actions (keyboard shortcuts, repeated toggles) are not animated;
  - `prefers-reduced-motion` is always respected.

- **The map is part of the design — a quiet stage.** A default, colourful map style is not acceptable. The map is near-neutral (barely warm land, low-contrast water, buildings without outlines, almost no labels) so that any photo pin — night, noon or sunset — reads as the accent. The style lives in [public/map-style.json](public/map-style.json).

- **A public map must not leak what I didn't mean to publish.**
  - Published photos carry no EXIF — no GPS, device or exact time. The only coordinates are the ones written into the memory itself.
  - No precise pins at home, work or other places that reveal a daily routine: round the coordinates or don't publish the pin.
  - Recognisable other people appear only with their consent.

- **Accessible from day one.** Pins are `<button>`s with an `aria-label` (title + date) and are reachable by keyboard. Every photo has an `alt` — required by the `Memory` type. The lightbox and the bottom sheet trap focus and close on Esc.

- **Design tokens before components.** Colours, type, radii, shadows, durations and easing curves live as CSS custom properties in `src/styles/index.css`. Components use tokens, not raw values. Shadows are warm-tinted, not grey.

- **Prefer modern platform APIs** when they fit (View Transitions, `oklch()`, `interpolate-size`, container queries) — check browser support first.

## Palette

Starting point, from the reference board; refine in `index.css`, not here.

| Token      | Hex       | Role                          |
| ---------- | --------- | ----------------------------- |
| Cream      | `#FFF3E8` | page background               |
| Peach      | `#F8D1C4` | soft surfaces, selected state |
| Terracotta | `#D16A4B` | the one accent                |
| Rose       | `#ECA7B3` | secondary highlight, sparing  |
| Sage       | `#A7B8A6` | supporting, sparing           |
| Sky        | `#B7D3D6` | supporting, sparing           |
| Ink        | `#3B2A2D` | text                          |

The map has its own, more neutral palette in its style file; these tokens are for the interface.

Typography: a serif with Cyrillic support for place and memory titles only; a clean sans for everything else. All UI copy is Russian, so every font must cover Cyrillic. Fonts are self-hosted `.woff2`.

## Commands

Package manager is `bun`; scripts are in [package.json](package.json): `dev`, `build`, `preview`, `lint` → `oxlint --fix`, `fmt` → `oxfmt`.

There is no test suite — `bun lint` and `bun run build` (runs `tsc -b` first) are the gate before every commit. To type-check without a build: `tsc --noEmit -p tsconfig.app.json`.

Decisions that rest on performance (View Transitions vs. a library, DOM markers vs. a WebGL layer) are confirmed by measurement — Lighthouse on mobile with throttling, FPS while panning — and the numbers are recorded here.

## The ways to hurt yourself

- **Removing `setWorkerUrl` from [Atlas.tsx](src/components/Atlas/Atlas.tsx).** MapLibre v6 finds its worker via `import.meta.url`, which breaks inside Vite's pre-bundled deps and isn't emitted in the production build: the map mounts, shows the attribution, and draws nothing (`Worker failed to load`). The fix is the one from the official docs — `import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url"` + `setWorkerUrl(workerUrl)` at module level. `optimizeDeps.exclude` fixes dev only, not the build.

- **Dropping metadata without rotating first.** Phone photos are stored sideways with an EXIF orientation flag. Once the metadata is gone, so is the flag, and portraits land on their side. In the photo script `sharp(...).rotate()` (no arguments — auto-orient) must come before any resize/output.

## Taste

- Components are arrow-function expressions (`export const Foo = (...) => {...}`), not `function Foo()` declarations.
- Props are typed via a named `interface FooProps` declared above the component, not inline in the destructure.
- `clsx` for conditional/combined `className`s, not template-string concatenation.
- Imports use the `@/` alias for `src/`; import order is handled by `oxfmt`.
- Comments are rare — only when the _why_ is non-obvious — and written in Russian.

## Where code lives

- [src/main.tsx](src/main.tsx) — entry; imports global styles once.
- [src/App.tsx](src/App.tsx) — app root.
- [src/styles/](src/styles/) — global CSS: `reset.css`, `index.css` (tokens and base styles).
- `src/components/` — one directory per component: `Component.tsx` + `Component.module.css` + `index.ts`. [Atlas](src/components/Atlas/Atlas.tsx) is the map.
- [public/map-style.json](public/map-style.json) — the MapLibre style (based on OpenFreeMap Positron, recoloured).
- [docs/roadmap.md](docs/roadmap.md) — the plan of work, step by step.
- Planned: `src/data/memories.ts` (the data), `scripts/` (the photo pipeline), `photos/` (original photos — git-ignored, never committed).

## Decisions log

Settled choices go here with a one-line reason, so they aren't re-argued.

- **Memory = a moment**, not a place: place + date + 1–N photos + note. Several moments at one place cluster naturally.
- **Map: MapLibre GL JS + react-map-gl**, tiles from OpenFreeMap — a vector style recoloured to the project, WebGL camera, free, no token.
- **Data: typed `src/data/memories.ts`** — checked by TypeScript, bundled, no request; the `Memory` interface is the future API contract.
- **Photos: own Bun + `sharp` script, no EXIF reading** — auto-orient, 2–3 sizes in AVIF/WebP, metadata dropped, a tiny placeholder, width/height printed. My phone photos carry no GPS, so there's nothing worth reading (`exifr` dropped); auto-placing pins from GPS may return later as a feature. Fallback: `vite-imagetools`.
- **Coordinates and dates are written by hand.** Coordinates come from clicking the map — a dev-only `onClick` logging `lngLat` — stored as `{ lng, lat }` (an object, so the order can't be mixed up), 5 decimals, 3 for places to blur. Dates are local time with offset (`"2026-10-11T14:41:20+05:00"`); Samsung file names already hold the local date and time.
- **Routing: TanStack Router, no framework** — `/` and `/m/$slug`, so every memory has a shareable link.
- **Layout: one left panel (list ↔ memory) + map**; on mobile the same content in a Vaul bottom sheet with three snap points (peek / half / full).
- **Pins: round photo thumbnails** with a white border and warm shadow; selected — larger with a terracotta ring; clusters — a stack of 2–3 photos with a count. DOM markers + `supercluster` (hypothesis: fine for hundreds of memories — measure at ~100).
- **List: memories in the visible map area**, newest first, with two-way hover sync between list rows and pins.
- **Animation: CSS + View Transitions, no Motion** — to be confirmed by code complexity and measurements; watch View Transitions interruptibility. Photo gallery swipes via `scroll-snap`.
- **Fonts: chosen on a real memory card with a real photo**, self-hosted. Candidates — titles: Cormorant Garamond, Lora, Playfair Display; UI: Inter, Onest, Manrope.
- **Lightbox: MVP has open/close transition, paging and dismiss; zoom & pan right after MVP.**
- **UI language: Russian only**, no i18n for now.
- **Hosting: Vercel** — Git integration with a preview deploy for every PR fits the branch → PR flow; production deploys from `master`. Void (Cloudflare) is the candidate if a backend arrives.
