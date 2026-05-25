# ruban-portfolio

Personal portfolio for Ruban Sahoo, live at [rubansahoo.com](https://rubansahoo.com).

Terminal/IDE-themed single-page app — file tree sidebar, multi-tab editor, status bar, JetBrains Mono throughout. Dark mode default with a light toggle, four accent colors, two density settings. Mobile-friendly (sidebar collapses to a drawer below 760px). No contact form — direct email instead.

## Stack

- **React 18 + TypeScript**, built with Create React App
- **Tailwind CSS** wired in for utility classes (used sparingly today; the design system lives in `src/styles/components.css` and CSS-variable tokens)
- **No router, no state library** — single-page scroll, scroll-spy keeps the active tab in sync

Originally designed via [Claude Design](https://claude.ai/design) and ported into the codebase.

## Prerequisites

- **Node.js 22+** — `nvm install 22 && nvm use 22`
- **pnpm** — managed by [Corepack](https://nodejs.org/api/corepack.html). Enable once with `corepack enable`. Exact pnpm version is pinned via the `packageManager` field in `package.json`.

## Setup

```bash
corepack enable          # one-time, if not already enabled
pnpm install
pnpm start               # dev server at http://localhost:3000
```

No environment variables are required to run, build, or deploy.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm start` | Dev server at http://localhost:3000 with hot reload |
| `pnpm build` | Production bundle into `build/` |
| `pnpm test`  | CRA test runner in watch mode |

## Project layout

```
src/
├── App.tsx                       Root: IDE shell + scroll-spy + keyboard nav
├── index.tsx, index.css          Entry + Tailwind directives + token/component imports
├── data/portfolio.ts             All content (resume, projects, posts) — single source of truth
├── types/portfolio.ts            TS interfaces for the above
├── components/
│   ├── ide/                      IDE chrome: TitleBar, Sidebar, TabBar, StatusBar, FileFrame, FileIcon
│   ├── sections/                 One per section: Hero, Experience, Projects, Skills,
│   │                             Credentials, Writing, Contact
│   └── tweaks/TweaksPanel.tsx    Floating theme/accent/density panel (localStorage-backed)
├── hooks/useTweaks.ts            Reads + persists tweaks
├── lib/highlights.tsx            `{{...}}` → accent-styled <span>
└── styles/
    ├── tokens.css                CSS variables: dark/light themes, 4 accents, density
    └── components.css            Per-component rules (layout, decorations, animations)
```

Tailwind tokens in `tailwind.config.js` reference the same CSS variables (`var(--accent)` etc.), so utility classes pick up runtime theme/accent changes automatically.

## Adding / changing content

Almost everything lives in `src/data/portfolio.ts`:

- **Hero copy / bio / stats** — `me` and `stats`
- **Experience** — `experience[]`. Wrap any text with `{{ ... }}` to render it accent-highlighted (e.g. `{{75% reduction}}`).
- **Projects** — `projects[]`. Set `links.demo` and `links.live` to real URLs; if either is `'#'` or empty, that button renders disabled.
- **Skills** — `skills[]` (5 categories with `primary` + `secondary` tiers)
- **Education + achievements** — `credentials`
- **Blog posts** — `writing[]`. To use a real cover image, drop the file in `public/blog/<name>.png` and set `cover: '/blog/<name>.png'` on the post; otherwise a generated SVG motif renders as fallback.

Adding/removing a section also means updating two arrays at the bottom of `data/portfolio.ts`: `files` (sidebar tree) and `sections` (tab + scroll-spy registry).

## Deployment

`.github/workflows/deployHPanel.yml` runs on **push to `main`** (and `workflow_dispatch` for manual runs):

1. Install dependencies with pnpm (frozen lockfile)
2. `pnpm build` → produces `build/`
3. FTP-sync `build/` to Hostinger via [`SamKirkland/FTP-Deploy-Action`](https://github.com/SamKirkland/FTP-Deploy-Action)

PRs do **not** deploy — opening a PR against `main` runs no workflow. Merging to `main` ships to production. There is no staging.

The action keeps a `.ftp-deploy-sync-state.json` file in the deploy directory on the server to track what was last uploaded; if it ever errors with a phantom file/folder deletion (`550 No such file or directory`), delete that state file via Hostinger File Manager and re-run the workflow.

### Secrets used

- `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` — Hostinger FTP creds

(Old `EMAILJS_*` secrets are no longer read by the workflow; they can be deleted or left.)
