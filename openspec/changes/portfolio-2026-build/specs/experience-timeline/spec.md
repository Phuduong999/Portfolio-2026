## ADDED Requirements

### Requirement: Vertical timeline layout
The /experience page SHALL display work history as a vertical timeline with a center line. Each entry MUST show: company logo (or placeholder), company name, role/title, date range, and highlight bullet points.

#### Scenario: Timeline rendering
- **WHEN** user visits the /experience page
- **THEN** a vertical timeline displays with entries in chronological order (most recent first), each with company info, role, dates, and highlights

#### Scenario: Current position indicator
- **WHEN** an experience entry has no end date (endDate is null)
- **THEN** the date range displays as "Start Date — Present" with a visual indicator for current position

### Requirement: Responsive timeline
The timeline MUST be responsive. On desktop, entries MUST alternate left and right of the center line. On mobile (< 768px), all entries MUST stack on one side with the timeline line on the left.

#### Scenario: Desktop timeline layout
- **WHEN** user views the experience page on desktop
- **THEN** timeline entries alternate between left and right sides of the center line

#### Scenario: Mobile timeline layout
- **WHEN** user views the experience page on mobile
- **THEN** all entries appear on the right side with the timeline line on the left

### Requirement: Placeholder-ready entries
Each timeline entry MUST render correctly even when logo, highlights, or other optional fields are empty. The component MUST show a default placeholder for missing company logos.

#### Scenario: Missing company logo
- **WHEN** an experience entry has no logo path defined
- **THEN** a generic company placeholder icon is displayed instead
