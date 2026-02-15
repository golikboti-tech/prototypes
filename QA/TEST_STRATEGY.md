# QA Test Strategy — PetFinder Pro (Frontend Only)

## Scope
- Frontend behavior only (no backend/database assertions)
- Navigation, UI state, responsive layout, accessibility basics, and visual consistency

## Quality Bar
- Functional correctness of user flows
- No broken routes
- Mobile + desktop usability
- Clear empty/error/loading states (mocked where needed)
- Professional UX consistency

## Test Layers
1. **Smoke tests**: app boots, routes render, no console-breaking errors
2. **Feature flows**: search/map/filter/listing/details/favorites/messages/admin/profile/settings
3. **Responsive checks**: 390px, 768px, 1024px, 1440px
4. **Interaction checks**: buttons, dropdowns, filters, tables/scroll behavior
5. **UX polish checks**: spacing, typography hierarchy, affordance clarity

## Regression Policy
- Every UI update requires a smoke + route + responsive pass
- Any failure gets logged in `QA/BUG_LOG.md`
- Fix verification must reference the original bug ID
