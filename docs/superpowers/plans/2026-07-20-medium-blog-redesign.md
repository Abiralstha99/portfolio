# Medium-Style Editorial Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-skin the existing dark "feed" portfolio into a light, Medium-blog-style editorial design, adding screenshot parallax and a left-margin reading-progress indicator.

**Architecture:** Keep the existing `App → Navbar → Feed → {AboutEntry, SkillsEntry, ProjectEntry×N}` component tree and local-JSON data flow. Swap the design-system tokens (dark→light), fonts, and per-component classes; reorder the project layout; add a mono tech-stack line; add two `framer-motion`-driven motion pieces. Remove the Material Symbols icon font in favor of Phosphor stroke icons.

**Tech Stack:** React 19, Vite 7, Tailwind CSS v4 (`@tailwindcss/vite`), `framer-motion` (motion), `@phosphor-icons/react` (new), Google Fonts (Fraunces, Inter, JetBrains Mono).

## Global Constraints

- Background `#FFFFFF`; text `#1A1A1A` (near-black, never pure black `#000`).
- Single accent = deep crimson `#A02334`, used **only** for links, hover states, and small marks (reading-progress bar, `::selection`). Never a background or button fill.
- No dark mode, no gradients, no glassmorphism/backdrop-blur, no drop shadows.
- Display font Fraunces; body font Inter; mono font JetBrains Mono — mono used for metadata/tags only.
- Single column, `max-width: 680px`, generous line-height.
- Header icons: Phosphor, uniform stroke weight — GitHub, LinkedIn, Email, Resume.
- Motion limited to: screenshot parallax (images only) + reading-progress bar. Hover = underline only, no scale/glow. Respect `prefers-reduced-motion`.
- No automated test framework exists; every task verifies manually via `npm run dev` and finishes with `npm run lint` clean.
- Coding standards (from `CLAUDE.md`): clean idiomatic code, comments only for non-obvious parts, descriptive names, easy to extend.

---

### Task 1: Fonts + light design tokens

Swap the loaded fonts and replace the dark token block with the light editorial system. This is the visual foundation every later task depends on. After this task the site will look broken-but-light (components still carry old dark hex classes) — that is expected; later tasks retune each component.

**Files:**
- Modify: `index.html` (font `<link>`s; remove Material Symbols)
- Modify: `src/index.css` (`:root` tokens, base styles, selection, scrollbar, responsive)
- Modify: `src/App.jsx` (root background), `src/Feed/Feed.jsx` (column width 720→680)

**Interfaces:**
- Produces: CSS custom properties `--color-background`, `--color-text`, `--color-text-muted`, `--color-border`, `--color-accent`; font vars `--font-display`, `--font-body`, `--font-mono`; utility classes `.font-display`, `.font-mono`. Later tasks reference these hexes directly in Tailwind arbitrary values.

- [ ] **Step 1: Replace font links in `index.html`**

Replace the two font `<link>` blocks (the Source Serif 4 + Inter link, and the entire Material Symbols link) with a single Google Fonts link for Fraunces, Inter, and JetBrains Mono. The `<head>` font section becomes:

```html
    <!-- Editorial Typography Stack -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
```

Delete the `<!-- Material Symbols ... -->` comment and its `<link>` entirely.

- [ ] **Step 2: Replace the `:root` token block in `src/index.css`**

Replace lines 1–33 (the header comment through the end of `:root`) with:

```css
/* ═══════════════════════════════════════════════════════════════
   EDITORIAL — Light Medium-Style Design System
═══════════════════════════════════════════════════════════════ */

@import "tailwindcss";

:root {
  color-scheme: light;

  /* ─── Color Palette ─── */
  --color-background: #ffffff;
  --color-text: #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-border: #e5e5e5;
  --color-accent: #a02334;

  /* ─── Typography ─── */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", monospace;

  /* ─── Spacing Scale ─── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-8: 48px;
  --space-10: 64px;
  --space-12: 96px;
  --space-16: 128px;
}
```

- [ ] **Step 3: Update base styles, selection, scrollbar in `src/index.css`**

In the `body` rule, set `font-size: 17px;` and keep `line-height: 1.75;` and `color/background` already reading the vars. Add a `.font-mono { font-family: var(--font-mono); }` next to `.font-display`. Remove the entire `.material-symbols-outlined` rule block. Retune `::selection` and the scrollbar for light:

