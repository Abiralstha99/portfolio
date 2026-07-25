# Portfolio Redesign Plan

## Context
The portfolio currently has About, Skills, and individual Project entries rendered as long blog-post-style sections (large serif heading + description + parallax image). The request is to:
1. Rebuild the Projects section as compact Piyush Garg-style cards (bold title ↗, 2-line description, monospaced URL at bottom)
2. Add Experience and Contact sections
3. Add a fixed left-side breadcrumb that highlights the active section as you scroll

The stack is React + Vite, Tailwind CSS v4, Framer Motion. No routing — pure single-page anchor scroll.

---

## Phase 1 — Add Experience & Contact data + sections

### 1a. New data file: `src/data/experience.json`
```json
[
  {
    "role": "Software Engineering Intern",
    "company": "Acme Corp",
    "period": "May 2025 – Aug 2025",
    "description": "Short 1-2 sentence summary of what you did.",
    "url": "acmecorp.com"
  }
]
```
Add real entries. `url` is the muted monospaced domain shown at card bottom (no https://).

### 1b. New component: `src/Feed/ExperienceEntry.jsx`
- `FeedEntry id="experience"`
- Section label: `font-mono text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b]` → "Experience"
- H2 heading same style as SkillsEntry heading
- Each job as a card: 1px border `border-[#e5e5e5]` rounded-lg, padding p-5
  - Top row: **role** bold left, **period** muted mono right
  - Middle: company name in muted text + description
  - Bottom: monospaced domain URL `text-[#6b6b6b]`

---

## Phase 2 — Rebuild Projects section as compact cards

**Goal:** Replace the current per-project FeedEntry (one full scroll-section per project) with a single `id="projects"` FeedEntry containing a vertical stack of compact cards.

### 2a. Restructure `Feed.jsx`
- Import a new `ProjectsEntry` (replaces the `projects.map(ProjectEntry)` pattern)
- Remove individual `id="project-{index}"` FeedEntry approach
- Section order: `<AboutEntry />` → `<SkillsEntry />` → `<ExperienceEntry />` → `<ProjectsEntry />`

### 2b. New component: `src/Feed/ProjectsEntry.jsx`
- `FeedEntry id="projects"`
- Section label (muted mono uppercase): "PROJECTS"
- Sub-label in regular text: "Some of the things I've been building."
- Maps `projects.json` into cards (no parallax, no individual FeedEntry per project)

### 2c. Card anatomy (each project)
```
┌─────────────────────────────────────────┐
│ foot-steps                            ↗ │  ← bold title left, ↗ links to liveLink or githubLink
│                                         │
│ A full-stack travel photo app that      │  ← description (2 lines, line-clamp-2)
│ turns trip photos into a timeline.      │
│                                         │
│ React · Node.js · Express · MongoDB     │  ← stack in mono muted, dot-separated
│                                         │
│ get-footsteps.vercel.app                │  ← domain stripped from liveLink or githubLink
└─────────────────────────────────────────┘
```

**Styles:**
- Outer card: `border border-[#e5e5e5] rounded-lg p-5 hover:border-[#d0d0d0] transition-colors`
- Title: `font-body font-semibold text-[17px] text-[#1a1a1a]`
- ↗ arrow: `text-[#6b6b6b] hover:text-[#a02334]`, wraps title row as anchor
- Description: `text-[15px] text-[#3a3a3a] leading-relaxed line-clamp-2 mt-2`
- Stack: `font-mono text-[12px] text-[#6b6b6b]` dot-separated, `mt-3`
- Domain URL: `font-mono text-[11px] text-[#9b9b9b] mt-3`

**URL extraction utility** (inline, 3 lines):
```js
const extractDomain = (url) => {
  try { return new URL(url).hostname.replace('www.', '') } catch { return url }
}
```
Use `liveLink` if present, else `githubLink`.

---

## Phase 3 — Side breadcrumb navigation

### 3a. New component: `src/components/SideBreadcrumb.jsx`

**Layout:** Fixed left side, vertically centered. Hidden on mobile/tablet, visible at `lg:` (≥1024px). Position: `fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40`.

**Active section tracking:** `IntersectionObserver` on `#about`, `#skills`, `#experience`, `#projects`. Section with the highest intersection ratio wins. Updates active label on scroll.

**Visual:**
```
  ▌ about        ← active: text-[#1a1a1a] + 2px left border in accent red
    skills       ← inactive: text-[#b0b0b0]
    experience
    projects
```
- Label style: `font-mono text-[11px] tracking-[0.1em] lowercase`
- Active: `text-[#1a1a1a]` + `border-l-2 border-[#a02334] pl-2`
- Inactive: `text-[#b0b0b0] pl-[calc(0.5rem+2px)]` (aligned with active state padding)
- Each item: `<a href="#sectionId">` smooth-scroll anchor
- Container: `hidden lg:flex flex-col gap-4`

### 3b. Wire into `App.jsx`
Add `<SideBreadcrumb />` as a sibling of `<ReadingProgress />` and `<Navbar />`.

---

## Phase 4 — Navbar (no changes needed)

The current Navbar shows name + social icons + Resume link — this stays as-is. The side breadcrumb handles section navigation. The `max-w-[680px]` content column stays centred; the breadcrumb sits outside it in the left gutter, so there's no visual conflict at wide viewports.

---

## File Change Summary

| File | Action |
|---|---|
| `src/data/experience.json` | **Create** — experience entries data |
| `src/Feed/ExperienceEntry.jsx` | **Create** — card-style experience section |
| `src/Feed/ProjectsEntry.jsx` | **Create** — single section with compact project cards |
| `src/Feed/ProjectEntry.jsx` | **Delete** — replaced by ProjectsEntry |
| `src/Feed/Feed.jsx` | **Update** — new imports, new section order |
| `src/components/SideBreadcrumb.jsx` | **Create** — fixed left-side active breadcrumb |
| `src/App.jsx` | **Update** — add `<SideBreadcrumb />` |

---

## Verification Checklist

1. `npm run dev` — all 5 sections render without errors
2. Scroll through page — breadcrumb active state correctly transitions: About → Skills → Experience → Projects
3. Project cards: ↗ arrow opens correct link; domain URL strips `www.` and `https://` correctly for both Vercel and GitHub URLs
4. Responsive: breadcrumb hidden below `lg:`, full layout intact on mobile
5. FeedEntry `whileInView` fade-up animations fire correctly for all new sections
6. No TypeScript errors (project is plain JSX — just confirm no import path issues)
