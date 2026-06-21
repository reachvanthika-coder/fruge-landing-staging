# Frugel site images

Drop files here. Next.js serves everything under `public/` at the site root, so a file at:

`public/images/products/crushes/mango-750ml.png`

is referenced in CSVs and code as:

`/images/products/crushes/mango-750ml.png`

## Folder map

| Folder | Purpose |
|--------|---------|
| [`landing/`](./landing/) | Homepage hero, sections, category hero cards |
| [`products/`](./products/) | SKU pack shots per product range (flavour explorer) |
| `placeholder-*.svg` | Auto-shown when CSV image fields are empty |

## Brand logos (already in use)

Logos live in **`public/user_logo/`** (not under `images/`):

- `furgel-logo-red-version.png` — light backgrounds
- `furgel-logo-white-version.png` — dark backgrounds

## Product pack shots

One folder per category in [`products/`](./products/):

```
products/
  glaze-gel/          ← started (gg-*.png)
  fruit-filling/
  crushes/
  syrups/
  fondants/
  jam/
  chocolate-sauce/
  flavoured-water/
```

**Naming tip:** `{flavor-id}-{size-slug}.png`  
Examples: `mango-750ml.png`, `rose-syrup-5ltr.png`, `white-1kg.png`

After uploading, set the path in the category CSV (`skuImageUrl` or `flavorImageUrl`):

```csv
...,/images/products/crushes/mango-750ml.png
```

See also: `content/products/data/HOW-TO-ADD-IMAGES.md` and `glaze-gel-image-checklist.csv`.

## Category hero images (products index + category pages)

Optional range hero photos go in **`landing/categories/`**, then set `heroImageUrl` in `content/products/data/category.csv`:

```csv
crushes,3,Crushes,...,/images/landing/categories/crushes-hero.jpg,...
```

## Landing page section art

See **[`landing/README.md`](./landing/README.md)** — full pixel sizes, naming rules, and whether to paste paths into **`src/lib/assets.ts`** or **`category.csv`**.

Spreadsheet checklist: **`landing/landing-assets-checklist.csv`**
