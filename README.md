# NFT Indonesia Website

## About This Repo

`nft-indonesia-xyz` is the official website and publishing hub for NFT Indonesia. It provides a fast, SEO-friendly site for articles, archives, and project information, with a content pipeline that supports rich posts (MDX/Markdown), code highlighting, and structured categories.

### Purpose & Scope

- Publish and curate long-form content (articles, announcements, documentation-style posts).
- Keep content navigable and discoverable via categories, slugs, and sitemap generation.
- Maintain a stable, production-ready website with predictable builds and deployments.

### Technology

- Framework: **Next.js** + **React**
- Content: **MDX/Markdown-based** posts with frontmatter (`gray-matter`)
- Rendering: static generation where appropriate + sitemap generation (`next-sitemap`)
- Styling: **Tailwind CSS**
- Tooling: **npm**, **ESLint**, **TypeScript**
- Deployment: **Vercel**

### How We Maintain Quality

- We follow **Prof. NOTA Evergreen Standard**: safe monthly updates and scheduled quarterly majors, keeping Node version for Vercel compatibility.
- We validate changes with audit + lint + build, and document runs under `EVERGREENING/completion-log-*.md`.

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)
- Package manager:

  - **NPM** (lockfile: `package-lock.json`)
  - ~~Yarn (lockfile: `yarn.lock`)~~
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:

   - `npm outdated`
   - ~~yarn outdated~~
   - ~~pnpm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `npm update`
   - ~~yarn upgrade~~
   - ~~pnpm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `npm audit --audit-level=moderate`
   - ~~yarn audit~~
   - ~~pnpm audit~~
   - `npm run lint`
   - `npm run build`
   - ~~yarn build~~
   - ~~pnpm build~~

4. Deploy:

   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples:

- Node major version
- Next.js / React major version
- Tailwind CSS major version
- Package manager major version

---

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Images storage list:

- [Images List](s.io/ipfs/Qme4RHiGt6CoreJd6aeBiZ9K1avsN89uwVWcE1WJzodMJd/)

Regards,

Prof. NOTA

==== 47 =======
