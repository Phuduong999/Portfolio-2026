## ADDED Requirements

### Requirement: Global SplashCursor animation
The system SHALL render a SplashCursor WebGL fluid animation that follows the user's cursor across all pages. The cursor effect MUST use transparent mode so page content remains visible beneath.

#### Scenario: Cursor interaction on desktop
- **WHEN** user moves their mouse on any page
- **THEN** a liquid splash effect follows the cursor with colorful ink-like ripples

#### Scenario: Touch interaction on mobile
- **WHEN** user touches and drags on any page
- **THEN** the splash effect responds to touch position

### Requirement: Desktop navigation with BubbleMenu
The system SHALL display a BubbleMenu fixed navigation bar on viewports >= 768px. The menu MUST include a logo/brand element ("PD") and a hamburger toggle that reveals pill-shaped navigation links with staggered animation.

#### Scenario: Menu toggle on desktop
- **WHEN** user clicks the hamburger button on desktop
- **THEN** pill-shaped links animate into view for: Home, Projects, Experience, Contact

#### Scenario: Navigation routing
- **WHEN** user clicks a navigation pill link
- **THEN** the app navigates to the corresponding route

### Requirement: Mobile navigation with StaggeredMenu
The system SHALL display a StaggeredMenu full-screen overlay navigation on viewports < 768px. The menu MUST include numbered menu items and social links at the bottom.

#### Scenario: Menu open on mobile
- **WHEN** user taps the hamburger button on mobile
- **THEN** a full-screen overlay slides in with staggered item animations showing: 01 Home, 02 Projects, 03 Experience, 04 Contact, plus social links

#### Scenario: Menu close on mobile
- **WHEN** user taps a menu item or clicks outside
- **THEN** the overlay closes with reverse animation

### Requirement: Dark/Light mode toggle
The system SHALL support both dark and light color themes with a toggle button accessible from the navigation. The theme preference MUST persist across page reloads using localStorage. The system MUST respect the user's OS-level color scheme preference on first visit.

#### Scenario: Toggle theme
- **WHEN** user clicks the theme toggle button
- **THEN** the entire site switches between dark and light color schemes with appropriate color tokens

#### Scenario: Theme persistence
- **WHEN** user selects a theme and reloads the page
- **THEN** the previously selected theme is applied

### Requirement: Erica One font for headings
The system SHALL load the Erica One Google Font and apply it to all heading elements (h1, h2, h3). Body text MUST use Inter or system sans-serif for readability.

#### Scenario: Font rendering
- **WHEN** any page loads
- **THEN** headings display in Erica One font and body text displays in Inter
