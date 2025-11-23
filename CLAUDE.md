# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript marketing website for Verdant Digital agency, built as a Google AI Studio app with Gemini API integration. The site features three distinct views (agency portfolio, tradie services, enquiry form) managed through internal state-based navigation rather than traditional routing.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run preview      # Preview production build
```

**Environment Setup**: Create `.env.local` with `GEMINI_API_KEY` for AI content generation (service falls back to mock data if missing).

## Architecture

### Multi-View SPA Pattern

The app uses a custom state-based navigation system instead of React Router:

- **App.tsx** manages view state: `'agency' | 'tradie' | 'enquire'`
- Navigation via `handleNavigate(targetView, hash?)` passed through Header
- Hash-based scrolling: `onNavigate('agency', 'expertise')` scrolls to `#expertise`
- View changes trigger `window.scrollTo(0, 0)` to reset scroll position

**View Components**:
- Agency: MainHero, MainExpertise, MainPhilosophy, MainPortfolio, MainContact
- Tradie: Hero, Comparison, Workflow, CtaSection, Faq, ContentGenerator, MainContact
- Enquire: EnquiryPage, MainContact

### Scroll Animation System

Uses Intersection Observer with CSS classes for reveal-on-scroll:

```tsx
// In components: add .reveal class
<div className="reveal">...</div>

// App.tsx observes and adds .active class when in viewport
// Safety timeout forces reveal after 1s to prevent blank pages (App.tsx:48-51)
```

Classes: `.reveal`, `.reveal-delay-100`, `.reveal-delay-200`, `.reveal-delay-300`

### WebGL Background Animation

**Threads.tsx** is a custom WebGL component using the OGL library:

- Implements Perlin2D noise-based animated lines
- Custom vertex/fragment shaders for performance
- Props: `color`, `amplitude`, `distance`, `enableMouseInteraction`
- **Critical**: Proper cleanup required (RAF cancellation, event removal, WebGL context loss)
- Only used in MainHero to minimize performance impact

### Styling Architecture

**No separate CSS files** - everything is inline in `index.html`:

- Tailwind CSS loaded via CDN with custom config in `<script>` tag
- Custom animations and styles in `<style>` tag
- Brand colors defined in Tailwind config (brand-accent: #00FF9D, brand-black: #0D0D0F, etc.)

**Key Custom Animations**:
- `.animate-text-starspeed`: Text with stroke + glow effect (used in hero "ACCELERATED.")
- `.reveal` system: Fade-in-up on scroll with staggered delays

### AI Content Generation Service

**services/geminiService.ts**:

```typescript
generateTradieContent(trade, location, tone) → {headline, bio}
```

- Uses Google Gemini API via `@google/genai`
- API key injected at build time from `GEMINI_API_KEY` env var (vite.config.ts)
- **Fallback behavior**: Returns mock data if API key missing
- Used in ContentGenerator component for tradie view

### Data & Constants

All static content lives in **constants.tsx**:
- `PACKAGES`: 3-tier pricing structure
- `FAQS`, `TESTIMONIALS`, `BENEFITS`, `WORKFLOW`

Types defined in **types.ts** (PackageItem, FaqItem, etc.)

## Key Technical Patterns

### Modal Management

StartProjectModal uses a portal pattern:
- Controlled by `isOpen` state in Header component
- Fixed positioning with z-50, backdrop blur
- No external modal library

### Font Configuration

Three fonts loaded via Google Fonts (index.html):
- Inter: Body text (sans-serif)
- Montserrat: Headings (display font)
- IBM Plex Sans: Hero text ("DIGITAL ACCELERATED.")

### Build Configuration (vite.config.ts)

- Environment variable injection: `GEMINI_API_KEY` → `process.env.API_KEY`
- Path alias: `@/*` → project root
- Server: port 3000, host 0.0.0.0
- ESM module resolution with TypeScript extensions allowed

## Important Development Notes

1. **Not a standard CRA app** - Built for Google AI Studio framework
2. **No routing library** - Custom state-based navigation pattern
3. **No state management library** - Props passed from App.tsx root
4. **No CSS modules** - All styling inline in index.html
5. **React 19 features** - Uses modern hooks (useState, useEffect, useRef)
6. **TypeScript strict mode** - ES2022 target, ESNext modules

## Component Conventions

- Naming: `Main*` prefix for agency view, shorter names for tradie view
- All functional components with `React.FC` type annotation
- Shared components: Header, Footer, MainContact (reused across views)

## Performance Considerations

- WebGL animation (Threads) only on MainHero - expensive to render
- Intersection Observer properly disconnected in cleanup
- Safety timeout on scroll animations prevents blank page loads
- Gemini API calls use async/await with proper error handling