```css
.font-display {
  font-family: var(--font-display);
}

.font-mono {
  font-family: var(--font-mono);
}

::selection {
  background: var(--color-accent);
  color: #ffffff;
}

a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease-out;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-background);
}
::-webkit-scrollbar-thumb {
  background: var(--color-border);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-muted);
}

@media (max-width: 479px) {
  body {
    font-size: 16px;
  }
}
```

- [ ] **Step 4: Update the root background in `src/App.jsx`**

Change the wrapper background so the page is white immediately (`ReadingProgress` is added to App in Task 7):

```jsx
    <div className="min-h-screen bg-white">
```

- [ ] **Step 5: Narrow the Feed column to 680px in `src/Feed/Feed.jsx`**

The spec mandates a 680px reading column; the file currently uses 720px. Change:

```jsx
    <div className="max-w-[680px] mx-auto px-6 sm:px-8">
```

- [ ] **Step 6: Verify**

Run: `npm run dev`
Expected: page background is white, base text near-black, fonts load (Fraunces/Inter/JetBrains Mono visible in DevTools Network). Existing components still show leftover dark-colored text — that's fine at this stage. No console errors about Material Symbols.

Run: `npm run lint`
Expected: no new errors.

- [ ] **Step 7: Commit**

```bash
git add index.html src/index.css src/App.jsx src/Feed/Feed.jsx
git commit -m "swap to light editorial design tokens + Fraunces/Inter/JetBrains Mono fonts"
```

---

### Task 2: Phosphor header icons (remove Material Symbols glyphs)

Replace the custom Material-Symbols GitHub/LinkedIn glyphs and Lucide Mail/FileText with a single consistent Phosphor icon set, and re-skin the Navbar (no backdrop-blur).

**Files:**
- Create: (none)
- Modify: `src/data/social.js`, `src/components/Social.jsx`, `src/components/Navbar.jsx`
- Delete: `src/components/icons.jsx`, `src/components/MaterialIcon.jsx`

**Interfaces:**
- Consumes: `--color-*` tokens from Task 1.
- Produces: `socialLinks` array unchanged in shape (`{ label, href, icon }`) but `icon` values are Phosphor components accepting `size` and `weight` props. `Navbar` and `AboutEntry` (Task 4) both consume `socialLinks`.

- [ ] **Step 1: Install Phosphor**

Run: `npm install @phosphor-icons/react`
Expected: adds `@phosphor-icons/react` to dependencies, no peer-dep errors (React 19 supported).

- [ ] **Step 2: Rewrite `src/data/social.js` to use Phosphor icons**

```jsx
import { GithubLogo, LinkedinLogo, Envelope, FileText } from '@phosphor-icons/react'
import resumePdf from '../assets/Resume_AbiralShrestha.pdf'

export const socialLinks = [
  { label: 'Email', href: 'mailto:abiralstha333@gmail.com', icon: Envelope },
  { label: 'GitHub', href: 'https://github.com/Abiralstha99', icon: GithubLogo },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abiral-shrestha-/', icon: LinkedinLogo },
  { label: 'Resume', href: resumePdf, icon: FileText },
]
```

- [ ] **Step 3: Delete the now-unused custom icon files**

Run: `git rm src/components/icons.jsx src/components/MaterialIcon.jsx`
Expected: both files removed. (They were only imported by `social.js`, now updated.)

- [ ] **Step 4: Re-skin `src/components/Social.jsx`**

Phosphor icons take `weight` (not `strokeWidth`); use `"regular"` for a uniform stroke. Light hover = muted → near-black:

```jsx
import { socialLinks } from '../data/social'

function Social() {
  const iconLinks = socialLinks.filter((link) => link.label !== 'Resume')

  return (
    <div className="flex items-center gap-4">
      {iconLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={label}
          className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-200"
        >
          <Icon size={20} weight="regular" />
        </a>
      ))}
    </div>
  )
}

export default Social
```

- [ ] **Step 5: Re-skin `src/components/Navbar.jsx` (light, no blur)**

