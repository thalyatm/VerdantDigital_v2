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

**Environment Setup**:
- `GEMINI_API_KEY`: For AI content generation (service falls back to mock data if missing)
- `VITE_STRIPE_PUBLISHABLE`: Stripe publishable key (note: no `_KEY` suffix)
- `STRIPE_SECRET`: Stripe secret key for backend (note: no `_KEY` suffix)
- `STRIPE_WEBHOOK_SECRET`: For verifying Stripe webhook signatures
- `STRIPE_RECURRING_PRICE_ID`: Stripe price ID for $99/mo recurring subscription
- `RESEND_API_KEY`: For sending emails via Resend API

## Deployment

**Platform**: Vercel (not Netlify)

**API Routes**: Serverless functions in `/api/` directory (ES modules):
- `api/contact-form.js`: Handles contact form submissions, sends emails via Resend
- `api/create-checkout-session.js`: Creates Stripe checkout sessions
- `api/stripe-webhook.js`: Receives Stripe webhook events, sends payment receipts

**Important**: All API files use ES module syntax (`import`/`export`) because `package.json` has `"type": "module"`

**vercel.json Configuration**:
```json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
The catch-all rewrite ensures SPA routing works (prevents 404s on client-side routes like `/success`)

## Architecture

### Multi-View SPA Pattern

The app uses a custom state-based navigation system instead of React Router:

- **App.tsx** manages view state: `'agency' | 'tradie' | 'enquire' | 'success'`
- Navigation via `handleNavigate(targetView, hash?)` passed through Header
- Hash-based scrolling: `onNavigate('agency', 'expertise')` scrolls to `#expertise`
- View changes trigger `window.scrollTo(0, 0)` to reset scroll position
- Success view auto-detected from URL param: `?session_id=` triggers success page

**View Components**:
- Agency: MainHero, MainExpertise, MainPhilosophy, MainPortfolio, MainContact
- Tradie: Hero, Comparison, Workflow, CtaSection, Faq, MainContact
- Enquire: EnquiryPage, MainContact
- Success: SuccessPage (shown after successful Stripe payment)

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

### Stripe Payment Integration

**services/stripeService.ts**:

```typescript
createCheckoutSession(params) → Promise<checkoutUrl>
redirectToCheckout(checkoutUrl) → Promise<void>
```

- Uses `@stripe/stripe-js` for client-side Stripe integration
- **Modern API**: Uses direct URL redirect (`window.location.href`), NOT deprecated `stripe.redirectToCheckout()`
- Requires backend API endpoint at `/api/create-checkout-session`
- Supports both one-time payments ($299 setup) and recurring subscriptions ($99/mo)
- Success URL: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`
- Cancel URL: `${origin}/tradie`
- Publishable key from `VITE_STRIPE_PUBLISHABLE` env var (no `_KEY` suffix)

**Payment Flow**:
1. User completes ExpressBuildModal qualification and path selection
2. Click "Pay Now $299" triggers `createCheckoutSession()`
3. Backend creates Stripe Checkout session with metadata
4. Backend returns `{ sessionId, url }` where `url` is the checkout URL
5. Frontend redirects to Stripe Checkout via `window.location.href = checkoutUrl`
6. After payment, Stripe redirects to `/success?session_id=...`
7. App.tsx detects session_id param and shows SuccessPage

**Backend Requirements** (`api/create-checkout-session.js`):
- Vercel serverless function (ES module)
- Stripe secret key from `STRIPE_SECRET` env var
- Handles both `mode: 'payment'` and `mode: 'subscription'`
- **Must return**: `{ sessionId, url }` where `url` is `session.url` from Stripe

**Webhook Configuration**:
- Endpoint: `https://yourdomain.com/api/stripe-webhook`
- Events: `checkout.session.completed`, `invoice.payment_succeeded`
- Purpose: Sends payment receipt emails via Resend
- **Critical**: Must be created in correct Stripe account (check if multiple accounts exist)

### Data & Constants

All static content lives in **constants.tsx**:
- `PACKAGES`: 3-tier pricing structure
- `FAQS`, `TESTIMONIALS`, `BENEFITS`, `WORKFLOW`

Types defined in **types.ts** (PackageItem, FaqItem, etc.)

## Key Technical Patterns

### Modal Management

Nested modal pattern with z-index layering:

**StartProjectModal** (z-index: 100):
- Controlled by `isOpen` state in Header component
- Two path options: "Express Build (Pay Now)" or "Book Free Call"
- Express Build opens ExpressBuildModal
- Fixed positioning with backdrop blur

