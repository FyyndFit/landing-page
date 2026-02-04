# Agent Documentation - FyyndFit Landing Page

This document provides context about the codebase structure, conventions, and patterns to help AI agents understand the project without scanning files repeatedly.

## Project Overview

**Type:** Next.js 16 marketing landing page (single-page site)  
**Purpose:** Public marketing site for FyyndFit fitness app  
**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4  
**Package Manager:** pnpm (always use pnpm, not npm/yarn)

## Architecture

### File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout: ThemeProvider, fonts, metadata
│   ├── page.tsx           # Home page: composes all sections
│   └── globals.css        # Tailwind + theme CSS variables
├── components/
│   ├── header.tsx         # Fixed navigation bar
│   ├── hero.tsx           # Hero section with email form
│   ├── problem.tsx        # Problem statement section
│   ├── features.tsx       # Features grid
│   ├── how-it-works.tsx   # 3-step process
│   ├── cta.tsx            # Call-to-action + waitlist form
│   ├── footer.tsx         # Footer with links
│   ├── theme-provider.tsx # next-themes wrapper
│   ├── theme-toggle.tsx   # Dark/light mode toggle
│   └── ui/                # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
└── lib/
    └── utils.ts           # cn() utility (clsx + tailwind-merge)
```

### Path Aliases

- `@/components/*` → `src/components/*`
- `@/lib/*` → `src/lib/*`
- Configured in `tsconfig.json`

## Key Conventions

### Component Patterns

1. **Client Components:** All page sections use `"use client"` (for Framer Motion, state, interactivity)
2. **Server Components:** `layout.tsx` is server-side (metadata, fonts)
3. **Component Exports:** Named exports (e.g., `export function Hero()`)
4. **File Naming:** kebab-case for files (`hero.tsx`), PascalCase for components (`Hero`)

### Styling Approach

- **Tailwind CSS v4** with PostCSS
- **CSS Variables** for theming (light/dark) in `globals.css`
- **Brand Colors:** Primary `#bd0505` (red), defined as `--primary` and `--color-brand`
- **Theme System:** Uses `next-themes` with `system` default (respects OS preference)
- **Custom Utilities:** `glow-red-sm`, `glow-red` for button effects
- **Responsive:** Mobile-first with `md:`, `lg:` breakpoints

### Animation Patterns

- **Framer Motion** used throughout for:
  - Scroll-triggered animations (`whileInView`)
  - Hover effects (`whileHover`, `whileTap`)
  - Page load animations (`initial`, `animate`, `transition`)
- Common pattern: `viewport={{ once: true }}` for scroll animations

### Form Handling

- **Email Forms:** Present in `hero.tsx` and `cta.tsx`
- **State Management:** React `useState` for form state
- **Submission:** Currently mock (no backend integration)
- **Validation:** HTML5 `required` + `type="email"`

## Component Details

### Layout (`app/layout.tsx`)

- Wraps app with `ThemeProvider`
- Sets metadata (title, description, Open Graph)
- Loads Geist fonts (sans + mono)
- Uses `suppressHydrationWarning` for theme

### Page (`app/page.tsx`)

- Composes all sections: Header → Hero → Problem → Features → How It Works → CTA → Footer
- No props, pure composition

### Header (`components/header.tsx`)

- Fixed position (`fixed top-0`)
- Backdrop blur (`backdrop-blur-md`)
- Logo with Image component
- Navigation links (Features, How It Works)
- Theme toggle + CTA button

### Hero (`components/hero.tsx`)

- Full-screen section (`min-h-screen`)
- Email early-access form
- Stats display (1000+ waitlist, 500+ exercises, 100% free)
- Animated phone mockup
- Floating UI elements

### Problem (`components/problem.tsx`)

- Dark overlay with gym background image
- 3 problem cards
- Uses Unsplash image URL

### Features (`components/features.tsx`)

- Bento-style grid layout
- 5 features with icons (Camera, Dumbbell, Brain, Flame, BarChart3)
- First feature spans 2 columns on md, 1 on lg

### How It Works (`components/how-it-works.tsx`)

- 3-step process (Scan → Get routine → Crush it & track)
- Phone mockup in center
- Steps on left/right sides

### CTA (`components/cta.tsx`)

- App Store buttons (Apple + Google Play) - placeholders
- Waitlist email form
- Trust signals (checkmarks)

### Footer (`components/footer.tsx`)

- Logo, navigation links (Privacy, Terms, Contact)
- Copyright with dynamic year

## Dependencies

### Core
- `next@16.1.6` - Framework
- `react@19.2.3` - UI library
- `typescript@^5` - Type safety

### Styling
- `tailwindcss@^4` - Utility-first CSS
- `@tailwindcss/postcss@^4` - PostCSS integration
- `tw-animate-css@^1.4.0` - Animation utilities
- `tailwind-merge@^3.4.0` - Merge Tailwind classes
- `clsx@^2.1.1` - Conditional classes

### UI Components
- `radix-ui@^1.4.3` - Headless UI primitives (via shadcn)
- `class-variance-authority@^0.7.1` - Component variants
- `lucide-react@^0.563.0` - Icons

### Animation
- `framer-motion@^12.31.0` - Animation library

### Theming
- `next-themes@^0.4.6` - Theme management

## Important Files

### `globals.css`
- Tailwind imports
- Theme CSS variables (`:root` for light, `.dark` for dark)
- Brand color definitions
- Custom variant: `@custom-variant dark`

### `components.json`
- shadcn/ui configuration
- Style: "new-york"
- Path aliases for components/utils/ui/lib

### `tsconfig.json`
- Path alias `@/*` → `./src/*`
- Strict mode enabled
- Next.js plugin configured

### `lib/utils.ts`
- `cn()` function: merges Tailwind classes intelligently
- Used throughout for conditional styling

## Common Patterns

### Conditional Classes
```tsx
className={cn(
  "base-classes",
  condition && "conditional-class",
  anotherCondition ? "class-a" : "class-b"
)}
```

### Framer Motion Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
```

### Theme-Aware Colors
- Use semantic tokens: `bg-background`, `text-foreground`, `border-border`
- Brand color: `bg-primary`, `text-primary`
- Muted: `bg-muted`, `text-muted-foreground`

### Image Usage
- Next.js `Image` component for optimization
- Public assets in `/public/`: `fyyndfit-icon.png`, `fyyndfit-logo.png`

## Development Notes

- **No backend:** Forms are mock (no API calls)
- **No database:** Static site
- **No authentication:** Public marketing page
- **Environment:** No `.env` needed for current setup
- **Build:** Standard Next.js build process

## When Making Changes

1. **New Components:** Add to `src/components/`, use `"use client"` if interactive
2. **Styling:** Use Tailwind classes, add CSS variables in `globals.css` if needed
3. **Icons:** Use Lucide React (import from `lucide-react`)
4. **Animations:** Use Framer Motion with `viewport={{ once: true }}` for scroll
5. **Forms:** Current forms are mock - add backend integration when ready
6. **Theme:** Colors defined in `globals.css`, use semantic tokens in components

## Quick Reference

- **Run dev:** `pnpm dev`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Primary color:** `#bd0505` (red)
- **Font:** Geist (sans + mono)
- **Theme:** Light (warm stone) / Dark (warm charcoal)
- **Package manager:** Always use `pnpm`
