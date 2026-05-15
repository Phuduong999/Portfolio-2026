## Context

Greenfield portfolio website for Phu Duong. No existing codebase — starting from scratch. The site will use Next.js 14+ App Router with TypeScript and Tailwind CSS v4. Seven React Bits components will be integrated for animations and UI. Data is config-driven so the owner can edit projects, experience, and contact info without touching component code.

## Goals / Non-Goals

**Goals:**
- Ship a visually impressive, interactive portfolio with smooth animations
- Multi-page routing: Home, Projects, Project Detail, Experience, Contact
- Responsive design optimized for iPhone and all mobile devices
- Dark/Light mode toggle
- Easy content management via TypeScript data files
- Fast initial load (static generation where possible)

**Non-Goals:**
- CMS or database integration (data lives in code files)
- Blog functionality
- Authentication or user accounts
- Server-side API routes
- i18n / multi-language support
- Analytics integration (can add later)

## Decisions

### 1. Next.js 14+ App Router over Vite SPA

**Decision**: Use Next.js with App Router.
**Rationale**: File-based routing matches the multi-page requirement. Static generation (SSG) gives fast loads. Built-in image optimization. Shadcn MCP already configured. SEO-friendly.
**Alternative considered**: Vite + React Router — lighter but no SSG, no image optimization, manual SEO setup.

### 2. React Bits via jsrepo copy (TS-CSS variant)

**Decision**: Copy components into `src/components/reactbits/` using jsrepo CLI with TypeScript + CSS variant.
**Rationale**: React Bits is a copy-paste library, not an npm package. The TS-CSS variant matches the TypeScript requirement while keeping CSS separate for easy customization. Components live in the project so they can be modified.
**Alternative considered**: TS-TW (Tailwind) variant — would integrate better with Tailwind but harder to customize the complex WebGL/GSAP animations that use CSS variables.

### 3. Navigation: BubbleMenu (desktop) + StaggeredMenu (mobile)

**Decision**: Use responsive breakpoint to swap between BubbleMenu (>= 768px) and StaggeredMenu (< 768px).
**Rationale**: BubbleMenu provides elegant floating nav for desktop without blocking content. StaggeredMenu provides full-screen overlay ideal for touch targets on mobile. Both use GSAP so the dependency is shared.
**Alternative considered**: Single menu for both — would compromise either desktop or mobile experience.

### 4. Data architecture: typed config files in `src/data/`

**Decision**: Three TypeScript files with exported arrays/objects: `projects.ts`, `experience.ts`, `personal.ts`. Types defined in `src/types/`.
**Rationale**: Type-safe, IDE autocompletion when editing, no build step for content changes, easy to add/remove entries. Import directly in components.
**Alternative considered**: JSON files — no type safety, no autocompletion. MDX — overkill for structured data.

### 5. Dark/Light mode via next-themes

**Decision**: Use `next-themes` with `ThemeProvider` wrapping the app. CSS variables for color tokens. Toggle button integrated into navigation.
**Rationale**: next-themes handles SSR hydration mismatch, localStorage persistence, system preference detection. Well-tested with Next.js App Router.

### 6. Font strategy: Erica One (headings) + Inter (body)

**Decision**: Load Erica One via `next/font/google` for headings (h1-h3). Use Inter as body font for readability.
**Rationale**: Erica One is bold and distinctive for branding but not readable at small sizes. Inter is a modern sans-serif that pairs well and is highly legible on all screens.

### 7. Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: ThemeProvider, SplashCursor, Nav
│   ├── page.tsx            # Home
│   ├── projects/
│   │   ├── page.tsx        # Projects grid
│   │   └── [slug]/
│   │       └── page.tsx    # Project detail
│   ├── experience/
│   │   └── page.tsx        # Timeline
│   └── contact/
│       └── page.tsx        # Contact with PrismaticBurst
├── components/
│   ├── reactbits/          # Copied React Bits components
│   │   ├── SplashCursor/
│   │   ├── BubbleMenu/
│   │   ├── StaggeredMenu/
│   │   ├── CircularGallery/
│   │   ├── Folder/
│   │   ├── ProfileCard/
│   │   └── PrismaticBurst/
│   ├── Navigation.tsx      # Responsive nav wrapper
│   ├── ThemeToggle.tsx     # Dark/light switch
│   └── Timeline.tsx        # Experience timeline component
├── data/
│   ├── projects.ts         # Project entries (editable)
│   ├── experience.ts       # Work history (editable)
│   └── personal.ts         # Name, title, contact (editable)
├── types/
│   └── index.ts            # Shared TypeScript types
└── styles/
    └── globals.css         # Tailwind base + CSS variables for theming
```

## Risks / Trade-offs

- **WebGL performance on older iPhones**: SplashCursor + CircularGallery + PrismaticBurst all use WebGL. → Mitigation: SplashCursor uses transparent mode (lighter), CircularGallery and PrismaticBurst are on separate pages so never render simultaneously. Can add `prefers-reduced-motion` check to disable on low-end devices.

- **GSAP bundle size**: GSAP is ~25kb gzipped. → Mitigation: Only two components use it (BubbleMenu, StaggeredMenu), and GSAP tree-shakes well. Acceptable for a portfolio site.

- **React Bits component updates**: Since components are copied, upstream updates require manual re-copy. → Mitigation: Portfolio is a static site, components won't need frequent updates. Pin the version used.

- **Erica One font limited charset**: Erica One only supports Latin characters. → Mitigation: Acceptable — the portfolio is in English. Vietnamese characters in body text will use Inter.
