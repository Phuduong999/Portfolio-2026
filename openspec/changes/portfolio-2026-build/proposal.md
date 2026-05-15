## Why

Build a personal portfolio website for Phu Duong to showcase projects, work experience, and contact information to potential clients and employers. The site needs to be visually impressive with interactive animations, responsive on mobile (iPhone), and easy to maintain by editing data config files. No portfolio currently exists — this is a greenfield build.

## What Changes

- Create a multi-page Next.js 14+ portfolio with App Router and TypeScript
- 5 routes: Home (`/`), Projects (`/projects`), Project Detail (`/projects/[slug]`), Experience (`/experience`), Contact (`/contact`)
- Integrate 7 React Bits components: SplashCursor (global cursor), BubbleMenu (desktop nav), StaggeredMenu (mobile nav), CircularGallery (project showcase), Folder (project cards), ProfileCard (hero), PrismaticBurst (contact background)
- Dark/Light mode with next-themes
- Erica One Google Font for headings
- Editable data files in `data/` for projects, experience, and personal info (up to 10+ projects, company logos/roles, contact info — all placeholder-ready)
- Fully responsive for iPhone and all mobile devices

## Capabilities

### New Capabilities
- `site-layout`: Global layout with SplashCursor, responsive navigation (BubbleMenu desktop / StaggeredMenu mobile), dark/light mode toggle, Erica One font
- `home-page`: Hero section with side-by-side layout (name + ProfileCard), featured projects CircularGallery, CTA
- `projects-showcase`: Projects listing page with Folder component grid, individual project detail pages with images/tech stack/links
- `experience-timeline`: Vertical timeline page showing work history with company logos, roles, dates, highlights
- `contact-page`: Contact page with PrismaticBurst animated background and contact info display
- `data-config`: TypeScript data files for projects, experience, and personal info — editable without code changes

### Modified Capabilities
<!-- None — greenfield project -->

## Impact

- **New dependencies**: next, react 19, typescript, tailwindcss v4, gsap, ogl, next-themes
- **React Bits components**: Copied via jsrepo CLI (SplashCursor, BubbleMenu, StaggeredMenu, CircularGallery, Folder, ProfileCard, PrismaticBurst)
- **Static assets**: Placeholder images needed for avatar, project thumbnails, company logos
- **Deployment**: Static export compatible (Vercel, Netlify, etc.)
