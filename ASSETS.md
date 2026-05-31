# Frugel Landing Page — Asset Manifest v2

> Source copy: `copyMD/frugel-homepage-v2.md`  
> Wire media assets via `src/lib/assets.ts`  
> **Business data (contact, stats, FSSAI): `src/lib/site-config.ts`**

---

## Site Configuration (edit once → reflects everywhere)

**File:** `src/lib/site-config.ts`

| Field | Key path | Current value | Used in |
|-------|----------|---------------|---------|
| Email | `contact.email` | info.snventures@gmail.com | Enquiry sidebar, footer Connect |
| Phone | `contact.phone` | +91 88300 87472 | Enquiry sidebar, footer Connect |
| Website (display) | `contact.websiteDisplay` | www.frugel.in | Footer Connect |
| Website (URL) | `contact.websiteUrl` | https://www.frugel.in | Footer link href |
| Address | `contact.address` | Plot No. 258, Kundaim IDC… | Enquiry, footer copyright |
| FSSAI licence | `legal.fssaiLicense` | `null` → shows placeholder | Footer legal bar |
| Copyright year | `legal.copyrightYear` | 2026 | Footer copyright line |
| Bakery Partners | `network.bakeryPartners` | `null` → shows — | Dealer counter |
| Cities | `network.cities` | `null` → shows — | Dealer counter |
| States | `network.states` | `null` → shows — | Dealer counter |
| Growing label | `network.growingLabel` | Growing → | Dealer counter (4th box) |
| Instagram | `social.instagram` | # (placeholder) | Footer social icon |
| LinkedIn | `social.linkedin` | # (placeholder) | Footer social icon |

**When you have real numbers**, set e.g. `bakeryPartners: 48` — counters animate on scroll automatically.

**When you have FSSAI number**, set e.g. `fssaiLicense: "12345678901234"`.

---

## Brand

| ID | Description | Spec | Path | Status |
|----|-------------|------|------|--------|
| `brand-logo-primary` | Frugel logo (red) — light sections | PNG | `/user_logo/furgel-logo-red-version.png` | ✅ |
| `brand-logo-light` | Frugel logo (white) — dark sections | PNG | `/user_logo/furgel-logo-white-version.png` | ✅ |

## Section 01 — Hero

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `hero-product-arrangement` | 8–10 products still-life | 1920×1080 WebP | ⬜ |
| `hero-drip-svg` | Logo drip animation path | SVG | ⬜ |

## Section 02 — Product River (6 categories)

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `category-glaze-gel` | Glaze pour shot | 600×750 4:5 | ⬜ |
| `category-fruit-filling` | Spoon scoop shot | 600×750 4:5 | ⬜ |
| `category-crushes-syrups` | Bottle splash shot | 600×750 4:5 | ⬜ |
| `category-sugar-fondant` | Hands shaping fondant | 600×750 4:5 | ⬜ |
| `category-fruit-jam` | Spread on bread | 600×750 4:5 | ⬜ |
| `category-chocolate-sauce` | Drizzle on brownie | 600×750 4:5 | ⬜ |

## Section 03 — Origin / Goa

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `origin-goa-map` | Illustrated Goa map | 800×600 SVG | ⬜ |
| `origin-farm-panel` | Farm / nature panel | 1200×1600 3:4 | ⬜ |
| `origin-factory-panel` | Kundaim IDC factory | 1200×1600 3:4 | ⬜ |

## Section 04 — Problem

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `problem-fruit-mango` | Mango SVG | 80×80 | ⬜ |
| `problem-fruit-cashew` | Cashew SVG | 80×80 | ⬜ |
| `problem-fruit-kokum` | Kokum SVG | 80×80 | ⬜ |

## Section 05 — Innovation

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `innovation-wfc-bottle` | 1 Ltr WFC backlit hero | 800×1067 3:4 | ⬜ |

## Section 06 — Founders

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `founders-farm-panel` | Farm panel | 1200×1600 | ⬜ |
| `founders-lab-panel` | Lab panel | 1200×1600 | ⬜ |
| `founders-couple-photo` | Founders portrait | 800×1000 | ⬜ |

## Section 08 — Dealer Network

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `dealer-india-map` | India SVG map | 800×900 | ⬜ |

## Section 09 — Enquiry

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `enquiry-orchard-bg` | Desktop parallax bg | 1920×1080 | ⬜ |
| `enquiry-orchard-bg-mobile` | Mobile bg | 768×1024 | ⬜ |

## Section 10 — Footer

| ID | Description | Spec | Status |
|----|-------------|------|--------|
| `footer-drip-backdrop` | Oversized drip motif | SVG decorative | ⬜ |

## Design Tokens

```css
--color-dark: #1A120A
--color-cream: #FDF6EC
--color-red-drip: #D62B2B
--color-goa-sand: #E8D5B0
--color-forest: #1C2B1A
```

Fonts: **Cormorant Garamond** (display) · **Inter** (body) · **Sacramento** (soul/script)
