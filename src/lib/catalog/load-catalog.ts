import fs from "node:fs";
import path from "node:path";
import {
  csvRowsToRecords,
  emptyToNull,
  parseBoolean,
  parseCsv,
  parseIntField,
} from "@/lib/catalog/parse-csv";
import { getCategoryTheme } from "@/lib/catalog/themes";
import type {
  CatalogCategory,
  CatalogCategoryPage,
  CatalogFlavor,
  CatalogSku,
} from "@/lib/catalog/types";

const DATA_DIR = path.join(process.cwd(), "content", "products", "data");

function readCsvFile(filename: string): string {
  return fs.readFileSync(path.join(DATA_DIR, filename), "utf-8");
}

function fileExists(filename: string): boolean {
  return fs.existsSync(path.join(DATA_DIR, filename));
}

export function loadCategories(): CatalogCategory[] {
  const records = csvRowsToRecords(parseCsv(readCsvFile("category.csv")));

  return records
    .map((row) => ({
      id: row.id ?? "",
      sortOrder: parseIntField(row.sortOrder),
      title: row.title ?? "",
      tagline: row.tagline ?? "",
      backgroundColor: row.backgroundColor ?? "#FDF6EC",
      heroImageUrl: emptyToNull(row.heroImageUrl),
      sizesSummary: row.sizesSummary ?? "",
    }))
    .filter((c) => c.id && c.title)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));
}

export function getCategoryById(id: string): CatalogCategory | undefined {
  return loadCategories().find((c) => c.id === id);
}

export function loadCategoryFlavors(categoryId: string): CatalogFlavor[] {
  const filename = `${categoryId}.csv`;
  if (!fileExists(filename)) return [];

  const records = csvRowsToRecords(parseCsv(readCsvFile(filename)));
  const flavorMap = new Map<string, CatalogFlavor>();

  for (const row of records) {
    const flavorId = row.flavorId;
    const skuId = row.skuId;
    if (!flavorId || !skuId) continue;

    const sku: CatalogSku = {
      id: skuId,
      sortOrder: parseIntField(row.skuSortOrder),
      sizeLabel: row.sizeLabel ?? "",
      imageUrl: emptyToNull(row.skuImageUrl),
    };

    const existing = flavorMap.get(flavorId);
    if (existing) {
      existing.skus.push(sku);
      continue;
    }

    flavorMap.set(flavorId, {
      id: flavorId,
      sortOrder: parseIntField(row.flavorSortOrder),
      name: row.flavorName ?? flavorId,
      backgroundColor: row.flavorBackgroundColor ?? "#FDF6EC",
      tagline: emptyToNull(row.flavorTagline),
      description: emptyToNull(row.flavorDescription),
      featuredOnPage: parseBoolean(row.featuredOnPage),
      flavorImageUrl: emptyToNull(row.flavorImageUrl),
      skus: [sku],
    });
  }

  return [...flavorMap.values()]
    .map((flavor) => ({
      ...flavor,
      skus: [...flavor.skus].sort(
        (a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id),
      ),
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));
}

export function loadCategoryPage(categoryId: string): CatalogCategoryPage | null {
  const category = getCategoryById(categoryId);
  if (!category) return null;

  const theme = getCategoryTheme(categoryId);
  return {
    category,
    flavors: loadCategoryFlavors(categoryId),
    application: theme.application,
  };
}

export function getAllCategoryIds(): string[] {
  return loadCategories().map((c) => c.id);
}

export function categoryHasCatalogData(categoryId: string): boolean {
  return loadCategoryFlavors(categoryId).length > 0;
}
