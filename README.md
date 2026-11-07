<h1 align="center">React Starter</h1>

<p align="center">
React starter, powered by Vite
</p>

<br>

> This is my personal template. Opinionated, minimal, and tuned to how I like to start projects — feel free to fork it and make it yours.

## Features

- ⚡️ [Vite 8](https://vite.dev/) - instant dev server, `@/*` alias resolved straight from `tsconfig` paths
- ⚛️ [React 19](https://react.dev/) - just React, nothing bolted on top
- ⚓ [Oxlint](https://oxc.rs/docs/guide/usage/linter) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) - lint & format in Rust
- 📘 [TypeScript 7](https://www.typescriptlang.org/) - strict, ES2025, split into app/node configs so each sees only what it needs
- 🍞 [Bun](https://bun.sh) - fast installs, `bun.lock` committed, version pinned via `packageManager`

## Try it now!

```bash
bunx degit FantomStudy/react-starter my-app
cd my-app
bun i
```

## Usage

### Development

Start the dev server and open http://localhost:5173

```bash
bun dev
```

### Build

Type-check and build for production

```bash
bun run build
```

Runs `tsc -b`, then `vite build`. The output lands in `dist`, ready to be served.

### Preview

Preview the production build locally

```bash
bun preview
```

### Lint & Format

```bash
bun lint # oxlint --fix
bun fmt  # oxfmt
```

## License

[MIT](./LICENSE) © [FantomStudy](https://github.com/FantomStudy)
