## 1. Project Setup

- [x] 1.1 Initialize Next.js 14+ project with TypeScript, Tailwind CSS v4, App Router
- [x] 1.2 Install dependencies: gsap, ogl, next-themes
- [x] 1.3 Configure Erica One and Inter fonts via next/font/google
- [x] 1.4 Set up Tailwind CSS v4 with dark/light mode CSS variables in globals.css
- [x] 1.5 Create TypeScript types in src/types/index.ts (Project, Experience, PersonalInfo)

## 2. Data Config Files

- [x] 2.1 Create src/data/personal.ts with placeholder personal info (name: "Phu Duong", empty contact fields)
- [x] 2.2 Create src/data/projects.ts with 3-4 sample projects (placeholder data, featured flags)
- [x] 2.3 Create src/data/experience.ts with 2-3 placeholder experience entries

## 3. React Bits Components

- [x] 3.1 Copy SplashCursor component via jsrepo into src/components/reactbits/SplashCursor/
- [x] 3.2 Copy BubbleMenu component via jsrepo into src/components/reactbits/BubbleMenu/
- [x] 3.3 Copy StaggeredMenu component via jsrepo into src/components/reactbits/StaggeredMenu/
- [x] 3.4 Copy CircularGallery component via jsrepo into src/components/reactbits/CircularGallery/
- [x] 3.5 Copy Folder component via jsrepo into src/components/reactbits/Folder/
- [x] 3.6 Copy ProfileCard component via jsrepo into src/components/reactbits/ProfileCard/
- [x] 3.7 Copy PrismaticBurst component via jsrepo into src/components/reactbits/PrismaticBurst/
- [x] 3.8 Adapt all React Bits components for Next.js App Router ('use client' directives, dynamic imports)

## 4. Global Layout & Navigation

- [x] 4.1 Create root layout (src/app/layout.tsx) with ThemeProvider, fonts, global styles
- [x] 4.2 Add SplashCursor to root layout (dynamically imported, client-only)
- [x] 4.3 Create Navigation wrapper component (src/components/Navigation.tsx) that renders BubbleMenu on desktop and StaggeredMenu on mobile
- [x] 4.4 Configure BubbleMenu with navigation items: Home, Projects, Experience, Contact
- [x] 4.5 Configure StaggeredMenu with numbered items and social links
- [x] 4.6 Create ThemeToggle component and integrate into navigation

## 5. Home Page

- [x] 5.1 Create src/app/page.tsx with hero section: side-by-side layout (name left, ProfileCard right)
- [x] 5.2 Configure ProfileCard with data from personal.ts (avatar, name, title, handle, status, contact button → /contact)
- [x] 5.3 Add CircularGallery section below hero showing featured projects from data/projects.ts
- [x] 5.4 Add "View All Projects" link below gallery navigating to /projects
- [x] 5.5 Make hero responsive: side-by-side on desktop, stacked on mobile

## 6. Projects Pages

- [x] 6.1 Create src/app/projects/page.tsx with responsive grid of Folder components
- [x] 6.2 Configure each Folder with project color, title, and paper items (thumbnail, tech stack, short desc)
- [x] 6.3 Add click handler on Folders to navigate to /projects/[slug]
- [x] 6.4 Create src/app/projects/[slug]/page.tsx with full project detail layout
- [x] 6.5 Implement generateStaticParams to generate routes for all projects in data config
- [x] 6.6 Add back navigation to /projects from detail page

## 7. Experience Page

- [x] 7.1 Create Timeline component (src/components/Timeline.tsx) with vertical center line, alternating entries
- [x] 7.2 Style timeline entries: company logo/placeholder, name, role, date range, highlights
- [x] 7.3 Handle "Present" indicator for entries with null endDate
- [x] 7.4 Make timeline responsive: alternating on desktop, single-side on mobile
- [x] 7.5 Create src/app/experience/page.tsx using Timeline with data from experience.ts

## 8. Contact Page

- [x] 8.1 Create src/app/contact/page.tsx with PrismaticBurst fullscreen background
- [x] 8.2 Overlay contact info card with heading "LET'S WORK TOGETHER" in Erica One
- [x] 8.3 Display contact fields from personal.ts (email mailto:, GitHub link, LinkedIn link, phone)
- [x] 8.4 Hide empty contact fields, ensure text contrast against animated background

## 9. Dark/Light Mode Polish

- [x] 9.1 Define CSS variable tokens for both themes (backgrounds, text, card colors, timeline colors)
- [x] 9.2 Ensure all React Bits components respect theme (BubbleMenu bg, StaggeredMenu colors, Folder color, ProfileCard)
- [x] 9.3 Adjust SplashCursor colors for dark vs light mode
- [x] 9.4 Test theme toggle persistence and OS preference detection

## 10. Mobile Optimization

- [x] 10.1 Test and fix responsive breakpoints across all pages (iPhone SE, iPhone 14/15, iPad)
- [x] 10.2 Enable ProfileCard gyroscope tilt on mobile (enableMobileTilt prop)
- [x] 10.3 Verify CircularGallery touch drag works smoothly
- [x] 10.4 Verify StaggeredMenu tap targets are large enough for touch
- [x] 10.5 Test PrismaticBurst performance on mobile Safari
