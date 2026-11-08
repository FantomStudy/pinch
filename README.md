<h1 align="center">Pinch</h1>

<p align="center">
A personal atlas of memories — photos and notes, pinned to the map.
</p>

<br>

Pinch is a photo album laid out on a map instead of in a grid. Every pin is a place I've been — a café worth returning to, a sunset over a canal, a viewpoint at dawn — with its photos and a short note about why it mattered.

It's a pet project, built to be warm, quiet and carefully animated: a soft golden-hour frame that lets every photo — sunset, night or noon — speak for itself, a map restyled to match, and motion that feels natural rather than decorative.

> Work in progress. Frontend only for now.

## Stack

- ⚛️ [React 19](https://react.dev/)
- ⚡️ [Vite 8](https://vite.dev/) — `@/*` alias resolved from `tsconfig` paths
- 📘 [TypeScript 7](https://www.typescriptlang.org/) — strict, split app/node configs
- ⚓ [Oxlint](https://oxc.rs/docs/guide/usage/linter) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter)
- 🍞 [Bun](https://bun.sh)

## Getting started

```bash
bun i
bun dev
```

Open http://localhost:5173.

## Scripts

```bash
bun run build # tsc -b, then vite build → dist/
bun preview   # serve the production build
bun lint      # oxlint --fix
bun fmt       # oxfmt
```

## License

[MIT](./LICENSE) © [FantomStudy](https://github.com/FantomStudy)
