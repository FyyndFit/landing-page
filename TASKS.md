# Task Guide for Agents

This document provides structured tasks, workflows, and checklists to help agents work efficiently on the FyyndFit landing page.

## Table of Contents

- [Adding New Components](#adding-new-components)
- [Modifying Existing Components](#modifying-existing-components)
- [Styling Changes](#styling-changes)
- [Adding Animations](#adding-animations)
- [Form Integration](#form-integration)
- [SEO & Metadata Updates](#seo--metadata-updates)
- [Accessibility Improvements](#accessibility-improvements)
- [Performance Optimization](#performance-optimization)
- [Bug Fixes](#bug-fixes)
- [Content Updates](#content-updates)

---

## Adding New Components

### Checklist

- [ ] Determine if component should be in `components/` or `components/ui/`
- [ ] Create file with kebab-case naming (`new-component.tsx`)
- [ ] Add `"use client"` directive if component needs interactivity
- [ ] Use named export: `export function NewComponent()`
- [ ] Import and use `cn()` from `@/lib/utils` for conditional classes
- [ ] Use semantic color tokens (`bg-background`, `text-foreground`, etc.)
- [ ] Add Framer Motion animations if needed
- [ ] Make responsive (mobile-first with `md:`, `lg:` breakpoints)
- [ ] Test in both light and dark themes
- [ ] Add component to `app/page.tsx` if it's a page section

### Example Template

```tsx
"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function NewComponent() {
  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="container px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Component content */}
        </motion.div>
      </div>
    </section>
  )
}
```

---

## Modifying Existing Components

### Pre-Modification Checklist

- [ ] Read the component file completely
- [ ] Understand current structure and dependencies
- [ ] Check if changes affect other components
- [ ] Review animation patterns used
- [ ] Note any form handling or state management

### Modification Steps

1. **Backup understanding:** Note what the component currently does
2. **Plan changes:** Identify what needs to be modified
3. **Make changes:** Follow existing patterns and conventions
4. **Test:** Verify in both themes and responsive breakpoints
5. **Check dependencies:** Ensure imports and props are correct

### Common Modifications

**Updating Text Content:**
- [ ] Find the text in the component
- [ ] Update while maintaining structure
- [ ] Check for hardcoded strings that should be constants

**Changing Colors:**
- [ ] Use semantic tokens (`bg-primary`, `text-foreground`)
- [ ] If new color needed, add to `globals.css` CSS variables
- [ ] Test in both light/dark themes

**Adding Sections:**
- [ ] Follow existing section structure
- [ ] Use container classes: `container px-6 md:px-12 lg:px-20`
- [ ] Add appropriate spacing: `py-32 lg:py-40`

---

## Styling Changes

### Adding New Styles

**Option 1: Tailwind Classes (Preferred)**
- [ ] Use existing Tailwind utilities
- [ ] Combine with `cn()` for conditionals
- [ ] Follow mobile-first responsive pattern

**Option 2: CSS Variables (For Theme Colors)**
- [ ] Add to `globals.css` in `@theme inline` block
- [ ] Define for both `:root` (light) and `.dark` (dark)
- [ ] Use semantic naming: `--primary`, `--background`, etc.

**Option 3: Custom Utilities (For Reusable Patterns)**
- [ ] Add to `globals.css` if needed frequently
- [ ] Document usage in component comments

### Brand Color Reference

- Primary: `#bd0505` (use `bg-primary` or `text-primary`)
- Primary Dark: `#970202` (use `bg-primary-dark` if defined)
- Background: `bg-background` (adapts to theme)
- Foreground: `text-foreground` (adapts to theme)

### Responsive Breakpoints

- Mobile: default (no prefix)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

---

## Adding Animations

### Framer Motion Checklist

- [ ] Import `motion` from `framer-motion`
- [ ] Use `motion.div`, `motion.section`, etc. instead of regular elements
- [ ] Add `initial` prop for starting state
- [ ] Add `animate` or `whileInView` for animation trigger
- [ ] Use `viewport={{ once: true }}` for scroll animations
- [ ] Add `transition` with appropriate delay/duration

### Common Animation Patterns

**Scroll-triggered (Most Common):**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
```

**Hover Effects:**
```tsx
<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
>
```

**Staggered Children:**
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 + index * 0.1 }}
  >
```

---

## Form Integration

### Current State

- Forms are **mock** (no backend integration)
- Email forms in `hero.tsx` and `cta.tsx`
- Uses React `useState` for form state
- HTML5 validation (`required`, `type="email"`)

### When Adding Backend Integration

**Checklist:**
- [ ] Set up API route in `app/api/` directory
- [ ] Update form `onSubmit` handler
- [ ] Add loading states (`isLoading`)
- [ ] Add error handling
- [ ] Add success feedback
- [ ] Consider rate limiting
- [ ] Add form validation (client + server)
- [ ] Update TypeScript types if needed

### Form Pattern Template

```tsx
const [email, setEmail] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setError(null)
  
  try {
    // API call here
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
    // Handle response
  } catch (err) {
    setError('Something went wrong')
  } finally {
    setIsLoading(false)
  }
}
```

---

## SEO & Metadata Updates

### Files to Update

- `src/app/layout.tsx` - Main metadata object

### Checklist

- [ ] Update `title` in metadata
- [ ] Update `description` (keep under 160 chars)
- [ ] Update `keywords` array
- [ ] Update Open Graph `title` and `description`
- [ ] Add/update `openGraph.image` if needed
- [ ] Consider adding `twitter` card metadata
- [ ] Verify canonical URL if needed

### Example

```tsx
export const metadata: Metadata = {
  title: "FyyndFit - Find Your Fitness",
  description: "AI-powered fitness app...",
  keywords: ["fitness", "gym", "workout", "AI"],
  openGraph: {
    title: "FyyndFit - Find Your Fitness",
    description: "AI-powered fitness app...",
    type: "website",
  },
}
```

---

## Accessibility Improvements

### Checklist

- [ ] Add `alt` text to all images
- [ ] Ensure proper heading hierarchy (h1 → h2 → h3)
- [ ] Add `aria-label` to icon-only buttons
- [ ] Ensure keyboard navigation works
- [ ] Check color contrast (use theme tokens)
- [ ] Add `focus-visible` styles for keyboard users
- [ ] Test with screen reader if possible
- [ ] Ensure form labels are properly associated

### Common Fixes

**Images:**
```tsx
<Image
  src="/image.png"
  alt="Descriptive alt text"
  width={100}
  height={100}
/>
```

**Icon Buttons:**
```tsx
<button aria-label="Toggle theme">
  <Moon className="w-5 h-5" />
</button>
```

**Focus Styles:**
```tsx
className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

---

## Performance Optimization

### Checklist

- [ ] Use Next.js `Image` component for all images
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Optimize images before adding to `/public`
- [ ] Check bundle size with `pnpm build`
- [ ] Use `viewport={{ once: true }}` for scroll animations
- [ ] Consider code splitting for large components
- [ ] Minimize re-renders (use React.memo if needed)
- [ ] Check Lighthouse scores

### Image Optimization

```tsx
<Image
  src="/image.png"
  alt="Description"
  width={500}
  height={300}
  loading="lazy"
  quality={85}
/>
```

---

## Bug Fixes

### Debugging Checklist

- [ ] Reproduce the bug consistently
- [ ] Check browser console for errors
- [ ] Check terminal/Next.js output
- [ ] Review component code for logic errors
- [ ] Check if issue is theme-specific
- [ ] Test on different screen sizes
- [ ] Verify dependencies are installed
- [ ] Check TypeScript errors (`pnpm lint`)

### Common Issues

**Hydration Errors:**
- Usually theme-related
- Check `suppressHydrationWarning` in layout
- Ensure client components use `"use client"`

**Styling Issues:**
- Check if Tailwind classes are correct
- Verify CSS variables are defined
- Test in both themes

**Animation Not Working:**
- Verify `framer-motion` is imported
- Check `viewport={{ once: true }}` is set
- Ensure element is visible in viewport

---

## Content Updates

### Text Content Locations

- `components/hero.tsx` - Hero headline, subheadline, stats
- `components/problem.tsx` - Problem statements
- `components/features.tsx` - Feature descriptions
- `components/how-it-works.tsx` - Step descriptions
- `components/cta.tsx` - CTA copy, trust signals
- `components/footer.tsx` - Footer links, copyright

### Update Checklist

- [ ] Find the component containing the text
- [ ] Update text while maintaining structure
- [ ] Check for hardcoded numbers (stats) that might need updates
- [ ] Verify text fits in mobile layout
- [ ] Check for typos and grammar
- [ ] Ensure tone matches brand voice

### Stats to Update (if needed)

- Hero stats: `1000+`, `500+`, `100%`
- Located in `components/hero.tsx`

---

## Testing Checklist (Before Committing)

- [ ] Run `pnpm lint` - no errors
- [ ] Run `pnpm build` - builds successfully
- [ ] Test in development (`pnpm dev`)
- [ ] Check light theme
- [ ] Check dark theme
- [ ] Test mobile viewport (< 768px)
- [ ] Test tablet viewport (768px - 1024px)
- [ ] Test desktop viewport (> 1024px)
- [ ] Verify all links work
- [ ] Check form submissions (if modified)
- [ ] Verify animations work smoothly
- [ ] Check console for errors/warnings

---

## Quick Reference

### Commands
```bash
pnpm dev      # Start dev server
pnpm build    # Production build
pnpm start    # Serve production build
pnpm lint     # Run ESLint
```

### Import Paths
```tsx
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
```

### Common Classes
```tsx
// Container
className="container px-6 md:px-12 lg:px-20"

// Section spacing
className="py-32 lg:py-40"

// Theme colors
className="bg-background text-foreground border-border"

// Primary brand
className="bg-primary text-primary-foreground"
```

### Animation Delays (for staggered)
- First: `delay: 0.1`
- Second: `delay: 0.2`
- Third: `delay: 0.3`
- Pattern: `delay: 0.1 + index * 0.1`

---

## Notes for Agents

- **Always use pnpm**, never npm or yarn
- **Follow existing patterns** - consistency is key
- **Test in both themes** - light and dark
- **Mobile-first** - design for mobile, enhance for desktop
- **Use semantic tokens** - don't hardcode colors
- **Check AGENTS.md** for architecture details
- **When in doubt**, look at similar existing components
