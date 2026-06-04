# Product data (live CSVs)

| File | Status |
|------|--------|
| `category.csv` | All 6 categories prefilled |
| `glaze-gel.csv` | **Complete** — 14 flavours, 26 SKUs |
| `fruit-filling.csv` | Header only — fill when ready |
| `crushes.csv` | Header only |
| `syrups.csv` | Header only |
| `fondants.csv` | Header only |
| `chocolate-sauce.csv` | Header only |

## Images

See **`HOW-TO-ADD-IMAGES.md`** and copy paths from **`glaze-gel-image-checklist.csv`** into the `skuImageUrl` column after uploading photos to `public/images/products/glaze-gel/`.

## Note on site code

**`/products` and `/products/[slug]` read from these CSV files at build time.**

- **Glaze Gels** (`glaze-gel.csv`) is fully wired — featured flavours, waves, SKU grid, placeholder images when URLs are empty.
- Other category CSVs (header only) show the hero page until you add rows.

The homepage Product River still uses the older TypeScript list until we wire that next.
