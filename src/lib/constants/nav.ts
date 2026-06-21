import { resolveCatalogImage } from "@/lib/catalog/resolve-image";
import { categoryCards } from "@/lib/constants/categories";

export type HeaderProductNavItem = {
  id: string;
  title: string;
  tagline: string;
  sizes: string;
  href: string;
  imageSrc: string;
  colorClass: string;
  bgClass: string;
};

export const aboutNavItem = {
  label: "About Us",
  href: "/#founders",
} as const;

export function getFooterProductLinks(): { label: string; href: string }[] {
  return categoryCards.map((card) => ({
    label: card.title,
    href: `/products/${card.id}`,
  }));
}

export function getHeaderProductNavItems(): HeaderProductNavItem[] {
  return categoryCards.map((card) => {
    const resolved = resolveCatalogImage(card.imageSrc || null);
    return {
      id: card.id,
      title: card.title,
      tagline: card.tagline,
      sizes: card.sizes,
      href: `/products/${card.id}`,
      imageSrc: resolved.src,
      colorClass: card.colorClass,
      bgClass: card.bgClass,
    };
  });
}
