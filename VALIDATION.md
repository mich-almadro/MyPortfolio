# Validation report

Local checks completed September 29, 2026 against the static preview.

- Lighthouse 13.5.0, mobile preset: Performance 99, Accessibility 100, Best Practices 100, SEO 100.
- Axe WCAG 2 A/AA and WCAG 2.1 AA rules: zero reported violations on the landing page.
- Browser viewport widths: 320, 390, 768 and 1440 pixels; no horizontal overflow.
- All three case studies: no horizontal overflow at 390 pixels.
- One landing-page H1, image alt attributes present, local page and asset links resolve.
- No JavaScript page errors during browser checks.
- Native FAQ interaction, quote prefilling, required fields and email field validation checked.
- Optional automatic submission success and failure states tested with mocked HTTP responses only. No messages were sent. No real Formspree endpoint is configured.
- Email mode remains active: visitors review and send the draft themselves; a copyable fallback is provided.
- Four-page capabilities PDF rendered and visually inspected.

These are local lab results, not a guarantee of production scores or a complete accessibility certification. Third-party integrations, hosting conditions and later changes can affect results.

## Carousel revision checks
After the carousel revision: all five slides, previous/next boundary controls, image paths, and viewport widths 320/390/768/1440 passed. No JavaScript errors or Axe WCAG A/AA violations were reported. The Lighthouse numbers above belong to the earlier landing-page version and were not rerun for this revision.

## Image viewer revision
Desktop and 320/390/768/1440px layouts checked. Image opening, X close, Escape close, focus restoration, carousel next arrow and project-page image viewing passed. No JS errors or Axe WCAG A/AA violations on the landing page or open dialog. No external messages sent.

## September 30 cleanup revision
Gmail opens in a separate tab with the original page preserved and window.opener isolated. Draft fields and popup-blocked fallback tested using intercepted requests; no email sent. Hidden FAQ/commitments confirmed. Widths 320/390/768/1440, all local links and zero automated Axe violations passed. Removed 22 unreferenced files (~4 MB).
