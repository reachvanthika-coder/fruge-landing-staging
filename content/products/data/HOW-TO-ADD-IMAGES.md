# How to add SKU images (Excel + website)

CSV files **cannot store photos inside cells**. You only store a **text link** (URL or file path). The website reads that text and loads the image.

## Recommended workflow (easiest)

### Step 1 — Save photos on your computer

Use this folder in the project:

```
public/images/products/glaze-gel/
```

Name each file **exactly** like the `skuId` column + `.jpg` (or `.webp`):

| skuId | Save file as |
|-------|----------------|
| `shahi-dry-fruit-1kg` | `shahi-dry-fruit-1kg.jpg` |
| `shahi-dry-fruit-2-5kg` | `shahi-dry-fruit-2-5kg.jpg` |
| `cashew-glaze-1kg` | `cashew-glaze-1kg.jpg` |
| … | … |

Full list for Glaze Gels is in `glaze-gel-image-checklist.csv` (same folder).

### Step 2 — Paste path into Excel

Open `glaze-gel.csv` in Excel. In the **`skuImageUrl`** column, paste:

```
/images/products/glaze-gel/shahi-dry-fruit-1kg.jpg
```

Rules:
- Starts with `/images/...` (site path, not `C:\Users\...`)
- **One path per row** (one row = one pack size)
- Leave cell **empty** until the file exists in `public/` — empty = no image on site

### Step 3 — Save as CSV UTF-8

Excel → **Save As** → **CSV UTF-8 (Comma delimited)** → overwrite `content/products/data/glaze-gel.csv`.

---

## Optional: flavour hero image

Column **`flavorImageUrl`** = one image for the whole flavour (optional).

Example (same flavour on every row for that flavour):

```
/images/products/glaze-gel/cashew-glaze-hero.jpg
```

Usually leave blank and use **SKU pack shots** only.

---

## Optional: category hero (homepage)

In `category.csv`, column **`heroImageUrl`**:

```
/images/products/glaze-gel/category-hero.jpg
```

File location: `public/images/products/glaze-gel/category-hero.jpg`

---

## Using Google Drive / Dropbox / CDN

You can paste a **full https URL** instead:

```
https://your-cdn.com/frugel/shahi-dry-fruit-1kg.jpg
```

Must be a **direct link** to the image file (opens as image in browser), not a sharing page.

---

## What NOT to do

- Don’t insert pictures inside Excel cells for export — they won’t appear in CSV.
- Don’t use Windows paths like `H:\photos\mango.jpg`.
- Don’t leave a path in CSV if the file isn’t uploaded yet (broken image on site).

---

## Quick Excel tip

1. Add paths for row 1 in `skuImageUrl`.
2. If the path only changes by filename, build formula in a helper column, then copy-paste as values:

   ```excel
   ="/images/products/glaze-gel/" & I2 & ".jpg"
   ```

   (assuming `I` = `skuId` column — adjust column letter in your sheet.)
