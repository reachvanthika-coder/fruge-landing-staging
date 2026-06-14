import { resolveCatalogImage } from "@/lib/catalog/resolve-image";
import type { CatalogFlavor, CatalogSku } from "@/lib/catalog/types";

export type FlavorSkuStackItem = {
  num: string;
  id: string;
  name: string;
  line1: string;
  line2: string;
  tagline: string | null;
  description: string | null;
  featured: boolean;
  backgroundColor: string;
  skus: FlavorSkuStackSku[];
  defaultSkuIndex: number;
};

export type FlavorSkuStackSku = {
  id: string;
  sizeLabel: string;
  image: string;
  hasImage: boolean;
};

function splitTitle(title: string): [string, string] {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return [title, ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

function resolveSkuDisplayImage(
  sku: CatalogSku,
  flavorImageUrl: string | null,
): { src: string; hasImage: boolean } {
  const skuResolved = resolveCatalogImage(sku.imageUrl);
  if (!skuResolved.isPlaceholder) {
    return { src: skuResolved.src, hasImage: true };
  }

  const flavorResolved = resolveCatalogImage(flavorImageUrl);
  return {
    src: flavorResolved.src,
    hasImage: !flavorResolved.isPlaceholder,
  };
}

function pickDefaultSkuIndex(skus: FlavorSkuStackSku[]): number {
  const withImage = skus.findIndex((sku) => sku.hasImage);
  return withImage >= 0 ? withImage : 0;
}

export function flavorsToStackItems(flavors: CatalogFlavor[]): FlavorSkuStackItem[] {
  return flavors.map((flavor, index) => {
    const [line1, line2] = splitTitle(flavor.name);
    const skus = flavor.skus.map((sku) => {
      const { src, hasImage } = resolveSkuDisplayImage(sku, flavor.flavorImageUrl);
      return {
        id: sku.id,
        sizeLabel: sku.sizeLabel,
        image: src,
        hasImage,
      };
    });

    return {
      num: String(index + 1).padStart(2, "0"),
      id: flavor.id,
      name: flavor.name,
      line1,
      line2: line2 || "",
      tagline: flavor.tagline,
      description: flavor.description,
      featured: flavor.featuredOnPage,
      backgroundColor: flavor.backgroundColor,
      skus,
      defaultSkuIndex: pickDefaultSkuIndex(skus),
    };
  });
}

export function getFlavorStackImage(
  flavor: FlavorSkuStackItem,
  skuIndex: number,
): string {
  const sku = flavor.skus[skuIndex] ?? flavor.skus[flavor.defaultSkuIndex];
  return sku?.image ?? flavor.skus[0]?.image ?? "";
}
