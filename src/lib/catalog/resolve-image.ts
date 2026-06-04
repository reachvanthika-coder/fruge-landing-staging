import type { ResolvedCatalogImage } from "@/lib/catalog/types";

export const PLACEHOLDER_PRODUCT_IMAGE = "/images/placeholder-product.svg";

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
