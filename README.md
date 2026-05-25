# ruban-portfolio

Personal portfolio site for Ruban Sahoo, deployed at [rubansahoo.com](https://rubansahoo.com).

Built with Create React App + TypeScript. EmailJS powers the contact form.

## Prerequisites

- **Node.js 22+** — install via [nvm](https://github.com/nvm-sh/nvm): `nvm install 22 && nvm use 22`
- **pnpm** — managed by [Corepack](https://nodejs.org/api/corepack.html), which ships with Node. Enable once with `corepack enable`. The exact pnpm version is pinned via `packageManager` in `package.json` and will be activated automatically.

## Setup

```bash
corepack enable          # one-time, if not already enabled
pnpm install
```

## Environment variables

The contact form needs three [EmailJS](https://www.emailjs.com/) keys. Create a `.env.local` at the repo root:

```
REACT_APP_EMAILJS_PUBLIC_KEY=...
REACT_APP_SERVICE_ID=...
REACT_APP_TEMPLATE_ID=...
```

In CI these are injected from GitHub Secrets (`EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`).

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm start` | Run the dev server at http://localhost:3000 with hot reload |
| `pnpm build` | Produce an optimized production bundle in `build/` |
| `pnpm test`  | Run the CRA test runner in watch mode |

## Deployment

`.github/workflows/deployHPanel.yml` runs on every push **and PR** to `main`:

1. Install dependencies with pnpm (frozen lockfile).
2. Build with the EmailJS secrets injected as `REACT_APP_*` env vars.
3. FTP-sync `build/` to Hostinger via [`SamKirkland/FTP-Deploy-Action`](https://github.com/SamKirkland/FTP-Deploy-Action).

Merging to `main` ships to production. There is no staging environment.
