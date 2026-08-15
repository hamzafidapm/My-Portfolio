# Hamza Fida — Developer Portfolio

Animated, SEO-optimised personal portfolio for a full-stack developer. Dark theme,
single gold/amber accent, motion throughout, mobile-first.

## Stack

- **Next.js 14** (App Router, fully static export of `/`)
- **TypeScript** (strict)
- **Tailwind CSS** (custom `ink` / `gold` palette)
- **Framer Motion** (shared variant library in `src/lib/motion.ts`)
- `next/image` + `next/font` for asset optimisation
- Deploy target: **Vercel**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

## ⚠️ Replace the profile photo

`public/images/hamza.jpeg` currently holds a **generated placeholder**. Drop the real
photo in at the same path (portrait, ideally ~1200×1600) and everything — hero, Open
Graph preview, Twitter card, JSON-LD — picks it up automatically.

## Before deploying

Edit `src/lib/site.ts` — it is the single source of truth for content:

| Field | Status |
| --- | --- |
| `url` | Set to `https://hamza.vercel.app`. Drives canonical URL, OG tags, sitemap and `robots.txt` — update if the deployed domain differs. |
| `links.github` | `https://github.com/hamzafidapm`. |
| `projects[].repo` | Verified against the live repos (`coachflow`, `Marinaheights`, `sablefire`, `Gym`). |
| `twitter.creator` (in `src/app/layout.tsx`) | Set to `@vibewithhamzah` — update or remove if the handle differs. |

## Structure

```
src/
├─ app/
│  ├─ layout.tsx      # metadata, OG/Twitter, JSON-LD, fonts, chrome
│  ├─ page.tsx        # hero eager, other sections lazy-loaded
│  ├─ globals.css     # base/component/utility layers
│  ├─ robots.ts       # /robots.txt
│  └─ sitemap.ts      # /sitemap.xml
├─ components/
│  ├─ Navbar.tsx          # sticky nav, active-section highlight, mobile slide-in
│  ├─ Hero.tsx            # animated gradient backdrop, photo, CTAs
│  ├─ About.tsx           # bio + animated stat counters
│  ├─ StatCounter.tsx     # rAF count-up, respects reduced motion
│  ├─ TechStack.tsx       # staggered grid + marquee
│  ├─ Projects.tsx        # section wrapper
│  ├─ ProjectCard.tsx     # lift/scale/glow hover card
│  ├─ Contact.tsx         # WhatsApp CTA + socials
│  ├─ Footer.tsx
│  ├─ ScrollProgress.tsx  # top progress bar
│  ├─ PageTransition.tsx  # brief load-in
│  └─ Icons.tsx
└─ lib/
   ├─ site.ts             # all content + links
   ├─ motion.ts           # shared Framer Motion variants
   └─ useActiveSection.ts # scroll-spy hook
```

## Accessibility & performance notes

- Skip-to-content link, visible focus rings, `aria-current` on the active nav item,
  labelled sections, alt text on the photo, decorative layers marked `aria-hidden`.
- `prefers-reduced-motion` disables CSS animations and the stat count-up.
- Below-the-fold sections are code-split via `next/dynamic` with height placeholders
  so lazy loading does not cause layout shift.
- The hero background is CSS-transformed blurred gradients — no canvas or particle
  library — to keep mobile frame rates high.
- Verified with no console errors and zero horizontal overflow at 375 / 768 / 1024 /
  1440 px.

## Deploy

Import the repo on Vercel; no environment variables are required. Set the production
domain, then update `siteConfig.url` to match.
