# Landing page assets — full reference

## Naming rules

All landing files use **lowercase kebab-case** (hyphens, no spaces).

```
public/images/landing/{area}/{name}.{ext}
```

| Area folder | Pattern | Example |
|-------------|---------|---------|
| `hero/` | `{subject}.{ext}` | `product-arrangement.jpg` |
| `sections/{section}/` | `{subject}.{ext}` | `sections/origin/farm-panel.jpg` |
| `categories/` | `{category-id}-hero.{ext}` | `categories/crushes-hero.jpg` |
| `graphics/` | `{name}.{ext}` | `graphics/drip-accent.svg` |

**`{category-id}`** must match `content/products/data/category.csv` (`glaze-gel`, `crushes`, `jam`, …).

**Extensions:** PNG, JPG, or SVG are all fine — the path in `assets.ts` must match your **actual filename**.

Suggested names are a guide only; you can use `{asset-id}.png` (as with your uploads) if you prefer.

---

## Where to paste each path

There are **two** config files for landing-related images:

| Image type | Drop file in | Paste path into |
|------------|--------------|-----------------|
| Homepage sections (hero, origin, founders, enquiry, …) | `public/images/landing/...` | **`src/lib/assets.ts`** → `path` on the matching **asset id** (see table below) |
| Product range hero cards (`/products` grid) | `public/images/landing/categories/` | **`content/products/data/category.csv`** → **`heroImageUrl`** column |

**Product SKU pack shots** are separate — see [`../products/README.md`](../products/README.md) and category CSVs (`skuImageUrl` / `flavorImageUrl`).

### Example — section image

1. Save file: `public/images/landing/hero/hero-product-arrangement.png`
2. Open `src/lib/assets.ts`, find `"hero-product-arrangement"`, set:
   ```ts
   path: "/images/landing/hero/hero-product-arrangement.png",
   ```

### Example — category hero

1. Save file: `public/images/landing/categories/crushes-hero.jpg`
2. Open `content/products/data/category.csv`, on the `crushes` row set `heroImageUrl`:
   ```csv
   /images/landing/categories/crushes-hero.jpg
   ```

> **Note:** Section slots still use placeholder frames on the homepage until `path` is set in `assets.ts`. Category heroes on `/products` work as soon as `category.csv` is updated.

---

## Complete asset list (sizes + paths)

### `hero/`

| Asset ID (`assets.ts`) | Suggested filename | Pixel size | Aspect | Format | Paste path into `assets.ts` |
|------------------------|-------------------|------------|--------|--------|----------------------------|
| `hero-product-arrangement` | `hero-product-arrangement.png` | **1920×1080** | 16:9 | PNG/JPG | `/images/landing/hero/hero-product-arrangement.png` |
| `hero-drip-svg` | `drip.svg` | vector | 1:1 | SVG | `/images/landing/hero/drip.svg` |

### `sections/origin/`

| Asset ID | Suggested filename | Pixel size | Aspect | Format | Paste path |
|----------|-------------------|------------|--------|--------|------------|
| `origin-goa-map` | `origin-goa-map.png` | **800×600** | 4:3 | PNG/JPG/SVG | `/images/landing/sections/origin/origin-goa-map.png` |
| `origin-farm-panel` | `origin-farm-panel.png` | **1200×1600** | 3:4 | PNG/JPG | `/images/landing/sections/origin/origin-farm-panel.png` |
| `origin-factory-panel` | `factory-panel.jpg` | **1200×1600** | 3:4 | JPG | `/images/landing/sections/origin/factory-panel.jpg` |

### `sections/problem/`

| Asset ID | Suggested filename | Pixel size | Aspect | Format | Paste path |
|----------|-------------------|------------|--------|--------|------------|
| `problem-fruit-mango` | `fruit-mango.svg` | **80×80** | 1:1 | SVG | `/images/landing/sections/problem/fruit-mango.svg` |
| `problem-fruit-cashew` | `fruit-cashew.svg` | **80×80** | 1:1 | SVG | `/images/landing/sections/problem/fruit-cashew.svg` |
| `problem-fruit-kokum` | `fruit-kokum.svg` | **80×80** | 1:1 | SVG | `/images/landing/sections/problem/fruit-kokum.svg` |

### `sections/innovation/`

