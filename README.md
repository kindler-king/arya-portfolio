# Arya Sarkar — Portfolio

A premium, single-page portfolio for a Senior AI Engineer. Deep obsidian, soft
gold and champagne, warm ivory, and very subtle violet — elegant, minimal and
highly interactive. Built to feel like a premium AI operating system.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Motion** (Framer Motion) for animation
- **Lucide** icons · **Instrument Serif** + **Geist** / **Geist Mono** fonts

## Sections

Hero · Selected Work (3 projects) · Engineering Timeline · Skills architecture
map · Research & Awards · About · Contact.

## Details worth knowing

- All copy and data live in `src/lib/data.ts`.
- Custom animated cursor, magnetic buttons, scroll-reveal, a Runeterra-flavored
  constellation background, and a champion-select-style preloader (shown once
  per session).
- Quiet personality easter eggs — a sleeping cat on a divider, a rotating
  manifesto — kept subtle by design.
- Respects `prefers-reduced-motion` and coarse pointers throughout.
- The preloader completes on a timer (not `requestAnimationFrame`) so it never
  traps visitors on inactive/background tabs.

## Develop

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
```

Replace `public/Arya_Sarkar_Resume.pdf` and the social URLs in
`src/lib/data.ts` before deploying. Add a real portrait to swap the monogram
placeholder in `src/components/About.tsx`.
