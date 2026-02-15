# QA Test Cases (Detailed)

## Navigation & Routing
- TC-NAV-001: Open app root and verify Dashboard renders
- TC-NAV-002: Switch to Search + Map, Favorites, Messages, Admin, Profile, Settings
- TC-NAV-003: Browser back/forward preserves route rendering

## Search + Map
- TC-SRCH-001: Search input accepts text and UI remains stable
- TC-SRCH-002: Filter selects open/close and selection persists visually
- TC-SRCH-003: Map iframe loads and remains visible on mobile and desktop
- TC-SRCH-004: Results table remains readable on mobile (horizontal scroll if needed)

## Cards / Listings
- TC-LIST-001: Listing rows render with valid columns (name/type/breed/city/fee/status)
- TC-LIST-002: No overlap/clipping in table cells at 390px width

## Responsive
- TC-RWD-001: Sidebar navigation remains usable at <=700px
- TC-RWD-002: KPI cards stack correctly on mobile
- TC-RWD-003: No horizontal overflow in main layout except intentional table scroll

## UX / Professional Polish
- TC-UX-001: Visual hierarchy clear (titles, cards, panels)
- TC-UX-002: Action buttons obvious and consistent
- TC-UX-003: Color contrast acceptable in dark theme

## Accessibility Basics
- TC-A11Y-001: Inputs/selects/buttons keyboard-focusable
- TC-A11Y-002: iframe has title attribute
- TC-A11Y-003: Link targets are clear in sidebar
