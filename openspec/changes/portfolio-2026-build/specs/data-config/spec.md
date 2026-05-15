## ADDED Requirements

### Requirement: Projects data config
The system SHALL provide a TypeScript file at src/data/projects.ts exporting an array of project objects. Each project MUST have: slug (string, unique), title, shortDesc, fullDesc, thumbnail path, images array, techStack array, category, and optional liveUrl and githubUrl. A `featured` boolean MUST control whether the project appears in the home page CircularGallery.

#### Scenario: Add a new project
- **WHEN** user adds a new object to the projects array in data/projects.ts
- **THEN** the project appears on /projects and, if featured: true, in the home CircularGallery

#### Scenario: Project data validation
- **WHEN** a project entry is missing required fields (slug, title, shortDesc)
- **THEN** TypeScript compilation fails with a type error indicating the missing field

### Requirement: Experience data config
The system SHALL provide a TypeScript file at src/data/experience.ts exporting an array of experience objects. Each entry MUST have: company (string), role (string), startDate (string), endDate (string | null), and highlights (string array). Optional fields: logo (string path).

#### Scenario: Add a new experience entry
- **WHEN** user adds a new object to the experiences array
- **THEN** the entry appears on /experience in the timeline

### Requirement: Personal data config
The system SHALL provide a TypeScript file at src/data/personal.ts exporting a personal info object with: name, title, handle, avatarUrl, status, email, github, linkedin, phone. All string fields — empty string means "not yet filled in".

#### Scenario: Update personal info
- **WHEN** user changes the name field in data/personal.ts
- **THEN** the updated name appears on the home page hero and ProfileCard

### Requirement: Type definitions
The system SHALL provide TypeScript type/interface definitions in src/types/index.ts for: Project, Experience, PersonalInfo. All data files MUST be typed with these interfaces.

#### Scenario: Type safety
- **WHEN** user adds a project with an incorrect field type (e.g., featured: "yes" instead of boolean)
- **THEN** TypeScript compilation fails with a type error
