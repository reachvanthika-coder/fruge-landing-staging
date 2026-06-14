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

const STOCK_IMAGES: Record<string, string> = {
  "glaze-gel":
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  "fruit-filling":
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop",
  crushes:
    "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1000&auto=format&fit=crop",
  syrups:
    "https://images.unsplash.com/photo-1544145945-f9042539cb83?q=80&w=1000&auto=format&fit=crop",
  fondants:
    "https://images.unsplash.com/photo-1558961363-fa8aafee576b?q=80&w=1000&auto=format&fit=crop",
  "chocolate-sauce":
    "https://images.unsplash.com/photo-1606313564200-e75d5e30412a?q=80&w=1000&auto=format&fit=crop",
};

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
      image: resolved.isPlaceholder
        ? (STOCK_IMAGES[category.id] ?? resolved.src)
        : resolved.src,
      href: `/products/${category.id}`,
      tagline: category.tagline,
    };
  });
}