```jsx
import { useState, useEffect } from 'react'
import Social from './Social'
import { socialLinks } from '../data/social'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const resume = socialLinks.find((link) => link.label === 'Resume')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-white border-b border-[#e5e5e5]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a
          href="#about"
          className="font-display text-lg text-[#1a1a1a] hover:text-[#a02334] transition-colors"
        >
          Abiral Shrestha
        </a>

        <div className="flex items-center gap-5">
          <Social />
          {resume && (
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#6b6b6b] hover:text-[#a02334] transition-colors duration-200"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
```

- [ ] **Step 6: Verify**

Run: `npm run dev`
Expected: header shows four consistent stroke icons (GitHub + LinkedIn as brand marks, Email envelope, Resume doc). Scrolling turns the bar solid white with a hairline bottom border — no blur. Icons hover to near-black, Resume/name hover to crimson.

Run: `npm run lint`
Expected: no unused-import errors; no references to `MaterialIcon`/`icons.jsx`.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "replace Material Symbols glyphs with Phosphor stroke icons; re-skin Navbar (no blur)"
```

---

### Task 3: Re-skin the shared FeedEntry primitive

Convert the entry wrapper to light hairline dividers, drop the pinned amber styling, and gate the fade-in on reduced-motion.

**Files:**
- Modify: `src/Feed/FeedEntry.jsx`

**Interfaces:**
- Consumes: `framer-motion` (`motion`, `useReducedMotion`).
- Produces: `FeedEntry({ id, children })` — the `pinned` prop is **removed**; callers (AboutEntry) must stop passing it.

- [ ] **Step 1: Rewrite `src/Feed/FeedEntry.jsx`**

```jsx
import { motion as Motion, useReducedMotion } from 'framer-motion'

// Shared wrapper for every feed entry: consistent vertical rhythm, a hairline
// divider between entries, and a single subtle fade/slide-up on scroll-in.
function FeedEntry({ id, children }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.article
      id={id}
      className="py-16 sm:py-20 border-b border-[#e5e5e5] last:border-b-0"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Motion.article>
  )
}

export default FeedEntry
```

- [ ] **Step 2: Verify**

Run: `npm run dev`
Expected: entries separated by a light-grey hairline; no amber left-border/tint anywhere; each entry fades/slides in once on scroll. Toggle OS "Reduce motion" and reload — entries appear immediately without animation.

Run: `npm run lint`
Expected: clean. (AboutEntry still passes `pinned` — that's fixed in Task 4; the prop is simply ignored until then, no error.)

- [ ] **Step 3: Commit**

```bash
git add src/Feed/FeedEntry.jsx
git commit -m "re-skin FeedEntry: light hairline divider, drop pinned styling, reduced-motion gate"
```

---

### Task 4: Re-skin AboutEntry (remove pinned marker)

Light editorial About entry — no "Pinned" pill, conversational bio, education, inline social links.

**Files:**
- Modify: `src/Feed/AboutEntry.jsx`

**Interfaces:**
- Consumes: `socialLinks` (Phosphor icons, Task 2); `FeedEntry` (no `pinned`, Task 3).
- Produces: nothing consumed downstream.

- [ ] **Step 1: Rewrite `src/Feed/AboutEntry.jsx`**

```jsx
import FeedEntry from './FeedEntry'
import { socialLinks } from '../data/social'

function AboutEntry() {
  return (
    <FeedEntry id="about">
      <h1 className="font-display text-4xl sm:text-5xl leading-tight text-[#1a1a1a] mb-6">
        Abiral Shrestha
      </h1>

      <p className="text-[18px] text-[#1a1a1a] leading-relaxed mb-6">
        Hi, I'm Abiral, a sophomore at Gettysburg College studying Computer Science.
        I am a dedicated Software Engineer specializing in full-stack application development.
      </p>

      <div className="space-y-5 text-[17px] text-[#3a3a3a] leading-[1.75] mb-8">
        <p>
          I started coding because I was curious, and now I can't stop building stuff.
          Some projects are useful, some are just for fun, and some teach me what not
          to do again.
        </p>
        <p>
          Most of my work is in React and TypeScript. I like the challenge of making
          things that are fast, look good, and don't break when people actually use them.
        </p>
        <p>
          Right now I'm learning backend development with NestJS and figuring out how
          to build systems that scale. Still early in the journey, but that's the fun part.
        </p>
      </div>

      <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6b6b6b] mb-2">
        Education
      </p>
      <p className="text-[17px] text-[#1a1a1a] mb-8">
        Gettysburg College — B.S. Computer Science
      </p>

      <div className="flex flex-wrap items-center gap-5">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-2 font-mono text-[13px] text-[#6b6b6b] hover:text-[#a02334] transition-colors duration-200"
          >
            <Icon size={16} weight="regular" />
            {label}
          </a>
        ))}
      </div>
    </FeedEntry>
  )
}

