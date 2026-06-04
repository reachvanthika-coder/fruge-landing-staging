export type CategoryCard = {
  id: string;
  assetId: string;
  title: string;
  tagline: string;
  sizes: string;
  /** Stock / placeholder image until real product shot is delivered */
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
    title: "Glaze Gel",
    tagline: "The finish your cakes remember.",
    sizes: "250gm · 1 Kg · 2.5 Kg",
    imageSrc:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    colorClass: "text-glaze-caramel",
    bgClass: "bg-[#F5E6D3]",
    borderClass: "border-glaze-caramel/30 hover:border-glaze-caramel/60",
  },
  {
    id: "fruit-filling",
    assetId: "category-fruit-filling",
    title: "Fruit Filling",
    tagline: "Where every slice tells a story.",
    sizes: "300gm · 1 Kg",
    imageSrc:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop",
    colorClass: "text-filling-cherry",
    bgClass: "bg-[#FCE8EC]",
    borderClass: "border-filling-cherry/30 hover:border-filling-cherry/60",
  },
  {
    id: "crushes-syrups",
    assetId: "category-crushes-syrups",
    title: "Crushes & Syrups",
    tagline: "Flavour at full volume.",
    sizes: "300ml · 750ml · 1 Ltr · 5 Ltr",
    imageSrc:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1000&auto=format&fit=crop",
    colorClass: "text-crush-amber",
    bgClass: "bg-[#FFF3E0]",
    borderClass: "border-crush-amber/30 hover:border-crush-amber/60",
  },
  {
    id: "sugar-fondant",
    assetId: "category-sugar-fondant",
    title: "Sugar Fondant",
    tagline: "Colour your craft.",
    sizes: "200gm · 1 Kg",
    imageSrc:
      "https://images.unsplash.com/photo-1558961363-fa8aafee576b?q=80&w=1000&auto=format&fit=crop",
    colorClass: "text-jam-plum",
    bgClass: "bg-fondant-blush/40",
    borderClass: "border-fondant-blush hover:border-fondant-blush",
  },
  {
    id: "fruit-jam",
    assetId: "category-fruit-jam",
    title: "Fruit Jam",
    tagline: "Slow-cooked. Fast-selling.",
    sizes: "1 Kg · 4 Kg",
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    colorClass: "text-terracotta",
    bgClass: "bg-[#FFF0E0]",
    borderClass: "border-terracotta/30 hover:border-terracotta/60",
  },
  {
    id: "chocolate-sauce",
    assetId: "category-chocolate-sauce",
    title: "Chocolate Sauce",
    tagline: "The drizzle that closes the deal.",
    sizes: "300ml · 1 Ltr",
    imageSrc:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30412a?q=80&w=1000&auto=format&fit=crop",
    colorClass: "text-choc-espresso",
    bgClass: "bg-[#EDE4DC]",
    borderClass: "border-choc-espresso/30 hover:border-choc-espresso/60",
  },
];

/** Map category cards to FocusRail items (shared shape for carousel) */
export function getCategoryFocusRailItems() {
  return categoryCards.map((card) => ({
    id: card.id,
    title: card.title,
    description: `"${card.tagline}"`,
    meta: card.sizes,
    imageSrc: card.imageSrc,
    href: `/products/${card.id}` as const,
  }));
}
