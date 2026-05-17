# Sri Mariamman Tractor Center

A bilingual (English/Tamil) landing page for Sri Mariamman Tractor Center — a Mahindra tractor sales, brokerage, service, and spare parts business in Paramathi Velur, Namakkal,  Tamil Nadu.

## Run & Operate

- `pnpm --filter @workspace/tractor-center run dev` — run the frontend (workflow: `artifacts/tractor-center: web`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all package![alt text](image.png)s

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (TailwindCSS v4, Framer Motion, Three.js via @react-three/fiber)
- No backend — purely static frontend.

## Where things live

- `artifacts/tractor-center/src/pages/HomePage.tsx` — entire page (all sections)
- `artifacts/tractor-center/src/components/Scrollytelling.tsx` — scroll-driven canvas animation (240 frames)
- `artifacts/tractor-center/src/components/Hero3D.tsx` — Three.js animated sphere (gracefully degrades if no WebGL)
- `artifacts/tractor-center/src/styles.css` — Tailwind v4 theme with custom brand palette
- `artifacts/tractor-center/public/sequence/` — 240 JPEG frames for scrollytelling animation
- `artifacts/tractor-center/src/assets/` — product images (tractors, rotavator, tanker)

## Architecture decisions

- TanStack Start → Vite + React migration: replaced `createFileRoute`/`createRootRouteWithContext` with a plain React component; `useHydrated()` replaced with `useEffect` state pattern.
- Bilingual i18n handled inline with a `lang` state toggle (EN/TA) — no i18n library needed for this scope.
- Hero3D checks WebGL support before mounting the Canvas to avoid errors in environments without GPU.
- No API server needed — this is a pure marketing/contact site with phone/WhatsApp CTAs.

## Product

- Full-page bilingual website for a tractor dealership
- Sections: Hero (3D + scrollytelling), Location strip, About, Services (6 cards), Equipment portfolio (4 products), Why Us, Testimonials, Contact, Footer
- Language toggle between English and Tamil
- WhatsApp and phone call CTAs throughout

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The scrollytelling sequence loads 240 JPEG frames from `/sequence/` — will be slow on first load.
- The Three.js sphere won't render in the Replit preview (no GPU), but works fine in real browsers.
- `@tanstack/react-router` is still installed (used by other packages) but only wouter is used for routing in this app.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
