import type { CatalogFlavor } from "@/lib/catalog/types";

/** Preferred default flavour when opening the category explorer. */
const EXPLORER_DEFAULT_FLAVOR: Record<string, string> = {
  "glaze-gel": "cashew-glaze",
  "fruit-filling": "strawberry",
  fondants: "white",
  crushes: "mango",
  syrups: "rose-syrup",
  "chocolate-sauce": "chocolate-flavoured-sauce",
  jam: "strawberry",
  "flavoured-water": "rose",
};

export function getExplorerInitialFlavorId(
  categoryId: string,
  flavors: CatalogFlavor[],
): string | undefined {
  if (flavors.length === 0) return undefined;

  const preferred = EXPLORER_DEFAULT_FLAVOR[categoryId];
  if (preferred && flavors.some((f) => f.id === preferred)) {
    return preferred;
  }

  const featured = flavors.find((f) => f.featuredOnPage);
  if (featured) return featured.id;

  return flavors[0]?.id;
}

export function categoryUsesExplorerLayout(flavors: CatalogFlavor[]): boolean {
  return flavors.length > 0;
}
