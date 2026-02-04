# FyyndFit Landing Page

Next.js marketing site for FyyndFit. Single-page layout with hero, features, how-it-works, and waitlist CTA.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4** + PostCSS
- **TypeScript**
- **Framer Motion** — scroll/hover animations
- **next-themes** — light/dark (system)
- **shadcn/ui** (New York) — Radix primitives, CVA, `tailwind-merge`, `clsx`
- **Lucide React** — icons
- **Geist** — fonts via `next/font`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, ThemeProvider, metadata
│   ├── page.tsx        # Home: composes all sections
│   └── globals.css     # Tailwind + theme CSS variables
├── components/
│   ├── header.tsx      # Fixed nav, logo, theme toggle, CTA link
│   ├── hero.tsx        # Hero copy + email early-access form
│   ├── problem.tsx     # Problem section
│   ├── features.tsx    # Features grid
│   ├── how-it-works.tsx
│   ├── cta.tsx         # App store buttons + waitlist form
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui/             # shadcn: button, card, input
└── lib/
    └── utils.ts        # cn()
```

## Setup

**Prerequisites:** Node.js 18+, pnpm

```bash
pnpm install
pnpm dev
```

Dev server: [http://localhost:3000](http://localhost:3000)

## Scripts

| Command       | Description        |
|---------------|--------------------|
| `pnpm dev`    | Dev server         |
| `pnpm build`  | Production build   |
| `pnpm start`  | Serve production   |
| `pnpm lint`   | ESLint             |

## Config

- **Theming:** CSS variables in `src/app/globals.css` (`:root` / `.dark`)
- **SEO:** `metadata` in `src/app/layout.tsx`
- **shadcn:** `components.json` (aliases, style: new-york)
