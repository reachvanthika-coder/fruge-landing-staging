import { resolveCatalogImage } from "@/lib/catalog/resolve-image";

export type CategoryCard = {
  id: string;
  assetId: string;
  title: string;
  tagline: string;
  sizes: string;
  /** Leave empty until hero image URL is set in category.csv */
  imageSrc: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
};

export function getCategoryBySlug(slug: string): CategoryCard | undefined {
  return categoryCards.find((c) => c.id === slug);
}

export const categoryCards: CategoryCard[] = [
  {
    id: "glaze-gel",
    assetId: "category-glaze-gel",
    title: "Glaze Gels",
    tagline: "The finish your cakes remember.",
    sizes: "250 gm · 1 Kg · 2.5 Kg",
    imageSrc: "",
    colorClass: "text-glaze-caramel",
    bgClass: "bg-[#F5E6D3]",
    borderClass: "border-glaze-caramel/30 hover:border-glaze-caramel/60",
  },
  {
    id: "fruit-filling",
    assetId: "category-fruit-filling",
    title: "Fruit Fillings",
    tagline: "Where every slice tells a story.",
    sizes: "300 gm · 1 Kg",
    imageSrc: "",
    colorClass: "text-filling-cherry",
    bgClass: "bg-[#FCE8EC]",
    borderClass: "border-filling-cherry/30 hover:border-filling-cherry/60",
  },
  {
    id: "crushes",
    assetId: "category-crushes",
    title: "Crushes",
    tagline: "Flavour at full volume.",
    sizes: "300 ml · 750 ml · 1 Ltr · 5 Ltr",
    imageSrc: "",
    colorClass: "text-crush-amber",
    bgClass: "bg-[#FFF3E0]",
    borderClass: "border-crush-amber/30 hover:border-crush-amber/60",
  },
  {
    id: "syrups",
    assetId: "category-syrups",
    title: "Syrups",
    tagline: "Pour personality into every drink.",
    sizes: "300 ml · 750 ml · 5 Ltr",
    imageSrc: "",
    colorClass: "text-syrup-emerald",
    bgClass: "bg-[#FFE8CC]",
    borderClass: "border-syrup-emerald/30 hover:border-syrup-emerald/60",
  },
  {
    id: "fondants",
    assetId: "category-fondants",
    title: "Fondants",
    tagline: "Colour your craft.",
    sizes: "200 gm · 1 Kg",
    imageSrc: "",
    colorClass: "text-jam-plum",
    bgClass: "bg-fondant-blush/40",
    borderClass: "border-fondant-blush hover:border-fondant-blush",
  },
  {
    id: "jam",
    assetId: "category-jam",
    title: "Fruit Jam",
    tagline: "Slow-cooked. Fast-selling.",
    sizes: "1 Kg · 4 Kg",
    imageSrc: "",
    colorClass: "text-terracotta",
    bgClass: "bg-[#FFF0E0]",
    borderClass: "border-terracotta/30 hover:border-terracotta/60",
  },
  {
    id: "chocolate-sauce",
    assetId: "category-chocolate-sauce",
    title: "Chocolate Sauce",
    tagline: "The drizzle that closes the deal.",
    sizes: "300 ml · 750 ml · 1 Ltr · 5 Ltr",
    imageSrc: "",
    colorClass: "text-choc-espresso",
    bgClass: "bg-[#EDE4DC]",
    borderClass: "border-choc-espresso/30 hover:border-choc-espresso/60",
  },
  {
    id: "flavoured-water",
    assetId: "category-flavoured-water",
    title: "Flavoured Water",
    tagline: "Essence in every drop.",
    sizes: "500 ml",
    imageSrc: "",
    colorClass: "text-syrup-emerald",
    bgClass: "bg-[#E8F4F8]",
    borderClass: "border-syrup-emerald/30 hover:border-syrup-emerald/60",
  },
];

/** Map category cards to FocusRail items (shared shape for carousel) */
export function getCategoryFocusRailItems() {
  return categoryCards.map((card) => {
    const resolved = resolveCatalogImage(card.imageSrc || null);
    return {
      id: card.id,
      title: card.title,
      description: `"${card.tagline}"`,
      meta: card.sizes,
      imageSrc: resolved.src,
      imagePending: resolved.isPlaceholder,
      href: `/products/${card.id}` as const,
    };
  });
}
