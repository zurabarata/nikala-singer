# Nikala SINGER Restaurant Website

A minimalist restaurant website for Nikala SINGER, a Georgian restaurant in Hannover, Germany.

## Features

- Clean, typewriter-style design with monospace typography
- Responsive navigation with mobile hamburger menu
- Multiple pages: Home, Menu, and Location
- Georgian cuisine menu with detailed descriptions
- Contact information and location map

## Tech Stack

- React 19
- React Router 7
- Tailwind CSS 4
- Vite
- TypeScript

## Project Structure

```
src/app/
├── components/          # React components
│   ├── Footer.tsx      # Shared footer component
│   ├── Home.tsx        # Home page
│   ├── Layout.tsx      # Main layout with navigation
│   ├── Location.tsx    # Location/contact page
│   ├── Menu.tsx        # Menu page
│   ├── MenuItemCard.tsx    # Individual menu item
│   └── MenuSection.tsx     # Menu section wrapper
├── constants/          # Application constants
│   └── index.ts       # Restaurant info, navigation, URLs
├── data/              # Static data
│   └── menu.ts        # Menu items and sections
├── types/             # TypeScript type definitions
│   └── menu.ts        # Menu-related types
├── App.tsx            # App entry point
└── routes.tsx         # Route configuration

src/styles/            # Global styles
```

## Architecture Principles

- **Separation of Concerns**: Components, data, types, and constants are clearly separated
- **Reusability**: Shared components (Footer, MenuItemCard, MenuSection) avoid duplication
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Single Source of Truth**: Restaurant info and menu data centralized in dedicated files
- **Maintainability**: Easy to update menu items, contact info, or add new sections

## Getting Started

### Prerequisites

- Node.js ^20.19.0 (or >=22.12.0) and pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Restaurant Information

**Address:**  
Lärchenstraße 2  
30161 Hannover  
Germany

**Phone:** +49 511 33730282

**Instagram:** [@nikala_singer_restaurant_bar](https://www.instagram.com/nikala_singer_restaurant_bar/)

## License

All rights reserved.
