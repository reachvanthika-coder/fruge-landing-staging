# Product catalogue CSV templates

Use these templates to maintain Frugel product data in Excel or Google Sheets, then save as CSV into `content/products/data/`.

## Files to create

| Template | Save as | Used for |
|----------|---------|----------|
| `category.template.csv` | `content/products/data/category.csv` | Homepage + `/products` index |
| `category-detail.template.csv` | `content/products/data/{category-id}.csv` | One file per range, e.g. `glaze-gel.csv` |

The `{category-id}` must match the `id` column in `category.csv` (e.g. `glaze-gel`, `fruit-filling`).

## 1. `category.csv` (master list)

| Column | Required | Example |
|--------|----------|---------|
| `id` | Yes | `glaze-gel` |
| `sortOrder` | Yes | `1` |
| `title` | Yes | `Glaze Gel` |
| `tagline` | Yes | `The finish your cakes remember.` |
| `backgroundColor` | Yes | `#F5E6D3` |
| `heroImageUrl` | No | Leave empty if no image yet |
| `sizesSummary` | No | `250gm · 1 Kg · 2.5 Kg` (short text for cards) |

Lower `sortOrder` appears first on the homepage.

## 2. `{category-id}.csv` (flavours + SKUs)

**One row = one SKU.** Repeat flavour columns on every row for that flavour.

| Column | Required | Example |
|--------|----------|---------|
| `flavorId` | Yes | `mango-glaze` |
| `flavorSortOrder` | Yes | `3` |
| `flavorName` | Yes | `Mango Glaze` |
| `flavorBackgroundColor` | Yes | `#F5E6D3` |
| `flavorTagline` | No | `1 Kg · Tropical gold` |
| `flavorDescription` | No | Longer copy for featured blocks |
| `featuredOnPage` | Yes | `true` or `false` — wave section on category page |
| `flavorImageUrl` | No | Leave empty to skip flavour hero image |
| `skuId` | Yes | `mango-glaze-1kg` |
| `skuSortOrder` | Yes | `1` |
| `sizeLabel` | Yes | `1 Kg` |
| `skuImageUrl` | No | Leave empty to skip pack shot |

### Example rows (Glaze Gel)

```csv
flavorId,flavorSortOrder,flavorName,flavorBackgroundColor,flavorTagline,flavorDescription,featuredOnPage,flavorImageUrl,skuId,skuSortOrder,sizeLabel,skuImageUrl
cashew-glaze,1,Cashew Glaze,#F0E0C8,Signature · Cashew richness,,true,,cashew-glaze-2-5kg,1,2.5 Kg,
cashew-glaze,1,Cashew Glaze,#F0E0C8,Signature · Cashew richness,,true,,cashew-glaze-1kg,2,1 Kg,
mango-glaze,3,Mango Glaze,#F5E6D3,1 Kg · Tropical gold,,true,,mango-glaze-1kg,1,1 Kg,
neutral,10,Neutral,#EBD5BD,,,false,,neutral-250g,1,250 gm,
```

## Excel tips

- Save as **CSV UTF-8** (Excel: “CSV UTF-8 (Comma delimited)”).
- Wrap text in double quotes if it contains commas.
- Leave image columns **blank** when you have no URL — the site should not render a picture.
- Use `true` / `false` for `featuredOnPage` (lowercase).

## Expected folder layout

```
content/products/
  templates/          ← these template files (do not edit for live data)
  data/
    category.csv
    glaze-gel.csv
    fruit-filling.csv
    crushes-syrups.csv
    sugar-fondant.csv
    fruit-jam.csv
    chocolate-sauce.csv
```
