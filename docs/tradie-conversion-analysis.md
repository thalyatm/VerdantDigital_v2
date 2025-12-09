# Tradie Page Conversion Analysis

**Date**: December 2024
**Ad Spend**: $163 | **Clicks**: 11 | **Conversions**: 0
**Avg CPC**: $14.85 | **CTR**: 4.15%

---

## Executive Summary

Cold traffic is being asked to commit $2,775 over 24 months after seeing a page for 10-30 seconds. That's an enormous ask without sufficient trust-building.

---

## Traffic Quality Issues

### Keyword-Intent Mismatch

| Keyword | Clicks | What They Likely Want | What They Find |
|---------|--------|----------------------|----------------|
| "tradie marketing" | 4 | Marketing services, ads, SEO | Website sales page |
| "builder website" | 3 | Builder-specific solution | Generic "tradie" page |
| "builder web design" | 3 | Builder-specific design | Generic "tradie" page |

**Problem**: "Tradie marketing" searchers want marketing help broadly, not specifically websites. They bounce when they see it's just a website offer.

**Problem**: Builders may not identify as "tradies" - that term feels more blue-collar (plumbers, sparkies). A builder might see themselves as a contractor or construction professional.

---

## First Impression Failures (0-5 seconds)

When someone lands, they see:

```
"A WEBSITE THAT HELPS YOU WIN MORE WORK"
$399 + $99/mo for 24 months
```

### What's Missing Above the Fold:

1. **Zero social proof** - No testimonials, no review stars, no "trusted by X tradies"
2. **No real examples** - No screenshots of actual tradie websites you've built
3. **No differentiation** - Every web company says "win more work"
4. **No faces** - People trust people, not brands
5. **No results** - No "average client gets 15 enquiries/month"

### What a Tradie is Thinking:

> "Another website company promising the world. I've heard this before. Where's the proof? Who else has used them? What does $99/mo actually get me? That's $2,400 over 2 years just in fees..."

---

## Pricing Psychology Problems

### The Math Visitors Do:

```
$399 setup
+ $99 × 24 months = $2,376
= $2,775 total commitment
```

### Unaddressed Comparisons:

| Alternative | Cost | Commitment |
|-------------|------|------------|
| Wix/Squarespace | $15-30/mo | Cancel anytime |
| Airtasker freelancer | $500-2000 | One-time |
| DIY WordPress | $100/yr hosting | None |
| Do nothing | $0 | None |

**You're not selling against these alternatives**. The visitor is comparing in their head, but you're not giving them reasons why your offer is worth 5-10x more.

---

## Trust Deficit Analysis

### What Builds Trust (That You're Missing):

| Element | Status | Impact |
|---------|--------|--------|
| Customer testimonials with photos | ❌ Missing in hero | Critical |
| Real portfolio examples | ❌ Only mockups shown | Critical |
| Google review widget | ❌ Not present | High |
| Case studies with results | ❌ Not present | High |
| Guarantee/risk reversal | ❌ Not present | High |
| "As seen in" logos | ❌ Not present | Medium |
| Team photos | ❌ Not on tradie page | Medium |
| Video testimonials | ❌ Not present | High |

---

## Conversion Path Friction

### Current Flow (3-5 steps):

```
1. Click "Start Your Build"
   ↓
2. Modal opens → Choose path
   ↓
3. Another modal opens → Answer questions
   ↓
4. Choose Pay Now or Fill Form
   ↓
5. Stripe checkout or form submission
```

### The Problem:

A cold visitor from paid ads has **low intent and low trust**. You're asking them to click through multiple modals before they can even see what happens next.

**Compare to Squarespace**: "Start Free Trial" → One click → Building immediately

---

## Urgency That Doesn't Work

Current urgency elements:

- **"ENDS 1 JANUARY 2026"** - That's a YEAR away. Zero urgency.
- **"6 SPOTS LEFT"** - Feels like fake scarcity (everyone uses this)

---

## Objections Not Addressed

| Objection | Current Response |
|-----------|------------------|
| "I get work through word of mouth" | Not addressed |
| "I tried a website before, didn't work" | Not addressed |
| "24 months is too long" | Mentioned but feels negative |
| "What if I don't like the design?" | Not addressed |
| "Can I cancel?" | Buried in terms |
| "Can I see examples first?" | Weak "See What's Included" link |
| "Who even are you?" | Minimal info |

---

## Recommendations

### 🔴 Critical (Do This Week)

#### 1. Add Social Proof to Hero
```
Before: Just headline + pricing
After:  Headline + "★★★★★ from 47 tradie reviews" + 2 testimonial cards with faces
```

#### 2. Add Real Portfolio Examples
Link to 3-4 actual tradie websites with:
- Screenshot
- Trade type
- Result: "12 enquiries in first month"

#### 3. Fix the Urgency
Change "ENDS 1 JANUARY 2026" to:
- "December Special - Only 3 Spots Left"
- Or remove the fake deadline entirely

#### 4. Add a Lower-Commitment CTA
Alongside "Start Your Build", add:
- **"See Our Work"** - Links to portfolio
- **"Call Jacob: 0400 XXX XXX"** - Direct line
- **"Get Free Site Review"** - Lead magnet

#### 5. Add a Guarantee
```
"Not happy after 30 days? Full refund, no questions asked."
```
This removes the fear of the 24-month commitment.

---

### 🟡 Important (Do This Month)

#### 6. Simplify Conversion Path
Option A: Put the enquiry form directly on the page (no modals)
Option B: Single modal with form, not nested modals

#### 7. Trade-Specific Landing Pages
Create:
- `/tradie/electrician` - "Websites for Electricians"
- `/tradie/plumber` - "Websites for Plumbers"
- `/tradie/builder` - "Websites for Builders"

Match Google Ads keywords to specific pages.

#### 8. Address Objections Explicitly
Add a section: "Common Questions from Tradies"
- "I get enough work through word of mouth" → "Your competitors are taking the customers who search online first..."
- "24 months seems long" → "Most clients stay 3+ years because the site pays for itself in leads..."

#### 9. Add Competitor Comparison
| | Verdant | Wix DIY | Freelancer |
|--|---------|---------|------------|
| Professional design | ✓ | You do it | Varies |
| Ongoing updates | ✓ Unlimited | You do it | Pay each time |
| SEO setup | ✓ | Basic | Varies |
| Support | ✓ Priority | Forum | None |

---

### 🟢 Nice to Have (Next Quarter)

#### 10. Video Testimonials
30-second clips of real tradies saying:
> "I was sceptical, but I got 3 jobs in the first week..."

#### 11. ROI Calculator
Interactive tool:
> "If you get just 2 extra jobs per month at $500 each, that's $12,000/year. Your website costs $1,600/year. ROI: 650%"

#### 12. Case Studies Page
Deep-dive stories:
> "How Smith's Electrical went from 0 to 47 monthly enquiries in 90 days"

---

## Analytics Events to Track

Events configured in `services/analytics.ts`:

| Event | What It Tracks |
|-------|----------------|
| `start_build_click` | CTA button clicks |
| `modal_open` | Modal views |
| `cta_click` | Path selections in modals |
| `begin_checkout` | Payment initiated |
| `form_start` | User begins filling form |
| `form_submit` | Form completed (success/fail) |

### Key Events to Mark as Conversions in GA4:
- `begin_checkout`
- `form_submit`

---

## Sample Size Note

With only 11 clicks, statistical significance is impossible. Need 100+ clicks minimum to draw meaningful conclusions. Current data suggests potential issues but isn't conclusive.
