# AGENTS.md

React 19 + Vite 7 cat gallery. Redux Toolkit + Feature-Sliced Design. Plain JavaScript (ES6+) with strict JSDoc — no TypeScript.

**Use pnpm exclusively** (CI: pnpm 9, Node 22, `pnpm install --frozen-lockfile`). Do not use npm/yarn. Do not add a test framework: `pnpm run test` intentionally fails (no tests configured).

## Commands

| Command | Notes |
|---|---|
| `pnpm install` | |
| `pnpm run dev` | `http://localhost:5173`, enables CORS proxy (below) |
| `pnpm run build` | Output `./dist` |
| `pnpm run preview` | Preview local build |
| `pnpm run lint` | `eslint . --ext js,jsx --max-warnings 0` — run before committing |
| `pnpm run deploy` | Build + push `./dist` to GitHub Pages |

CI (`.github/workflows/ci-cd.yml`): push to `main`/`develop` and PRs to `main` run lint + build. Deploy job runs only on push to `main`. CI synthesizes `.env` from the `CAT_API_KEY` secret.

## Env

Copy `.env.example` → `.env`: `VITE_BASE_URL`, `VITE_API_KEY` (from thecatapi.com). All access goes through `src/config/env.js` (`config.api.*`); it only `console.error`s on missing vars, it does not throw.

## Architecture (FSD)

```
src/app/            # store.js, App.jsx, providers/
src/config/         # env.js, motionConfig.js, apiConstants.js, storageKeys.js, toastMessages.js
src/features/cats/  # api/ adapters/ services/ redux/ hooks/ components/
src/features/theme/ # redux/themeSlice + hooks/useTheme
src/features/font/  # redux/fontSlice + hooks/useFont
src/shared/         # components/ hooks/ ui/ utils/cn.js (no feature imports)
src/widgets/        # navbar/ main-content/ toast/
```

- Data flow (top-down only): `features/cats/api/catApi.js` (axios) → `services/catService.js` → `redux/catsSlice.js` (thunks) → facade hook (`hooks/useCats.js`) → components. Never skip a layer.
- Components must NOT call `fetch`/axios, touch raw API shapes, or use `useSelector`/`useDispatch`. Only facade hooks (`useCats`, `useTheme`, `useFont`, `shared/hooks/*`) may touch Redux. Thunk errors: `await dispatch(...).unwrap()` in `try/catch` + `react-hot-toast` (messages in `src/config/toastMessages.js`).
- API shapes are normalized + zod-validated in `features/cats/adapters/catMapper.js` (`CAT_ENTITY_SCHEMA.parse`, throws on bad shape). Components receive only `CatEntity` (`{ id, url, favouriteId }`).
- `shared/` must not import from `features/`; features must not import from each other.
- Path aliases (see `vite.config.js`, `jsconfig.json`): `@features @shared @app @config @widgets`. Import order: external → aliases.

## Conventions

- JSDoc on all exports/hooks/components + `PropTypes` on components. Booleans: `is/has/should` prefix. Files: `PascalCase.jsx` components, `useCamelCase.js` hooks, `camelCase.js` services, `*Slice.js` reducers.
- Styling: Tailwind v4 with semantic tokens defined in `src/index.css` (`bg-background`, `bg-muted`, `bg-card`, `text-foreground`, `bg-primary`, `border-border`). Never hardcode palette colors. Merge classes with `cn()` from `@shared/utils/cn`.
- Motion: `LazyMotion` + `motionFeatures` (`domAnimation`) from `src/config/motionConfig.js`; honor `useReducedMotion()` (see `CatCard`).

## Gotchas

- CORS proxy is dev-only: `vite.config.js` proxies `/api/cors-proxy` → `https://cdn2.thecatapi.com`. `catMapper.js` branches on `import.meta.env.PROD` (proxied URL in dev, direct URL in prod), so images can fail CORS on the GitHub Pages build.
- `vite.config.js` `base` is the absolute URL `https://slinkter.github.io/myprojectapi11`; deploy assumes that Pages path.
- `NEXTJSPROJECT11/` is stale migration notes, not part of the build. Ignore it.
- `docs/` holds setup/architecture/design-system/contributing notes; check there before inventing patterns.

## Git

Branches: `main` (production), `develop` (integration), `feature/...`, `fix/...`. Conventional commits: `feat:`, `fix:`, `refactor:`.
