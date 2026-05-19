# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Nandhan Rao built with React, Vite, and Tailwind CSS. The site features terminal-style aesthetics, smooth animations via Framer Motion, and showcases projects, experience, hackathon achievements, and LeetCode stats.

## Development Commands

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Tech Stack

- **React 18.2** with Vite 5.4
- **Styling**: Tailwind CSS with custom color scheme (bg: #0a0a0a, fg: #eaeaea, muted: #888888)
- **Animations**: Framer Motion for micro-interactions and page transitions
- **Icons**: lucide-react
- **Node version**: 20.x (specified in package.json engines)
- **Deployment**: Vercel (configured in vercel.json)

## Project Architecture

### Component Structure

The app follows a single-page layout pattern with sectioned components:

**Entry point**: `src/main.jsx` → `src/App.jsx`

**App.jsx** composes all sections in order:
1. Hero (terminal-style intro with GitHub preview)
2. SkillsMarquee (scrolling tech stack)
3. FeaturedProjects (live deployed projects)
4. Experience (work history)
5. ProjectScale (additional projects)
6. LeetCode (coding stats)
7. Hackathons (achievements)
8. Leadership (activities)
9. Resume (download link)
10. Contact (social links)

**Shared/Utility Components**:
- `Cursor.jsx` - Custom cursor that follows mouse
- `ScrollProgress.jsx` - Progress bar at top of page
- `QuickNav.jsx` - Floating navigation
- `Magnetic.jsx` - Wrapper that adds magnetic hover effect to children
- `AnimatedCard.jsx` - Reusable card with entrance animations
- `SectionHeader.jsx` - Consistent section titles with icons
- `LivePreview.jsx` - Embedded preview for live links
- `GitHubPreview.jsx` - Shows GitHub profile card (desktop only)

### Data Layer

Static content lives in `src/data/`:
- `projects.js` - Featured project objects with name, desc, tech, image, live URL
- `hackathons.js` - Hackathon achievements with position, image, LinkedIn/GitHub links
- `skills.js` - Array of skill strings displayed in marquee

When updating portfolio content (new projects, skills, hackathons), edit these data files instead of component code.

### Styling Patterns

- Uses Tailwind's utility classes throughout
- Custom colors defined in `tailwind.config.cjs`: `bg`, `fg`, `muted`
- Responsive breakpoints: mobile-first, then `sm:`, `md:`, `lg:`
- Common patterns:
  - Dark glass-morphism: `bg-black/70 backdrop-blur border border-white/10`
  - Muted text: `text-white/60` or `text-muted`
  - Hover states often include `transition` and opacity/transform changes

### Animation Patterns

Framer Motion is used extensively:
- **Section entrance**: `motion.div` with `initial` and `animate` props (typically `opacity: 0, y: 12` → `opacity: 1, y: 0`)
- **Staggered children**: Parent uses `staggerChildren` in variants
- **Magnetic effect**: `Magnetic` wrapper adds spring-based mouse-following translation
- **Terminal typing**: Hero uses sequential `setTimeout` to simulate command-line typing

## Asset Handling

- Profile images: `/profile.jpg` (public and dist)
- Resume PDF: `/resume.pdf` (served from dist, linked in Hero and Resume components)
- Project images: `/projects/*.png`
- Hackathon images: `/hackathons/*.jfif`
- Vite serves public/ folder as static assets; build outputs to dist/

## Deployment

Configured for Vercel:
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback routing configured in `vercel.json` (all routes → /index.html)

## Common Patterns

**Adding a new project**:
1. Add project object to `src/data/projects.js` (or create separate data file if new category)
2. Place project image in `public/projects/`
3. Component will auto-render from data

**Adding a new section**:
1. Create component in `src/components/`
2. Import and place in `src/App.jsx` in desired order
3. Use `SectionHeader` for consistent title styling
4. Wrap content in `AnimatedCard` for entrance animation

**Adjusting theme colors**:
Edit `tailwind.config.cjs` → `theme.extend.colors`