export default AboutEntry
```

- [ ] **Step 2: Verify**

Run: `npm run dev`
Expected: name in large Fraunces, bio in Inter at a comfortable reading size, "Education" label in mono-uppercase, four social links with Phosphor icons hovering to crimson. No "Pinned" pill or tinted background.

Run: `npm run lint`
Expected: clean.

- [ ] **Step 3: Commit**

```bash
git add src/Feed/AboutEntry.jsx
git commit -m "re-skin AboutEntry: editorial light styling, remove pinned marker"
```

---

### Task 5: Re-skin SkillsEntry (mono text tags)

Replace bordered pills with plain JetBrains Mono text tags grouped by category; logos unused.

**Files:**
- Modify: `src/Feed/SkillsEntry.jsx`

**Interfaces:**
- Consumes: `skills.json` (unchanged shape: `[{ category, skills: [{ name, logo }] }]`); `FeedEntry`.

- [ ] **Step 1: Rewrite `src/Feed/SkillsEntry.jsx`**

```jsx
import skillsData from '../data/skills.json'
import FeedEntry from './FeedEntry'

function SkillsEntry() {
  return (
    <FeedEntry id="skills">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6b6b6b] mb-4">
        Skills
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mb-8">
        Tools &amp; Technologies
      </h2>

      <div className="space-y-6">
        {skillsData.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#6b6b6b] mb-3">
              {group.category}
            </p>
            <p className="font-mono text-[13px] text-[#1a1a1a] leading-relaxed">
              {group.skills.map((skill) => skill.name).join('  ·  ')}
            </p>
          </div>
        ))}
      </div>
    </FeedEntry>
  )
}

