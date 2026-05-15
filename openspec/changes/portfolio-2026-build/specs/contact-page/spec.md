## ADDED Requirements

### Requirement: PrismaticBurst animated background
The /contact page SHALL display a PrismaticBurst WebGL background animation covering the full viewport. The contact content MUST overlay the animation with sufficient contrast for readability.

#### Scenario: Background rendering
- **WHEN** user visits the /contact page
- **THEN** a colorful prismatic burst animation plays in the background with contact information overlaid on top

### Requirement: Contact information display
The contact page SHALL display the user's contact information loaded from the data config. The information MUST include: email, GitHub link, LinkedIn link, and optionally phone number. Each item MUST be clickable (mailto: for email, external links for social).

#### Scenario: Contact info rendering
- **WHEN** user visits the /contact page
- **THEN** all non-empty contact fields from data/personal.ts are displayed with appropriate icons and clickable links

#### Scenario: Empty contact fields
- **WHEN** a contact field (email, github, linkedin, phone) is an empty string in the data config
- **THEN** that field is not rendered on the page

### Requirement: Contact heading
The contact page SHALL display a prominent heading (e.g., "LET'S WORK TOGETHER") in Erica One font with high contrast against the PrismaticBurst background.

#### Scenario: Heading visibility
- **WHEN** user views the contact page
- **THEN** the heading text is clearly visible and readable against the animated background
