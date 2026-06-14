import type { ResolvedCatalogImage } from "@/lib/catalog/types";

/** Hero / category card / rectangular photo slots */
export const PLACEHOLDER_PRODUCT_IMAGE = "/images/placeholder-product.svg";

/** SKU pack shots in the flavour explorer and product sections */
export const PLACEHOLDER_PACKSHOT_IMAGE = "/images/placeholder-packshot.svg";

const PLACEHOLDER_SRCS = new Set([
  PLACEHOLDER_PRODUCT_IMAGE,
  PLACEHOLDER_PACKSHOT_IMAGE,
]);

export function isPlaceholderSrc(src: string): boolean {
  return PLACEHOLDER_SRCS.has(src);
}

/** Empty CSV image fields resolve to a visible placeholder reminder. */
export function resolveCatalogImage(
  raw: string | null | undefined,
): ResolvedCatalogImage {
  const trimmed = raw?.trim();
  if (trimmed) {
    return { src: trimmed, isPlaceholder: false };
  }
  return { src: PLACEHOLDER_PRODUCT_IMAGE, isPlaceholder: true };
}

/** Pack-shot slots use the bottle-outline placeholder when no URL is set. */
export function resolvePackshotImage(
  raw: string | null | undefined,
): ResolvedCatalogImage {
  const trimmed = raw?.trim();
  if (trimmed) {
    return { src: trimmed, isPlaceholder: false };
  }
  return { src: PLACEHOLDER_PACKSHOT_IMAGE, isPlaceholder: true };
}
