---
name: nikala-singer-frontend
description: Project workflow and structure for the Nikala SINGER restaurant website. Use when adding or editing pages, menu data, components, styling, or deployment-related code. Covers React 18, Vite, Tailwind 4, React Router 7, path alias @, and single-source-of-truth patterns; use `.cursor/rules/*.mdc` as canonical guardrails.
---

# Nikala SINGER Frontend

## Stack

- **React 18** + **TypeScript**
- **Vite 6** (build), **React Router 7** (routing)
- **Tailwind CSS 4** via `@tailwindcss/vite`; theme in `src/styles/theme.css`
- **Path alias:** `@/` → `src/` (e.g. `import x from '@/app/constants'`)

## Structure

| Purpose | Location |
|--------|----------|
| App entry, routes | `src/app/App.tsx`, `src/app/routes.tsx` |
| Page components | `src/app/components/` (Layout, Home, Menu, Location, Footer, MenuSection, MenuItemCard) |
| Shared UI (Radix, etc.) | `src/app/components/ui/` (button, dialog, input, …); use `cn()` from `@/app/components/ui/utils` |
| Restaurant copy, nav, hero image | `src/app/constants/index.ts` (RESTAURANT_INFO, NAVIGATION, HERO_IMAGE_URL) |
| Menu content | `src/app/data/menu.ts` (sections + `menuSections` array); types in `src/app/types/menu.ts` |
| Global styles | `src/styles/index.css` → fonts, tailwind, theme |

## Conventions

- **Rule hierarchy:** `.cursor/rules/*.mdc` are canonical. This skill provides project workflow/context and should not override rule files.
- **Single source of truth:** Restaurant info and nav live in `constants/index.ts`; menu in `data/menu.ts`. Do not duplicate.
- **New menu sections:** Add a section object (title + items) in `data/menu.ts`, then append to `menuSections`.
- **New routes:** Add in `src/app/routes.tsx` under the Layout child routes; add nav links in `Layout.tsx` and `Footer.tsx` using `NAVIGATION` from constants.
- **Copy:** Site is German (e.g. "Hauptseite", "Menü", "Standort"). Keep labels and UI text in German unless asked otherwise.
- **Mobile:** Layout uses responsive Tailwind; `useIsMobile()` in `@/app/components/ui/use-mobile.ts` uses `max-width: 767px` (`<768px`) for mobile checks.

## Commands

- `pnpm install` — install deps (include react/react-dom if missing)
- `pnpm dev` — dev server
- `pnpm build` — production build

## Deployment

- Hosting and domain settings are environment-owned and may change. Verify current provider/project config before making deployment-related edits.