**ExpressBuildModal** (z-index: 200):
- Nested modal launched from StartProjectModal
- **Two-screen streamlined flow** (consolidated from 4 screens):

  **Screen 1: Build Options**
  - Select package tier (The Starter $299, The Growth $599, The Dominator $1299)
  - Displays all features for selected package
  - "Continue" button advances to Screen 2

  **Screen 2: Qualification & Payment** (consolidated)
  - Shows package features and pricing at top
  - **Non-blocking qualification checkboxes** (3 items):
    - More than 5 pages needed
    - E-commerce or booking system
    - Custom calculators/advanced features
  - If ANY checkbox selected: Shows advisory message "Your project may benefit from a custom plan"
  - **Two payment options side-by-side**:
    - **Option A**: "PAY $299 + START BUILD" - Direct Stripe payment (immediate)
    - **Option B**: "GET CUSTOM PLAN" - Shows form (name, email, phone, business, additional requirements)
  - Form submission (Option B) shows success message without payment
  - Qualification checkboxes do NOT block payment or form submission

- State management: `selectedOption`, `qualifications`, `showForm`, `formSubmitted`, `isProcessing`
- Form data from Option B sent via contact form API
- Payment data from Option A passed as metadata to Stripe checkout

**No external modal library** - Custom implementation with React state

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

## Mobile Responsiveness

**Key Mobile Patterns**:
- Mobile-first Tailwind approach: base styles for mobile, `md:` and `lg:` for desktop
- Responsive spacing: Use `gap-4` on mobile, `lg:gap-0` or larger gaps on desktop
- Responsive sizing: Smaller text/components on mobile (e.g., `text-lg md:text-xl`)
- Responsive positioning: Elements may be positioned differently on mobile vs desktop

**Mobile-Specific Adjustments**:
- **Scroll indicator** (MainHero): `left-8` on mobile, `md:left-1/2 md:-translate-x-1/2` on desktop
- **Workflow cards**: `gap-4` between cards on mobile to prevent touching
- **Hero pricing section**: Increased `gap-6` and `py-4` spacing on mobile
- **Feature bullet points**: Keep concise to avoid wrapping on mobile screens
- **Modal buttons**: Stack vertically on mobile, side-by-side on desktop

**Testing on Mobile**:
- Always test form flows, modal interactions, and spacing on actual mobile devices
- Check for elements "touching" (insufficient gap/padding)
- Verify text doesn't wrap awkwardly or extend beyond viewport

## Business Model & Key Messaging

### Tradie Offering (Express Build)
- **Timeline**: 7 days from discovery call to launch
- **Pricing**: $299 upfront setup + $99/month ongoing
- **Contract Terms**: "24 Month Agreement • Then Month-to-Month"
- **After 24 months**: Switch to month-to-month at $50/mo (hosting & security only), or take site elsewhere
- **Limited Offer Badge**: "DECEMBER INTAKE - 3 SPOTS REMAINING" (update monthly)

### Service Model & Content Accuracy ⚠️

**CRITICAL**: Verdant builds, hosts, and manages ALL website changes. Clients do NOT manage their own sites.

- **Accurate messaging**: "We build and host your site. Simply text or email us any changes (photos, text updates, new services) and we'll action them quickly—usually within 24 hours."
- **Never suggest**: Clients can manage/update their own site, use drag-and-drop editors, or have admin access
- **Change request process**: Clients text or email change requests → Verdant actions them within 24 hours
- **No self-service**: There is no client portal, CMS access, or DIY updates

**FAQ & Benefits Guidelines**:
- FAQ should emphasize "can I still work with you?" not "can I manage it?"
- Benefits title: "Quick Updates on Request" (not "Dead Simple Updates")
- Always clarify Verdant handles all technical work

### Language & Localization
- **Australian English**: Use -ise/-isation spelling (optimise, not optimize)
- **Tone**: Direct, no-fluff, tradie-focused language
- **Key phrase**: "Built for tradies who want leads, not excuses"

### Important Copy Elements
- All timeline references should be "7 days" (not 4-6 weeks)
- Workflow steps: Day 1, Day 2-5, Day 6-7
- CTA button in Hero: "GET STARTED - $299 SETUP"
- Service area updates note: "(updates SEO automatically)"
- Portfolio: "BreadBloom" (one word, not "Bread Bloom")
- Contact forms: All fields are optional (no `required` attributes)