export default SkillsEntry
```

- [ ] **Step 2: Verify**

Run: `npm run dev`
Expected: each category shows a mono-uppercase label and a single mono line of skill names separated by middots. No pill borders, no logo images, no external image requests to icons8.

Run: `npm run lint`
Expected: clean.

- [ ] **Step 3: Commit**

```bash
git add src/Feed/SkillsEntry.jsx
git commit -m "re-skin SkillsEntry as JetBrains Mono text tags, drop logos"
```

---

### Task 6: ProjectEntry — reorder layout, mono stack line, parallax screenshot

Add a `stack` field to project data, then rebuild ProjectEntry as a blog-post entry with a parallax image.

**Files:**
- Modify: `src/data/projects.json`, `src/Feed/ProjectEntry.jsx`

**Interfaces:**
- Consumes: `projects.json` objects (now with optional `stack: string[]`); `framer-motion` (`motion`, `useScroll`, `useTransform`, `useReducedMotion`); existing `projectImageMap`.
- Produces: nothing consumed downstream.

- [ ] **Step 1: Add `stack` arrays to `src/data/projects.json`**

Add a `stack` key to each object (drafted from descriptions; author edits later). Full file:

```json
[
  {
    "title": "foot-steps",
    "description": "A full-stack travel photo app that automatically turns trip photos into an interactive timeline and map-based album using EXIF metadata and AI landmark detection.",
    "image": "footsteps",
    "stack": ["React", "Node.js", "Express", "MongoDB"],
    "githubLink": "https://github.com/Abiralstha99/foot-steps",
    "liveLink": "https://get-footsteps.vercel.app/"
  },
  {
    "title": "Inhibitor",
    "description": "Chrome extension to reduce YouTube distractions – hide feed and recommendations, and set focused sessions.",
    "image": "inhibitor",
    "stack": ["JavaScript"],
    "githubLink": "https://github.com/TejaswiAmatya/Inhibitor"
  },
  {
    "title": "Grease Analysis Tool",
    "description": "Software for analyzing grease absorption based on the infrared intake and identifying potential anomalies in samples by comparing with baseline data.",
    "image": "mrg",
    "stack": ["Python", "pandas", "NumPy", "Matplotlib"],
    "githubLink": "https://github.com/anhducnguyen2006/mrg-labs-graphing-app"
  },
  {
    "title": "Cinemas",
    "description": "A web application for managing cinemas and their shows. Built with React, Node.js, Express, and PostgreSQL.",
    "image": "cinemas",
    "stack": ["React", "Node.js", "Express", "PostgreSQL"],
    "githubLink": "https://github.com/Abiralstha99/Cinemas"
  },
  {
    "title": "Hennest",
    "description": "Hennest is a financial management platform built with React, Clerk, and TailwindCSS that lets users connect bank accounts, set spending goals, and get real-time budget alerts with spending insights.",
    "image": "hennest",
    "stack": ["React", "Tailwind CSS", "Clerk"],
    "githubLink": "https://github.com/Abiralstha99/HenNest",
    "youtubeLink": "https://www.youtube.com/watch?v=54vOOQL5bcw"
  }
]
```

- [ ] **Step 2: Rewrite `src/Feed/ProjectEntry.jsx`**

Order: title → description → mono stack line → parallax screenshot → links. Parallax translates the image slightly against scroll (disabled under reduced-motion). Numbered marker removed.

```jsx
import { useRef } from 'react'
import { motion as Motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import FeedEntry from './FeedEntry'
import inhibitorImage from '../assets/projects/Inhibitor.png'
import cinemasImage from '../assets/projects/cinemas.png'
import footstepsImage from '../assets/projects/footsteps.png'
import hennestImage from '../assets/projects/hennest.png'
import huffmanImage from '../assets/projects/huffman.png'
import mrgImage from '../assets/projects/mrg.png'

// Local project images (in src/assets) – key must match the "image" value in projects.json
const projectImageMap = {
  inhibitor: inhibitorImage,
  cinemas: cinemasImage,
  footsteps: footstepsImage,
  hennest: hennestImage,
  huffman: huffmanImage,
  mrg: mrgImage,
}

const linkClass =
  'font-mono text-[12px] tracking-[0.05em] text-[#6b6b6b] hover:text-[#a02334] transition-colors duration-200'

function ProjectEntry({ project, index }) {
  const image = projectImageMap[project.image?.toLowerCase()] ?? null
  const reduceMotion = useReducedMotion()

  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  // Image drifts slightly slower than the page; no drift when reduced-motion is on.
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24])

  return (
    <FeedEntry id={`project-${index}`}>
      <h2 className="font-display text-3xl sm:text-4xl text-[#1a1a1a] mb-3">
        {project.title}
      </h2>

      <p className="text-[17px] text-[#3a3a3a] leading-[1.75] mb-4">
        {project.description}
      </p>

      {project.stack?.length > 0 && (
        <p className="font-mono text-[12px] tracking-[0.05em] text-[#6b6b6b] mb-6">
          {project.stack.join('  ·  ')}
        </p>
      )}

      {image && (
        <div ref={imageRef} className="overflow-hidden rounded-md border border-[#e5e5e5] mb-6">
          <Motion.img
            src={image}
            alt={`${project.title} preview`}
            style={{ y }}
            className="w-full block"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-6">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Live
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
        )}
        {project.youtubeLink && (
          <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
            YouTube
          </a>
        )}
      </div>
    </FeedEntry>
  )
}

export default ProjectEntry
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: each project shows Fraunces title → description → mono stack line → screenshot → mono links, in that order. No "Project 01" marker. Scrolling shows the image drifting slightly slower than surrounding text (subtle). Links hover to crimson, no `→`/scale. With OS reduce-motion on, the image sits static.

Run: `npm run lint`
Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add src/data/projects.json src/Feed/ProjectEntry.jsx
git commit -m "rebuild ProjectEntry as blog-post entry: mono stack line, parallax screenshot, no numbered marker"
```

---

### Task 7: Reading-progress indicator

A thin fixed crimson bar on the left margin that fills with scroll depth.

**Files:**
- Create: `src/components/ReadingProgress.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `framer-motion` (`motion`, `useScroll`).
- Produces: `<ReadingProgress />` — self-contained, no props.

- [ ] **Step 1: Create `src/components/ReadingProgress.jsx`**

`scaleY` on a full-height bar reflects scroll depth. A transformed element is not vestibular-triggering, so it stays under reduced-motion (per spec); `useScroll` drives it directly without an animated easing.

