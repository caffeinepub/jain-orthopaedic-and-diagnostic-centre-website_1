# Specification

## Summary
**Goal:** Fix the Footer “Quick Actions” button UI issues by removing a duplicate WhatsApp icon and properly centering the “Get Directions” button content.

**Planned changes:**
- Update the Footer “Quick Actions” “Book via WhatsApp” button to render only a single WhatsApp icon next to the label (using existing icon components only).
- Adjust the Footer “Quick Actions” “Get Directions” button layout/styles so the icon + text are horizontally centered within the full-width button across screen sizes, without changing click behavior.

**User-visible outcome:** In the footer, “Book via WhatsApp” shows one WhatsApp icon (not two), and “Get Directions” appears centered within its button on mobile and desktop while still opening Google Maps in a new tab.
