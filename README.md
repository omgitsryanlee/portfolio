# Portfolio

A personal portfolio site built to showcase my work, experience, and a bit of who I am outside of code.

Built with React + Vite. Deployed on Vercel.

---

## What's Inside

- Animated typewriter role switcher on the intro
- Flip cards for projects and experience
- About section with stats
- Skills grouped by languages, frameworks, and tools
- Contact section with direct links
- Light/dark mode toggle
- Fully responsive

---

## Stack

- **React + Vite**
- **CSS** (no UI library — all custom)
- **JetBrains Mono** + **Inter** for typography

---

## Structure

```
src/
  components/    # One file per section (Intro, About, Skills, etc.)
  index.css      # Global variables, reset, shared utilities
  skillColors.js # Tag color mappings
public/
  resume.pdf
  *.jpg / *.jpeg # Images
```

---

## Design Decisions

- No component library — keeps the bundle small and the styling intentional
- All flip card logic is pure CSS transforms with JS only toggling a class
- Light/dark mode uses CSS variables on `[data-theme]` — one swap, everything updates
- Skills and project tags share a single color system via `skillColors.js`