```jsx
import { motion as Motion, useScroll } from 'framer-motion'

// Thin left-margin bar that fills top→bottom as the page scrolls.
function ReadingProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <Motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 bottom-0 w-[2px] bg-[#a02334] origin-top z-50"
      style={{ scaleY: scrollYProgress }}
    />
  )
}

export default ReadingProgress
```

- [ ] **Step 2: Wire it into `src/App.jsx`**

```jsx
import Navbar from './components/Navbar'
import ReadingProgress from './components/ReadingProgress'
import Feed from './Feed/Feed'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Feed />
      </main>
    </div>
  )
}

export default App
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: a 2px crimson bar pinned to the far-left edge, empty at top, filling downward to full height as you scroll to the bottom. It does not intercept clicks (`aria-hidden`, thin). No layout shift.

Run: `npm run lint`
Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add src/components/ReadingProgress.jsx src/App.jsx
git commit -m "add left-margin reading-progress indicator"
```

---

### Task 8: Cleanup, dependency prune, and full verification

Remove now-dead dependencies and do an end-to-end pass.

**Files:**
- Modify: `package.json` / `package-lock.json` (via npm)

**Interfaces:**
- Consumes: everything above.

- [ ] **Step 1: Confirm Lucide is unused, then remove it**

Run: `grep -rn "lucide-react" src`
Expected: **no matches** (AboutEntry's `Pin` and social's `Mail`/`FileText` were all replaced). If there are matches, replace them with Phosphor equivalents before continuing.

Run: `npm uninstall lucide-react`
Expected: removed from `package.json` dependencies.

- [ ] **Step 2: Confirm no leftover dark hexes or Material Symbols references**

Run: `grep -rn "0a0a0a\|d4a15f\|e8e8e6\|1f1f1f\|8a8a8a\|material-symbols\|MaterialIcon" src index.html`
Expected: **no matches**. Fix any stragglers (retune to the light tokens) before committing.

- [ ] **Step 3: Build + lint**

Run: `npm run lint`
Expected: no errors, no warnings about unused vars/imports.

Run: `npm run build`
Expected: production build succeeds with no unresolved imports.

- [ ] **Step 4: Manual acceptance pass (`npm run dev`)**

Check each against the spec, at desktop and a mobile width (~375px):
- White background, near-black text, crimson only on links/hover/progress bar.
- 680px reading column, generous line-height.
- Header: name + four Phosphor icons; solid white + hairline on scroll, no blur.
- Feed order About → Skills → Projects; hairline dividers; no pinned pill; no "Project NN".
- Projects: title → description → mono stack → screenshot → links; parallax subtle.
- Reading-progress bar fills on scroll.
- All links resolve: header GitHub/LinkedIn/Email/Resume + per-project Live/GitHub/YouTube.
- OS reduce-motion on → parallax and entry fades stop; page fully usable.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "prune lucide-react; final cleanup after editorial redesign"
```

---

## Self-Review

**Spec coverage:**
- Visual direction (white/near-black/crimson, no dark/gradients/glass) → Task 1 tokens, Global Constraints, Task 8 grep check. ✓
- Typography (Fraunces/Inter/JetBrains Mono, type scale) → Task 1 (fonts) + per-component sizes in Tasks 4–6. ✓
- Layout (680px column, blog-post project order, no numbered markers, stroke icons) → Task 1/Feed width (Navbar 680 set; **Feed.jsx already 720 → see note**), Tasks 2, 6. ✓ *(see fix below)*
- Motion (parallax images only, left reading-progress bar, minimal hover, reduced-motion) → Tasks 3, 6, 7. ✓
- Content (blog/journal tone, conversational About, Skills kept, full descriptions) → Tasks 4, 5, 6. ✓

**Gap found & fixed:** `src/Feed/Feed.jsx` used `max-w-[720px]` but the spec mandates 680px — folded into Task 1 (Step 5) with the commit's `git add` list updated. Navbar set to 680 in Task 2.

**Placeholder scan:** No TBD/TODO; all code blocks complete. ✓

**Type consistency:** `socialLinks` shape `{label, href, icon}` consistent across Tasks 2/4. Phosphor icons use `weight` (not `strokeWidth`) consistently. `projectImageMap`, `stack?.length` guard consistent. `FeedEntry` `pinned` prop removed in Task 3 and no longer passed in Task 4. ✓
