# Product pack shots

One subfolder per range. The flavour explorer reads image paths from CSV files in `content/products/data/`.

## Folders

| Folder | CSV file |
|--------|----------|
| `glaze-gel/` | `glaze-gel.csv` |
| `fruit-filling/` | `fruit-filling.csv` |
| `crushes/` | `crushes.csv` |
| `syrups/` | `syrups.csv` |
| `fondants/` | `fondants.csv` |
| `jam/` | `jam.csv` |
| `chocolate-sauce/` | `chocolate-sauce.csv` |
| `flavoured-water/` | `flavoured-water.csv` |

## Naming

Use the flavour **`flavorId`** from CSV + size slug (lowercase, hyphens):

```
{flavor-id}-{size-slug}.{png|jpg}
```

**Size slug examples** (match CSV `sizeLabel`):

| CSV size | Slug in filename |
|----------|------------------|
| 200 gm | `200gm` |
| 250 gm | `250gm` |
| 300 gm | `300gm` |
| 300 ml | `300ml` |
| 500 ml | `500ml` |
| 750 ml | `750ml` |
| 1 Kg | `1kg` |
| 1 Ltr | `1ltr` |
| 2.5 Kg | `2-5kg` or `2.5kg` |
| 4 Kg | `4kg` |
| 5 Ltr | `5ltr` |

**Examples:**

- `mango-750ml.png`
- `rose-syrup-5ltr.png`
- `white-200gm.png`
- `chocolate-flavoured-sauce-1ltr.png`

Glaze Gel also uses a `gg-` prefix (e.g. `gg-mango-2.5.png`) — keep filename and CSV path in sync.

## Recommended image size (pack shots)

| Use | Size | Format |
|-----|------|--------|
| Flavour explorer preview | **800–1200 px tall**, transparent background | PNG |
| Small SKU row (legacy layout) | **400–600 px tall** | PNG |

Aspect is roughly **3:4 portrait** (bottle/jar). Export at 2× if unsure (e.g. 1000×1300).

## Where to paste the path

Open the category CSV → set **`skuImageUrl`** (per size row) and optionally **`flavorImageUrl`** (fallback for that flavour):

```csv
...,/images/products/crushes/mango-750ml.png
```

| Column | When to use |
|--------|-------------|
| `skuImageUrl` | Specific pack size image (preferred) |
| `flavorImageUrl` | Shared image when all sizes look the same |

Empty fields show a **placeholder** on the site until the path is filled in.

## Full filename list (Glaze Gel)

See `content/products/data/glaze-gel-image-checklist.csv` — columns `suggestedFilename` and `pasteInto_skuImageUrl`.

Other categories: use `{flavorId}-{size-slug}` for every row in that category’s CSV (one file per SKU).
