import { resolveCatalogImage } from "@/lib/catalog/resolve-image";
import type { CatalogCategory } from "@/lib/catalog/types";

export type StackInteractorItem = {
  num: string;
  name: string;
  line1: string;
  line2: string;
  clipId: "clip-original" | "clip-hexagons" | "clip-pixels";
  image: string;
  href: string;
  tagline: string;
};

const CLIP_IDS = ["clip-original", "clip-hexagons", "clip-pixels"] as const;

function splitTitle(title: string): [string, string] {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return [title, "Range"];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export function categoriesToStackItems(
  categories: CatalogCategory[],
): StackInteractorItem[] {
  return categories.map((category, index) => {
    const [line1, line2] = splitTitle(category.title);
    const resolved = resolveCatalogImage(category.heroImageUrl);

    return {
      num: String(index + 1).padStart(2, "0"),
      name: category.title,
      line1,
      line2,
      clipId: CLIP_IDS[index % CLIP_IDS.length]!,
      image: resolved.src,
      href: `/products/${category.id}`,
      tagline: category.tagline,
    };
  });
}
