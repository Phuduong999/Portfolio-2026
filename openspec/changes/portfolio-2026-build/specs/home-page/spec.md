## ADDED Requirements

### Requirement: Hero section with side-by-side layout
The home page SHALL display a hero section with the user's name in large Erica One typography on the left (60%) and a ProfileCard component on the right (40%). On mobile (< 768px), the layout MUST stack vertically (text on top, card below).

#### Scenario: Desktop hero display
- **WHEN** user visits the home page on desktop
- **THEN** the name "PHU DUONG" appears in large Erica One font on the left with a subtitle, and a 3D-tilt ProfileCard with holographic effect appears on the right

#### Scenario: Mobile hero display
- **WHEN** user visits the home page on mobile
- **THEN** the hero stacks vertically with the name on top and ProfileCard below, with gyroscope tilt enabled

### Requirement: ProfileCard with personal info
The hero section SHALL include a ProfileCard component displaying the user's avatar, name, title, handle, online status, and a contact button. The card MUST support 3D tilt on desktop hover and gyroscope tilt on mobile.

#### Scenario: Contact button click
- **WHEN** user clicks the "Contact" button on the ProfileCard
- **THEN** the app navigates to the /contact page

### Requirement: Featured projects gallery
The home page SHALL display a CircularGallery component below the hero showing featured projects in a WebGL circular orbit. Users MUST be able to drag/scroll to browse projects. Each gallery item MUST display a project thumbnail and name.

#### Scenario: Gallery interaction
- **WHEN** user drags or scrolls through the CircularGallery
- **THEN** project thumbnails orbit smoothly with text labels

#### Scenario: View all projects link
- **WHEN** user sees the featured projects section
- **THEN** a "View All Projects" link is visible that navigates to /projects
