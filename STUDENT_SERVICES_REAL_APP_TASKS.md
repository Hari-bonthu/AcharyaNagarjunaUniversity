# Student Services Real-App Conversion Tasks

## Goal

- Replace template-driven student service views with real application-style pages, classified workflows and reusable institutional components.

## Immediate build order

1. Audit the existing template routes and shared content schema.
2. Identify high-traffic student tasks and group them into service tabs.
3. Build a dedicated student-services application shell with task-based tabs.
4. Convert exam, result, downloads, placements and portal flows into real components.
5. Add dedicated support-cell tabs with clear escalation guidance.
6. Rewire navbar, footer and quick links to the real student-services experience.
7. Validate responsive layout, routing and visual consistency with the rest of the ANU site.

## Full application conversion roadmap

### Phase 1 — Foundation

- Inventory every `/pages/$section?page=...` route still using the shared page-template system.
- Classify pages into:
  - real application candidates
  - content pages
  - support-cell pages
  - archive / low-priority placeholders
- Create a reusable “real page” design kit:
  - hero
  - tab navigation
  - service metrics
  - action cards
  - workflow steps
  - resource catalog
  - contact / escalation sidebar

### Phase 2 — Student Services

- Complete these tabs as first-class pages:
  - Overview
  - Exam Section
  - Exam Notifications
  - Results
  - Downloads
  - Placements
  - Alumni
  - Services
  - Anti-Ragging Cell
  - Women Grievance Cell
  - SC/ST Cell
  - Differently Abled Cell
  - Student Grievance Cell
  - Student Portal
- Replace dead template links with working internal workflow links.
- Ensure support-cell pages feel part of the same real application, not side templates.

### Phase 3 — Admissions and Academics

- Move admissions pages from generic schema rendering into dedicated workflow modules.
- Prioritize:
  - How to Apply
  - Eligibility Criteria
  - Fee Structure
  - Scholarships
  - Helpdesk
- Convert academic support pages next:
  - Academic Calendar
  - Library
  - ANUCDE
  - Regulations

### Phase 4 — Research, Programs, Campus Life, Employee Services

- Convert sections with repetitive template blocks into real modules with:
  - grouped navigation
  - stronger information architecture
  - richer cards / tables / timelines
- Build section-specific shells where needed instead of forcing everything through one shared schema.

### Phase 5 — Content governance and real data wiring

- Separate:
  - verified institutional data
  - presentation/demo content
  - future API-backed content
- Add source ownership metadata for real pages outside the template system.
- Introduce per-section data files or service adapters for future live content.

### Phase 6 — Quality and rollout

- Verify mobile and desktop behavior for every converted section.
- Check navigation consistency from top header, mega menu and footer.
- Run build and lint after each conversion batch.
- Maintain a visible migration checklist until all placeholder routes are retired.

## Review checklist

- Does the page help a student complete a task, not just read a paragraph?
- Are links actionable and not dead placeholders?
- Is the correct owning office obvious?
- Are requirements and likely next steps visible?
- Does the page match the ANU project’s existing visual language?
