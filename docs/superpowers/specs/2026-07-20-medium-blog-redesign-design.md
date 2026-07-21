# Medium-Style Editorial Portfolio Redesign

## Context

The site currently uses a **dark** minimal "feed" design system (near-black `#0a0a0a` background, off-white text, warm amber accent `#d4a15f`, Source Serif 4 + Inter). Its architecture is sound: `App → Navbar → Feed → {AboutEntry, SkillsEntry, ProjectEntry×N}`, with content from static `projects.json` / `skills.json` / `social.js`. The dark theme reads as generic/"AI-generated."

This redesign re-skins that architecture into a **light, Medium-blog-style editorial** aesthetic. It is a re-skin plus two new motion features and small content/layout changes — **not** a rebuild. Component boundaries, the single-page model, and the local-JSON data flow are unchanged.

## Goals

- Replace the dark design system with a light editorial one: white background, near-black text, a single restrained crimson accent.
- Adopt an editorial type system: Fraunces (display) + Inter (body) + JetBrains Mono (metadata/tags only).
- Make the page read like a personal blog/journal, not a marketing landing page.
- Reorder and restyle project entries as blog-post entries; add a mono tech-stack line.
- Add subtle, tasteful motion: screenshot parallax + a left-margin reading-progress indicator. Nothing else.
- Replace the current inconsistent header glyphs with consistent stroke icons.

## Non-Goals

- No dark mode / theme toggle (light only).
- No gradients, no glassmorphism/backdrop-blur, no drop shadows.
- No new routes or per-project detail pages (single page).
- No new content types (no written blog posts); About, Skills, Projects only.
- No data-fetching; all content stays local static JSON.
- No compression of project descriptions — existing full descriptions are kept as-is.

## Architecture

Unchanged component tree:

```
App.jsx
 ├─ ReadingProgress.jsx   (NEW — thin fixed left-margin scroll indicator)
 ├─ Navbar.jsx            (re-skinned; Phosphor icons; no backdrop-blur)
 └─ Feed.jsx              (max-width 680px column)
     ├─ AboutEntry.jsx    (no "pinned" marker/tint; conversational bio)
     ├─ SkillsEntry.jsx   (mono text tags, no logos)
     └─ ProjectEntry.jsx × N  (reordered layout + mono stack line + parallax image)
     └─ FeedEntry.jsx     (shared layout primitive; hairline divider, subtle fade-in)
```

Removed: `src/components/MaterialIcon.jsx`, `src/components/icons.jsx` (custom Material-Symbols GitHub/LinkedIn glyphs), and the Material Symbols `<link>` + `.material-symbols-outlined` CSS.

Added dependency: `@phosphor-icons/react`.

## Design System (`src/index.css` tokens)

Replaces the current dark token block.

- **Color:**
  - `--color-background: #FFFFFF`
  - `--color-text: #1A1A1A` (near-black, not pure black)
  - `--color-text-muted: #6B6B6B` (metadata, labels, secondary body)
  - `--color-border: #E5E5E5` (hairline rules)
  - `--color-accent: #A02334` (deep crimson) — used **only** for links, hover states, and small marks (reading-progress bar, `::selection`). Never a background or button fill.
  - Remove `color-scheme: dark`; set light. Retune scrollbar and `::selection` to light theme.
- **Typography:**
  - `--font-display: "Fraunces", Georgia, serif`
  - `--font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif`
  - `--font-mono: "JetBrains Mono", ui-monospace, monospace`
- **Type scale** (editorial, not cramped; final px tuned in implementation):
  - Name (About h1): ~44–52px Fraunces
  - Project title (h2): ~30–34px Fraunces
  - Body: 17–18px Inter, line-height ~1.75
  - Section/eyebrow labels: ~12–13px JetBrains Mono, uppercase, letter-spaced, muted
  - Stack line & tags: ~13px JetBrains Mono
- **Fonts loaded** via Google Fonts `<link>` in `index.html` (Fraunces, Inter, JetBrains Mono). Material Symbols link removed.
- **Column width:** 680px max, centered, comfortable horizontal padding on small screens.

## Header / Navbar

- Slim sticky bar, width matched to the 680px content column.
- Left: name in Fraunces (links to `#about`).
- Right: four **Phosphor** stroke icons at a uniform weight — `GithubLogo`, `LinkedinLogo`, `Envelope` (Email), `FileText` (Resume). Each is an `aria-label`ed link; Email is `mailto:`, others open in a new tab, Resume points to the local PDF.
- On scroll: solid white background with a bottom hairline (`--color-border`). **No backdrop-blur.**
- Hover: icon color shifts to crimson (or near-black → crimson); no scale.
- `social.js` keeps the same four entries but swaps icon components to Phosphor; `Social.jsx` and `AboutEntry` consume the same `socialLinks` source.

## Feed Layout & Entries

