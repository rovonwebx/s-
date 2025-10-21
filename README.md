Data Science Society – Dark Theme Next.js App
====================================

CMRIT Hyderabad • A modern, dark-themed club website built with Next.js (App Router) and Tailwind CSS.

Getting Started
---------------

Prerequisites: Node 18+.

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

Features
--------

- App Router with TypeScript and Tailwind CSS
- System-aware dark theme with manual toggle (persists via localStorage)
- Modern UI: Navbar, Footer, Buttons, Cards, Sections, Badges
- Core pages: Home, Events, Team, Gallery, About, Contact, Join
- SEO metadata, web manifest, and optimized image formats

Structure
---------

- `src/app` – routes, layout, and pages
- `src/components` – UI and layout components
- `src/data` – sample content (events and team)

Customize
---------

- Update theme colors in `src/app/globals.css` (CSS variables)
- Change site metadata in `src/app/layout.tsx` (`metadata` export)
- Replace sample data in `src/data/sample.ts`

Deploy
------

Deploy to any Next.js-compatible host. Build with:

```bash
npm run build && npm start
```
