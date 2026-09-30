# Michelle Almadro portfolio

Static HTML/CSS/JavaScript. Upload this folder's contents to the web root; no build step required.

## Active source
- index.html: landing page, copy, five-slide collage, tools and contact form.
- agency.css / agency.js: responsive layout, carousel and contact behavior.
- lightbox.css / lightbox.js: shared screenshot pop-out viewer.
- site-config.js: public email and optional integration configuration. Never add secret keys.
- sample-meeting.html / sample-support.html / sample-automation.html: retained detailed work samples, still accessible at their direct URLs.
- styles.css / editorial.css / dashboard.css / project-refresh.css: required shared case-study styles. They remain dependencies of the sample pages.
- assets/: referenced portrait, tool logos, full-size screenshots and optimized collage versions only.
- privacy.html / terms.html: owner-review drafts.

## Edit and preview
Edit HTML text directly. Preserve anchor IDs and meaningful image alt text. Adjust design tokens in agency.css. Run python -m http.server 8765 in this folder, then open http://127.0.0.1:8765/.

## Contact behavior
The form opens a prefilled Gmail draft in a new tab. The visitor must sign in if prompted and press Send in Gmail. The portfolio remains open with a retry link and copy-message fallback. If a browser blocks the new tab, a clear message offers the direct link. Nothing is sent automatically in the current configuration.

Main buttons say Send an email. The header/hero buttons move to the contact form; the contact-section email button opens Gmail directly in a new tab. Optional Formspree support remains available in site-config.js; no endpoint is configured. Analytics remains off.

## Hidden sections
Commitments and FAQ are intentionally retained with the hidden attribute. Remove that attribute to restore them after approving their copy. FAQ links have been removed from the navigation.

## Cleanup
Removed unreferenced dashboard JavaScript, obsolete image/logo variants and the unlinked capabilities PDF. All active screenshot assets and detailed project pages are retained. Earlier versions remain recoverable in Git history.

For shared hosting, retain this folder structure, enable HTTPS and update canonical/Open Graph/schema URLs when changing domains. Re-test contact, the carousel and image previews after edits.