| Asset ID | Suggested filename | Pixel size | Aspect | Format | Paste path |
|----------|-------------------|------------|--------|--------|------------|
| `innovation-wfc-bottle` | `wfc-bottle.jpg` | **800×1067** | 3:4 | JPG | `/images/landing/sections/innovation/wfc-bottle.jpg` |

### `sections/founders/`

| Asset ID | Suggested filename | Pixel size | Aspect | Format | Paste path |
|----------|-------------------|------------|--------|--------|------------|
| `founders-farm-panel` | `farm-panel.jpg` | **1200×1600** | 3:4 | JPG | `/images/landing/sections/founders/farm-panel.jpg` |
| `founders-lab-panel` | `lab-panel.jpg` | **1200×1600** | 3:4 | JPG | `/images/landing/sections/founders/lab-panel.jpg` |
| `founders-couple-photo` | `couple-photo.jpg` | **800×1000** | 4:5 | JPG | `/images/landing/sections/founders/couple-photo.jpg` |

### `sections/dealer/`

| Asset ID | Suggested filename | Pixel size | Aspect | Format | Paste path |
|----------|-------------------|------------|--------|--------|------------|
| `dealer-india-map` | `india-map.svg` | **800×900** | 8:9 | SVG | `/images/landing/sections/dealer/india-map.svg` |

### `sections/enquiry/`

| Asset ID | Suggested filename | Pixel size | Aspect | Format | Paste path |
|----------|-------------------|------------|--------|--------|------------|
| `enquiry-orchard-bg` | `orchard-bg.jpg` | **1920×1080** | 16:9 | JPG | `/images/landing/sections/enquiry/orchard-bg.jpg` |
| `enquiry-orchard-bg-mobile` | `orchard-bg-mobile.jpg` | **768×1024** | 3:4 | JPG | `/images/landing/sections/enquiry/orchard-bg-mobile.jpg` |

### `sections/footer/`

| Asset ID | Suggested filename | Pixel size | Aspect | Format | Paste path |
|----------|-------------------|------------|--------|--------|------------|
| `footer-drip-backdrop` | `drip-backdrop.svg` | wide decorative | 2:1 | SVG | `/images/landing/sections/footer/drip-backdrop.svg` |

### `categories/` → paste into **`category.csv`** (`heroImageUrl`)

| Category ID | Suggested filename | Pixel size | Aspect | Format | Paste path into `category.csv` |
|-------------|-------------------|------------|--------|--------|-------------------------------|
| `glaze-gel` | `glaze-gel-hero.jpg` | **1200×900** (min) | 4:3 | JPG | `/images/landing/categories/glaze-gel-hero.jpg` |
| `fruit-filling` | `fruit-filling-hero.jpg` | **1200×900** | 4:3 | JPG | `/images/landing/categories/fruit-filling-hero.jpg` |
| `crushes` | `crushes-hero.jpg` | **1200×900** | 4:3 | JPG | `/images/landing/categories/crushes-hero.jpg` |
| `syrups` | `syrups-hero.jpg` | **1200×900** | 4:3 | JPG | `/images/landing/categories/syrups-hero.jpg` |
| `fondants` | `fondants-hero.jpg` | **1200×900** | 4:3 | JPG | `/images/landing/categories/fondants-hero.jpg` |
| `jam` | `jam-hero.jpg` | **1200×900** | 4:3 | JPG | `/images/landing/categories/jam-hero.jpg` |
| `chocolate-sauce` | `chocolate-sauce-hero.jpg` | **1200×900** | 4:3 | JPG | `/images/landing/categories/chocolate-sauce-hero.jpg` |
| `flavoured-water` | `flavoured-water-hero.jpg` | **1200×900** | 4:3 | JPG | `/images/landing/categories/flavoured-water-hero.jpg` |

Category card thumbnails on `/products` use a **4:3** crop; 1200×900 or larger is safe.

---

## Quick checklist (CSV)

See **`landing-assets-checklist.csv`** in this folder — same data in spreadsheet form for tracking uploads.

## Brand logos (not under `landing/`)

| File | Location | Wired in |
|------|----------|----------|
| `furgel-logo-red-version.png` | `public/user_logo/` | `assets.ts` → `brand-logo-primary` ✓ |
| `furgel-logo-white-version.png` | `public/user_logo/` | `assets.ts` → `brand-logo-light` ✓ |
