# FRUGEL — Homepage Reference Document
### Copy · Design · Animation · Developer Handoff
> **Version:** 1.0 · **Purpose:** B2B Website Homepage · **Voice:** Warm & Story-driven + Technical & Precise  
> **Primary Persona:** Bakery Owners & Pastry Chefs  
> **Desired Feeling:** *"These people really know their craft"*

---

## TABLE OF CONTENTS

1. [Brand Voice Guide](#brand-voice-guide)
2. [Section 01 — Hero](#section-01--hero)
3. [Section 02 — The Problem](#section-02--the-problem)
4. [Section 03 — Founders / About](#section-03--founders--about)
5. [Section 04 — Product Intro](#section-04--product-intro)
6. [Section 05 — Why Partner](#section-05--why-partner)
7. [Section 06 — Dealer Network](#section-06--dealer-network)
8. [Section 07 — Enquiry / CTA](#section-07--enquiry--cta)
9. [Section 08 — Footer](#section-08--footer)
10. [Global Animation Principles](#global-animation-principles)
11. [Tech Stack Notes](#tech-stack-notes)

---

## BRAND VOICE GUIDE

| Attribute | Description |
|---|---|
| **Tone** | Warm like a founder talking over chai — precise like a food technologist |
| **Never** | Salesy, generic, corporate-cold, or buzzword-heavy |
| **Always** | Grounded in craft, science, and Goa |
| **Vocabulary** | Use industry-familiar terms (Brix, shelf-life, SKU, MOQ) but explain in context |
| **Sentence length** | Mix short punchy lines with considered, slightly longer ones. Never more than 3 lines without a breath. |

### Copy Dos & Don'ts
| ✅ Do | ❌ Don't |
|---|---|
| "Crafted by food technologists" | "Premium quality guaranteed" |
| "Goa's cashew belt" | "Sourced from nature" |
| "Built for your production kitchen" | "Perfect for all uses" |
| "Since 2022" | "Years of experience" |
| Specific data points | Vague superlatives |

---

## SECTION 01 — HERO

### Layout
- **Type:** Full-viewport (`100vh`) immersive entry
- **Background:** Aerial / drone-feel video or illustrated SVG parallax landscape of Goa cashew orchards
- **Foreground layers:** Text overlay, CTA buttons, scroll indicator
- **Transition out:** Landscape morphs / dissolves into a clean kitchen/lab aesthetic as user scrolls

---

### Copy

```
EYEBROW TEXT (small caps, muted)
Goa, India  ·  Est. 2022  ·  Fruit Processing Specialists

HEADLINE (H1 — large, bold, split into two lines)
Your Next Signature Ingredient
Grows Here.

SUB-HEADLINE (H2 weight, softer)
From Goa's cashew orchards to your bakery kitchen — Frugel crafts
professionally processed fruit ingredients that give your products
a flavour story no one else can tell.

PRIMARY CTA
[ Explore Our Range ]

SECONDARY CTA
[ Request a Sample ]

SCROLL TRUST LINE (small, centered below CTAs)
Trusted by bakery dealers across Western & South India
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| Background landscape | Slow Ken Burns zoom (1.0x → 1.08x) | `gsap.to(bgEl, { scale: 1.08 })` | On load, 8s ease |
| Foreground leaves / flora | Parallax — move at 0.4x scroll speed | `ScrollTrigger` with `scrub: 1` | On scroll |
| Background hills / sky | Parallax — move at 0.15x scroll speed | `ScrollTrigger` with `scrub: 1.5` | On scroll |
| Eyebrow text | Fade up, slight opacity 0→1 | `gsap.from` with `y: 20, opacity: 0` | On load, delay 0.3s |
| Headline — "Your Next Signature Ingredient" | **Word-by-word split reveal** — each word fades + rises | `SplitText` plugin, stagger 0.08s | On load, delay 0.5s |
| Headline — "Grows Here." | Same split, colour accent on "Grows Here." | Same as above, delay 0.9s | Continuation |
| Sub-headline | Fade in as block | `opacity: 0 → 1`, `y: 15 → 0` | delay 1.2s |
| CTA Buttons | Stagger fade up | `stagger: 0.15s` | delay 1.5s |
| Scroll trust line | Subtle pulse / blink once | CSS animation | delay 2s |
| **Scene transition** | Landscape dissolves → clean white kitchen bg | `ScrollTrigger` pin + crossfade | On scroll past 80vh |

**Notes for developer:**
- Use `gsap.registerPlugin(ScrollTrigger, SplitText)` at root
- Video background should have `autoplay muted loop playsinline`
- Fallback: high-res WebP still frame of Goa cashew orchard
- Hero section should be `position: relative; overflow: hidden`

---

## SECTION 02 — THE PROBLEM

### Layout
- **Type:** Dark or deep green background — creates contrast after the bright hero
- **Structure:** Headline block → Body copy → Three animated data callout cards → Transition line
- **Width:** Constrained content column (`max-width: 860px`) centred

---

### Copy

```
SECTION EYEBROW
Why Frugel Exists

HEADLINE (H2)
India Grows the World's Best Fruit.
And Then Loses Most of It.

BODY COPY
Every year, India loses over ₹92,000 crore worth of fruits and
vegetables to post-harvest waste — not because of bad farming,
but because of the gap between farm and kitchen.

Mangoes rot on trucks. Cashews go unprocessed. Kokum never
leaves the village it grew in.

We are two food technologists from Goa who decided that
was unacceptable.

DATA CALLOUTS (3 cards — animated counters)

Card 1
~40%
of India's fruit & vegetable produce is lost post-harvest

Card 2
₹92,000 Cr
estimated annual post-harvest loss in India

Card 3
500+
varieties of fruit grown in India, most underutilised commercially

TRANSITION LINE (italic, centred)
Frugel was built to close that gap — one processed ingredient at a time.
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| Section background | Fade in as dark panel on scroll entry | `ScrollTrigger` opacity trigger | On enter viewport |
| Eyebrow text | Slide in from left | `x: -30 → 0`, `opacity: 0 → 1` | On section enter |
| Headline line 1 | Word split reveal | `SplitText`, stagger 0.06s | Staggered after eyebrow |
| Headline line 2 | Same, slight delay | Same method | +0.3s delay |
| Body paragraphs | Fade up in sequence | `ScrollTrigger` batch, `y: 20 → 0` | As user scrolls into each |
| **Fruit icons falling** | SVG fruit icons (mango, cashew, kokum) fall from top and fade out | Custom `gsap.to` with `y: -100 → 200`, `opacity: 1 → 0` | Triggered on section pin |
| **Data counter — Card 1** | Number counts up 0 → 40 with % | Custom counter function, `ScrollTrigger` | When card enters viewport |
| **Data counter — Card 2** | Number counts up to 92,000 | Same, faster | Same trigger, stagger |
| **Data counter — Card 3** | Number counts up to 500+ | Same | Same trigger, stagger |
| Data cards | Stagger slide up, subtle shadow appear | `gsap.from`, stagger 0.2s | On scroll into view |
| Transition line | Gentle fade in + italic slide | `opacity 0 → 1` | Last element in section |

**Notes for developer:**
- Counter animation: use a custom tween with `Math.ceil(progress * targetValue)` on update
- Fruit SVG assets needed: cashew nut, mango silhouette, kokum berry — illustrative style
- Consider a **pin section** here — section sticks while fruit fall animation plays, then unpins
- Dark bg colour suggestion: `#1C2B1A` (deep forest green) or `#0F1F0D`

---

## SECTION 03 — FOUNDERS / ABOUT

### Layout
- **Type:** Split horizontal scroll panel — light background
- **Left panel:** Farm visual (Goa landscape, cashew trees)
- **Right panel:** Lab / professional kitchen visual
- **Centre:** Founder content overlaid or between panels
- **Transition:** Horizontal wipe as user scrolls through

---

### Copy

```
SECTION EYEBROW
The People Behind the Products

HEADLINE (H2)
Not Just Founders.
Food Technologists First.

BODY COPY
Frugel was founded in 2022 by a couple who brought something
rare to the food business — not just passion, but years of
hands-on food industry experience and the technical language
to back it up.

We understand Brix levels, shelf-life parameters, and flavour
stability. We understand what a bakery actually needs from an
ingredient supplier — consistency, documentation, and zero
surprises on the production floor.

But we also understand Goa. We know which cashew belt produces
the sweetest nuts. We know kokum the way your grandmother
knew her spice box.

That combination — science and soil — is what goes into
every Frugel product.

CREDENTIAL TAGS (4 tags — typewriter animated)
🎓  Food Technology Graduates
🏭  Combined Industry Experience Across Food Manufacturing
🌿  Goa-Based, Farm-Connected
📦  Serving Bakery Dealers Across Western & South India
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| **Horizontal scroll transition** | Section pins; left panel slides from left, right panel from right | `ScrollTrigger` pin + `x` tween | On section pin |
| Left panel (farm image) | Parallax reveal — image scales in slightly | `scale: 1.05 → 1.0`, clipped | On scroll |
| Right panel (lab image) | Same from opposite direction | Mirror of left | Same |
| Eyebrow | Fade up | Standard fade | On enter |
| Headline | Line-by-line reveal | `SplitText` by lines | Staggered |
| Body paragraphs | Fade up sequentially | `ScrollTrigger` batch | On scroll |
| **Credential tags** | **Typewriter effect** — each tag types itself out | Custom typewriter or `SplitText` chars, stagger | Triggered individually as user scrolls past each |
| Tag icons | Pop in with scale bounce | `scale: 0 → 1.2 → 1.0` | Before text types |

**Notes for developer:**
- Typewriter effect: use `gsap.to(chars, { opacity: 1, stagger: 0.03 })` after `SplitText` on characters
- Horizontal pin requires careful `end` calculation — set `end: "+=150%"` on ScrollTrigger
- Founder photo reveal: use CSS `clip-path: inset(0 100% 0 0)` → `inset(0 0% 0 0)` for wipe effect

---

## SECTION 04 — PRODUCT INTRO

### Layout
- **Type:** Light cream / off-white background
- **Structure:** Headline → Body → 4 Category Teaser Cards (horizontal row) → CTA
- **Cards:** 3D tilt effect on hover, magnetic cursor

---

### Copy

```
SECTION EYEBROW
The Frugel Range

HEADLINE (H2)
Ingredients Your Competitors
Haven't Discovered Yet.

BODY COPY
We started with what Goa does best — cashew — and built a range
of processed ingredients that bakers have been reaching for ever since.

Cashew Crush. Choco Cashew Crush. Cashew Glaze. Each product
designed to solve a real problem in your kitchen — adding texture,
depth, and a flavour identity that sets your bakes apart from
everything else on the shelf.

And we're just getting started. Kokum. Coconut. Tropical fruits
unique to India's western coast — all being unlocked in formats
your kitchen can actually use.

CATEGORY TEASER CARDS (4 cards — staggered animate in)

Card 1
🥜  Cashew Range
Crush · Glaze · Choco Variants
[ Explore →]

Card 2
🍹  Kokum Range
Coming Soon

Card 3
🥥  Coconut Range
Coming Soon

Card 4
🌿  Tropical Specials
Seasonal & Signature

PRIMARY CTA (centred, below cards)
[ View Full Product Catalogue → ]
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| Eyebrow + Headline | Standard fade + word split | `SplitText` | On enter |
| Body copy | Fade up | `ScrollTrigger` | On scroll |
| **Product cards — entry** | **Stagger slide up** with slight bounce | `gsap.from(cards, { y: 60, opacity: 0, stagger: 0.15, ease: "back.out(1.4)" })` | On scroll into section |
| **Product cards — hover (3D tilt)** | Card rotates on mouse move (max ±15deg) | `mousemove` listener + `gsap.to` on `rotateX/Y` | On hover |
| **Magnetic cursor** | Custom cursor pulled toward card centre | Custom cursor + `gsap.to(cursor, { x, y })` | On card hover |
| Card image/icon | Scale up slightly on hover | `scale: 1 → 1.08` | On hover |
| CTA button | Liquid fill on hover | CSS `::before` wipe + `transition` or GSAP clip-path | On hover |

**Notes for developer:**
- 3D tilt: use `perspective: 1000px` on card wrapper, transform `rotateX` + `rotateY` based on mouse offset
- Magnetic cursor: calculate distance from cursor to card centre, pull cursor by 30% of that distance
- "Coming Soon" cards: slightly desaturated / lower opacity — still animate in but no hover tilt
- Card aspect ratio: `3:4` portrait recommended for product imagery

---

## SECTION 05 — WHY PARTNER

### Layout
- **Type:** White background, structured grid
- **Structure:** Headline → Sub-line → 6 reason cards (2×3 grid on desktop, 1-col on mobile)
- **Cards:** Icon + Heading + One-line description

---

### Copy

```
SECTION EYEBROW
For Bakery Professionals

HEADLINE (H2)
Made for the Way
Bakeries Actually Work.

INTRO LINE
We don't sell ingredients the way a general distributor does.
We think like bakers, because we've spent enough time in production
environments to know what actually matters when you're running
a busy kitchen.

REASON CARDS (6 cards)

Card 1 — Icon: 🔬
Food Science Backed
Every product is developed and tested by qualified food
technologists — not guesswork.

Card 2 — Icon: 📋
Consistent & Documented
Shelf life, allergen info, technical specs — everything a
serious buyer needs is ready.

Card 3 — Icon: 📦
Bakery-Ready Formats
Available in sizes and volumes designed for professional
kitchen use and bulk ordering.

Card 4 — Icon: 🌿
Genuine Goan Origin
Our cashews come from local Goan farms. The provenance
is real, and it shows in the flavour.

Card 5 — Icon: 🤝
Dealer-Friendly Network
Strong distribution relationships across Western and South
India — getting product to you isn't an afterthought.

Card 6 — Icon: 💡
New Formats, Always
An active innovation pipeline means your range can grow
with ours — first-mover advantage for your bakery.
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| Eyebrow + Headline | Word split fade | `SplitText` | On enter |
| Intro line | Fade up | Standard | On scroll |
| **Reason cards** | **Stagger cascade** — cards appear row by row | `gsap.from(cards, { y: 40, opacity: 0, stagger: { amount: 0.8, grid: [2,3], from: "start" } })` | On scroll |
| Card icon | Bounce in before card text loads | `scale: 0 → 1.3 → 1.0`, ease bounce | Before stagger |
| Card hover | Subtle lift + border accent | `y: -6`, box-shadow expand | On hover |

---

## SECTION 06 — DEALER NETWORK

### Layout
- **Type:** Light warm background (cream or warm grey)
- **Structure:** Headline → Body copy → **Animated India Map** → Callout points → Dual CTA
- **Map:** SVG India map with animated dot markers and draw-on lines

---

### Copy

```
SECTION EYEBROW
Our Reach

HEADLINE (H2)
From Goa's Farms to
Your Production Kitchen.

BODY COPY
Since 2022, we have built a trusted network of bakery ingredient
dealers across Western and South India — and we're growing steadily.

Whether you're sourcing through a regional dealer or looking to
partner directly, Frugel has the distribution infrastructure to
ensure consistent supply and reliable lead times.

MAP CALLOUT MARKERS
📍  Headquartered in Goa
📦  Active Dealer Network — Western India (Maharashtra, Gujarat)
📦  Active Dealer Network — South India (Karnataka, Kerala, Tamil Nadu)
🚀  Expanding — Pan India

COUNTER ROW (below map)
[X] Bakery Partners     [X] Cities     [X] States     Growing →

DUAL CTA
[ Find a Dealer Near You ]     [ Become a Distribution Partner ]
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| Eyebrow + Headline | Standard fade | `SplitText` | On enter |
| Body copy | Fade up | `ScrollTrigger` | On scroll |
| **India Map SVG** | Map fades in first, then paths draw themselves | `opacity: 0 → 1`, then `stroke-dashoffset` animation | On scroll pin |
| **Map — Goa pin** | First dot appears with pulse ring | Scale in + CSS `@keyframes` ripple | After map draws |
| **Map — dealer lines** | Lines draw outward from Goa to region clusters | `stroke-dashoffset: 100% → 0%` with GSAP | Staggered after Goa pin |
| **Map — region dots** | Dots appear at line endpoints with pulse | Same pulse as Goa | After each line completes |
| Counter row | Numbers count up | Custom counter + `ScrollTrigger` | On map animation complete |
| CTA buttons | Stagger fade up | Standard | After counters |

**Notes for developer:**
- SVG India map: use a clean simplified path — source from natural earth or d3-geo
- Goa pin pulse: `@keyframes ripple { 0% { transform: scale(1); opacity: 0.8 } 100% { transform: scale(2.5); opacity: 0 } }`
- Line draw: set `stroke-dasharray` equal to path length (`getTotalLength()`), animate `stroke-dashoffset`
- Region clusters: Western India centroid ~(73.8, 20.5), South India centroid ~(77.5, 12.5)
- Map section should **pin for the full animation sequence** before unpinning

---

## SECTION 07 — ENQUIRY / CTA

### Layout
- **Type:** Full-width section, dark or brand-accent background
- **Background:** Slow parallax zoom into cashew orchard (video or image)
- **Overlay:** Semi-transparent dark layer over background
- **Structure:** Headline → Body → Form (left) + Contact details (right)

---

### Copy

```
SECTION EYEBROW
Work With Us

HEADLINE (H2)
Let's Put Something
Exceptional in Your Kitchen.

BODY COPY
Whether you're a bakery owner looking for a new signature ingredient,
a distributor exploring new lines, or a food manufacturer sourcing at
scale — we'd love to talk.

Drop us your details and tell us what you're working on.
Our team responds within 24 hours.

FORM FIELDS
• Your Name
• Business Name & Type
• City / Region
• Products You're Interested In  [dropdown or multi-select]
• Message  (Tell us about your kitchen or business)

SUBMIT CTA
[ Send Your Enquiry ]

TRUST LINE (below button, small italic)
No sales pressure. Just a conversation between food professionals.

CONTACT SIDEBAR
📧  hello@frugel.in  [placeholder]
📞  +91 XXXXX XXXXX  [placeholder]
📍  Goa, India
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| **Background** | Slow parallax zoom in (1.0 → 1.06) as section scrolls | `ScrollTrigger` scrub on `scale` | On scroll |
| Eyebrow + Headline | **Split text reveal** with large dramatic sizing | `SplitText` words, stagger 0.1s | On enter |
| Body copy | Fade up | Standard | After headline |
| Form fields | Stagger slide in from left | `x: -30 → 0, opacity: 0 → 1`, stagger 0.1s | On enter |
| Submit button | **Liquid fill hover** — colour sweeps left to right | CSS `::before` clip-path or GSAP | On hover |
| Trust line | Gentle fade in last | `opacity: 0 → 1` | After button |

---

## SECTION 08 — FOOTER

### Layout
- **Type:** Dark footer (matches Problem section tone for bookend consistency)
- **Structure:** Large tagline → 4-column grid (About, Products, Partners, Contact) → Legal bar

---

### Copy

```
FOOTER TAGLINE (large, display text)
Good ingredients don't happen by accident.

ABOUT COLUMN
Frugel is a Goa-based fruit processing company founded by food
technologists committed to reducing India's post-harvest losses —
one exceptional ingredient at a time.

NAV COLUMNS
Products          Partners           Connect
───────           ────────           ───────
Cashew Range      Become a Dealer    hello@frugel.in
Kokum Range       Find a Dealer      +91 XXXXX XXXXX
Coconut Range     Sample Request     Instagram
Tropical Range    Bulk Enquiry       LinkedIn

LEGAL BAR
© 2024 Frugel Foods Pvt. Ltd.  ·  Goa, India  ·  All Rights Reserved
FSSAI Licence No: XXXXXXXXXX  [placeholder]
```

---

### Animation Spec

| Element | Animation | GSAP Method | Timing |
|---|---|---|---|
| **Footer tagline** | Large split text reveal as footer enters viewport | `SplitText` words, slow stagger | On enter |
| Footer columns | Stagger fade up | `gsap.from`, stagger 0.1s per column | On enter |
| Social icons | Scale in with bounce | `scale: 0 → 1`, ease back | Delayed |

---

## GLOBAL ANIMATION PRINCIPLES

### Performance Rules
- All GSAP ScrollTriggers use `scrub: 1` (smooth) or `scrub: 1.5` (smoother) — never boolean `true` (janky)
- Use `will-change: transform` on elements that animate continuously
- Batch DOM-heavy animations using `ScrollTrigger.batch()`
- Prefer `transform` and `opacity` over layout-affecting properties (no animating `width`, `height`, `margin`)
- Kill ScrollTrigger instances on component unmount (React: `useEffect` cleanup)

### Easing Reference
| Use Case | Easing |
|---|---|
| Cards entering | `power2.out` |
| Bounce / playful | `back.out(1.4)` |
| Smooth scrub | `none` (scrub handles it) |
| Dramatic reveal | `expo.out` |
| Subtle hover | `power1.inOut` |

### Scroll Behaviour
```
Section 01 — Hero       : Pin for 20% scroll, then release
Section 02 — Problem    : Pin for fruit-fall animation (~40% scroll)
Section 03 — Founders   : Horizontal pin (~150% scroll length)
Section 04 — Products   : Normal scroll, stagger triggers
Section 05 — Why Partner: Normal scroll, stagger triggers
Section 06 — Network    : Pin for map animation (~80% scroll)
Section 07 — Enquiry    : Normal scroll
Section 08 — Footer     : Normal scroll
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all GSAP animations */
  /* Show final states immediately */
  /* Keep hover states as CSS only */
}
```
Use `gsap.matchMedia()` to conditionally register animations.

---

## TECH STACK NOTES

### Recommended Stack
```
Framework       : React (Next.js 14+ recommended for SSR/SEO)
Animation       : GSAP 3 + ScrollTrigger + SplitText plugins
Styling         : Tailwind CSS + custom CSS vars for brand tokens
Video           : HTML5 video (WebM + MP4 fallback) or Cloudinary hosted
SVG Map         : D3.js or hand-crafted SVG paths
Form            : React Hook Form + email via Resend or EmailJS
Fonts           : Google Fonts or self-hosted (suggest: Playfair Display + Inter)
```

### Brand Tokens (suggested)
```css
:root {
  --color-goa-green    : #1C2B1A;   /* Dark forest — hero bg, footer */
  --color-cashew-cream : #F5EDD6;   /* Warm off-white — product bg */
  --color-terracotta   : #C4622D;   /* Accent — CTAs, highlights */
  --color-leaf         : #4A7C59;   /* Mid green — tags, borders */
  --color-white        : #FAFAF8;   /* Soft white — body bg */
  --color-text-dark    : #1A1A1A;   /* Body text */
  --color-text-muted   : #6B6B6B;   /* Eyebrows, captions */

  --font-display : 'Playfair Display', serif;   /* Headlines */
  --font-body    : 'Inter', sans-serif;          /* Body, UI */

  --radius-card  : 12px;
  --shadow-card  : 0 4px 24px rgba(0,0,0,0.08);
}
```

### GSAP Plugin Registration
```javascript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)
```

### Key File Structure
```
/components
  /sections
    HeroSection.jsx
    ProblemSection.jsx
    FoundersSection.jsx
    ProductIntroSection.jsx
    WhyPartnerSection.jsx
    DealerNetworkSection.jsx
    EnquirySection.jsx
    Footer.jsx
  /animations
    useScrollReveal.js      ← Reusable ScrollTrigger hook
    useCounterAnimation.js  ← Data counter hook
    useMapAnimation.js      ← SVG map draw animation
    useSplitText.js         ← SplitText wrapper hook
  /ui
    Button.jsx
    Card.jsx
    SectionEyebrow.jsx
    AnimatedCounter.jsx
```

---

## SECTION SEQUENCE SUMMARY

| # | Section | Background | Key Animation | Copy Hook |
|---|---|---|---|---|
| 01 | Hero | Goa orchard video | Word split + parallax morph | "Your Next Signature Ingredient Grows Here." |
| 02 | The Problem | Deep forest green | Fruit fall + counters | "India Grows the World's Best Fruit. And Then Loses Most of It." |
| 03 | Founders | Split farm / lab | Horizontal pin + typewriter | "Not Just Founders. Food Technologists First." |
| 04 | Product Intro | Cashew cream | 3D tilt cards + magnetic cursor | "Ingredients Your Competitors Haven't Discovered Yet." |
| 05 | Why Partner | White | Stagger grid cascade | "Made for the Way Bakeries Actually Work." |
| 06 | Dealer Network | Warm grey | India map draw + counters | "From Goa's Farms to Your Production Kitchen." |
| 07 | Enquiry | Dark + orchard bg | Liquid fill CTA + form stagger | "Let's Put Something Exceptional in Your Kitchen." |
| 08 | Footer | Dark forest | Tagline split reveal | "Good ingredients don't happen by accident." |

---

*Document prepared for Frugel Foods · Homepage B2B Website Reference · v1.0*  
*Next: Product Catalogue Page Reference → Category copy · Flavour naming · SKU architecture*