- **Feed.jsx:** single column, `max-width: 680px`, centered, generous vertical rhythm. Order fixed: About → Skills → Projects (existing `projects.json` order).
- **FeedEntry.jsx:** shared wrapper. Bottom **hairline divider** between entries (`border-b`, `--color-border`, none on last). Remove the `pinned` prop's amber left-border/tint styling. Keep a single **subtle** fade/slide-up on scroll-into-view via `framer-motion` `whileInView` (gated by reduced-motion).
- **AboutEntry.jsx:** remove the "Pinned" pill + pin icon + left accent bar + background tint. Keep conversational bio paragraphs, the Education line, and inline social links (crimson hover, underline).
- **SkillsEntry.jsx:** category labels in mono-uppercase; each skill rendered as **plain JetBrains Mono text** (no pill borders, no logo images). Logos in `skills.json` go unused.
- **ProjectEntry.jsx** — reordered to blog-post shape, numbered `Project 01` marker **removed**:
  1. Fraunces title (h2)
  2. Full description paragraph (unchanged copy)
  3. Mono **stack line**, e.g. `React · Node.js · PostgreSQL`
  4. Screenshot (parallax; local image via existing `projectImageMap`)
  5. Links row: Live / GitHub / YouTube — rendered only when present; underline-on-hover in crimson, no `→`-glow/scale effects.

## Motion

Implemented with `framer-motion` (already installed).

- **ReadingProgress.jsx:** a fixed, thin (~2px) vertical bar pinned to the left margin, filling top→bottom with `useScroll().scrollYProgress`, colored `--color-accent`. Sits behind/aside content; does not intercept clicks.
- **Screenshot parallax:** each `ProjectEntry` image translates on the Y axis slightly slower than the page (small offset via `useScroll` on the image's container + `useTransform`). Images only — no parallax on text or other elements.
- **Hover states:** underline on links; icon → crimson. No scale, glow, or shadow transitions.
- **`prefers-reduced-motion: reduce`:** disables screenshot parallax and entry fade-ins (content renders static). The reading-progress bar is non-vestibular and may remain, but its fill updates without animated easing.

## Content / Data Changes

- **`projects.json`:** add a `stack: [string]` array to each project. Values are drawn from the canonical names in `skills.json` (e.g. "React", "Node.js", "PostgreSQL", "MongoDB", "TypeScript"). Initial values drafted from each project's description; the author reviews/corrects. Existing fields (`title`, `description`, `image`, `githubLink`, `liveLink`, `youtubeLink`) unchanged.
- **`skills.json`:** structure unchanged; `logo` fields become unused by the new mono-tag rendering (left in place, not stripped).
- **`social.js`:** icon references change from Lucide/Material to Phosphor components; hrefs/labels unchanged.

Drafted initial `stack` values (author to confirm):
- foot-steps: `["React", "Node.js", "Express", "MongoDB"]`
- Inhibitor: `["JavaScript"]`
- Grease Analysis Tool: `["Python", "pandas", "NumPy", "Matplotlib"]`
- Cinemas: `["React", "Node.js", "Express", "PostgreSQL"]`
- Hennest: `["React", "Tailwind CSS"]`

(Note: "Python" is not currently a top-level entry in `skills.json` — the Tools section lists pandas/NumPy/Matplotlib under Python. Add "Python" to the stack vocabulary as needed; author confirms per-project accuracy.)

## Error Handling & Edge Cases

- Missing/broken project image → entry renders text-only (no placeholder box), consistent with the existing `projectImageMap` null fallback.
- Optional project links rendered only when present (existing behavior).
- Empty/missing `stack` → the mono stack line is omitted for that project.
- Reduced-motion → parallax/fade disabled as above.
- No network fetches, so no loading/error states beyond the image fallback.

## Testing / Verification

- No automated test suite exists; verification is manual, consistent with prior redesign commits.
- `npm run dev`: check the feed at mobile and desktop widths; confirm 680px column, editorial type scale, crimson used only on links/marks, white background.
- Confirm no backdrop-blur on the navbar, no gradients/shadows anywhere.
- Verify all links resolve: four header icons (GitHub, LinkedIn, Email, Resume) and per-project Live/GitHub/YouTube.
- Verify the reading-progress bar fills correctly and screenshot parallax is subtle; toggle OS reduced-motion and confirm parallax/fades stop.
- `npm run lint`: catch dead imports — especially leftover Material Symbols / `MaterialIcon` / `icons.jsx` references and unused variables.

## Open Items Resolved During Design

- Icons: **Phosphor** (`@phosphor-icons/react`) — Lucide lacks GitHub/LinkedIn brand marks.
- Between-entry treatment: **hairline dividers** (not pure whitespace).
- Project copy: **kept full**, no one-line "dek" compression.
- Skills: **kept as its own entry**, restyled to mono text tags.
- Fonts: **Fraunces + Inter + JetBrains Mono**.

## Open Items For Implementation

- Exact px values across the type scale (tuned visually against Fraunces/Inter rendering).
- Final crimson hover treatment for header icons (near-black→crimson vs muted→crimson).
- Whether to strip unused `logo` keys from `skills.json` (cosmetic; default: leave them).
