## ADDED Requirements

### Requirement: Projects grid page with Folder components
The /projects page SHALL display all projects as a responsive grid of Folder components. Each folder MUST show the project title and color. The grid MUST be 3 columns on desktop, 2 on tablet, and 1-2 on mobile.

#### Scenario: Folder hover interaction
- **WHEN** user hovers over a Folder component
- **THEN** the folder opens to reveal up to 3 paper items showing: a project thumbnail, tech stack tags, and a short description

#### Scenario: Folder click navigation
- **WHEN** user clicks on an open Folder
- **THEN** the app navigates to /projects/[slug] for that project

### Requirement: Project detail page
The /projects/[slug] page SHALL display full project details including: title, full description, image gallery, tech stack list, category, and optional links (live URL, GitHub). The page MUST be statically generated for all projects defined in the data config.

#### Scenario: Project detail rendering
- **WHEN** user navigates to /projects/eco-monitoring-platform
- **THEN** the page displays the full project info with images, description, tech stack, and links

#### Scenario: Back navigation
- **WHEN** user wants to return to the projects list
- **THEN** a back button or breadcrumb navigates to /projects

### Requirement: Dynamic project routing
The system SHALL generate static pages for all projects defined in the data config using Next.js generateStaticParams. Adding a new project to the data file MUST automatically create its route.

#### Scenario: New project added
- **WHEN** a new project entry is added to data/projects.ts and the site is rebuilt
- **THEN** a new /projects/[slug] page is generated for that project
