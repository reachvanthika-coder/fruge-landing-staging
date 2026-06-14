import type { CategoryCard } from "@/lib/constants/categories";
import { categoryCards, getCategoryBySlug } from "@/lib/constants/categories";

/** One flavour / SKU row on a category page */
export type CategoryFlavor = {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  sizes?: string;
  signature?: boolean;
  /** Section background for featured flavour blocks + wave `toColor` */
  sectionBg: string;
};

export type FlavorSizeGroup = {
  label: string;
  sizes: string;
  items: string[];
};

export type CategoryPageData = {
  categoryId: CategoryCard["id"];
  application: string;
  subTagline?: string;
  /** Hero → first block wave target */
  heroBg: string;
  /** Alternating tones for featured flavour sections (pilot) */
  flavorTones: string[];
  /** Full catalogue grouped by pack size — all categories */
  sizeGroups: FlavorSizeGroup[];
  /** Optional per-flavour sections with waves between (pilot: glaze-gel) */
  featuredFlavors?: CategoryFlavor[];
  signatureCallouts?: { name: string; quote: string }[];
};

export const categoryPageData: Record<CategoryCard["id"], CategoryPageData> = {
  "glaze-gel": {
    categoryId: "glaze-gel",
    application: "Cake & dessert toppings, decoration",
    heroBg: "#F5E6D3",
    flavorTones: ["#F5E6D3", "#F0E0C8", "#EBD5BD", "#E6CAB2", "#E1BFA7"],
    signatureCallouts: [
      {
        name: "Cashew Glaze",
        quote: "Richness of cashews in every slice.",
      },
      {
        name: "Shahi Dry Fruit Glaze",
        quote: "A royal dry fruit touch to your creations.",
      },
    ],
    featuredFlavors: [
      {
        id: "cashew-glaze",
        name: "Cashew Glaze",
        tagline: "Signature · Goa’s cashew belt in every pour",
        description:
          "Our hero glaze — built for layered cakes and entremets where richness and shine matter.",
        sizes: "2.5 Kg",
        signature: true,
        sectionBg: "#F0E0C8",
      },
      {
        id: "shahi-dry-fruit-glaze",
        name: "Shahi Dry Fruit Glaze",
        tagline: "Signature · A royal dry fruit finish",
        description:
          "Visible dry fruit notes and a luxurious set — made for celebration cakes and premium lines.",
        sizes: "2.5 Kg",
        signature: true,
        sectionBg: "#EBD5BD",
      },
      {
        id: "mango-glaze",
        name: "Mango Glaze",
        tagline: "1 Kg · Tropical gold",
        description: "Bright mango tone for pastries, mousses, and fruit-forward entremets.",
        sizes: "1 Kg",
        sectionBg: "#F5E6D3",
      },
      {
        id: "butterscotch-glaze",
        name: "Butterscotch Glaze",
        tagline: "1 Kg & 2.5 Kg · Warm caramel depth",
        description: "Classic bakery favourite — consistent sheen and stable set.",
        sizes: "1 Kg · 2.5 Kg",
        sectionBg: "#E6CAB2",
      },
      {
        id: "blueberry-glaze",
        name: "Blueberry Glaze",
        tagline: "2.5 Kg · Berry ink finish",
        description: "Deep berry colour for modern entremets and plated desserts.",
        sizes: "2.5 Kg",
        sectionBg: "#E1BFA7",
      },
    ],
    sizeGroups: [
      {
        label: "250 gm",
        sizes: "250 gm",
        items: ["Neutral"],
      },
      {
        label: "1 Kg range",
        sizes: "1 Kg",
        items: [
          "White",
          "Neutral",
          "Pineapple",
          "Butterscotch",
          "Mango",
          "Cocoa",
          "Kiwi",
          "Caramel",
          "Orange",
        ],
      },
      {
        label: "2.5 Kg range",
        sizes: "2.5 Kg",
        items: [
          "Blueberry",
          "Mango",
          "Butterscotch",
          "Blackcurrant",
          "Kiwi",
          "Strawberry",
          "Caramel",
          "Shahi Dry Fruit",
          "Pineapple",
          "Cocoa",
          "White",
          "Cashew",
          "Neutral",
          "Orange",
        ],
      },
    ],
  },
  "fruit-filling": {
    categoryId: "fruit-filling",
    application: "Cakes, pies & desserts",
    subTagline: "50% fruit content",
    heroBg: "#FCE8EC",
    flavorTones: ["#FCE8EC", "#F8DDE3", "#F4D2D9"],
    sizeGroups: [
      {
        label: "1 Kg",
        sizes: "1 Kg",
        items: ["Red Cherry", "Blueberry", "Strawberry"],
      },
      {
        label: "300 gm",
        sizes: "300 gm",
        items: ["Strawberry", "Red Cherry"],
      },
    ],
  },
  "crushes-syrups": {
    categoryId: "crushes-syrups",
    application:
      "Cocktails, mocktails, milkshakes, juices, toppings, ice creams & desserts",
    heroBg: "#FFF3E0",
    flavorTones: ["#FFF3E0", "#FFE8CC", "#FFDCB8"],
    sizeGroups: [
      {
        label: "Crushes · 300 ml (decorative)",
        sizes: "300 ml",
        items: [
          "Mango Crush",
          "Blueberry Crush",
          "Pineapple Crush",
          "Strawberry Crush",
          "Butterscotch Crush",
          "Choco Cashew Crush",
          "Cashew Flavoured Crush",
          "Mango Mawa Crush",
          "Rose Syrup",
          "Kaccha Aam Syrup",
        ],
      },
      {
        label: "Crushes · 750 ml / 1 Ltr / 5 Ltr",
        sizes: "750 ml · 1 Ltr · 5 Ltr",
        items: [
          "Strawberry Crush",
          "Orange Crush",
          "Pineapple Crush",
          "Mango Crush",
          "Butterscotch Crush",
          "Mango Rabdi Crush",
          "Rabdi Crush",
          "Blueberry Crush",
          "Litchi Crush",
          "Kiwi Crush",
          "Blackcurrant Crush",
          "Rasmalai Crush",
          "Guava Crush",
        ],
      },
      {
        label: "Whole fruit chunks · 1 Ltr",
        sizes: "1 Ltr",
        items: [
          "Cashew Crush",
          "Pineapple Whole Fruit Crush",
          "Blackforest Crush",
          "Strawberry Whole Fruit Crush",
          "Mango Whole Fruit Crush",
          "Choco Cashew Crush",
        ],
      },
      {
        label: "Crushes · 5 Ltr bulk",
        sizes: "5 Ltr",
        items: [
          "Mango Crush",
          "Strawberry Crush",
          "Butterscotch Crush",
          "Pineapple Crush",
        ],
      },
      {
        label: "Syrups",
        sizes: "750 ml · 5 Ltr",
        items: [
          "Rose Syrup",
          "Mojito Lime-Mint Fruit Syrup",
          "Blue Curacao Fruit Syrup",
          "Khus Syrup",
          "Jeera Masala Syrup",
          "Caramel Syrup",
          "Vanilla Syrup",
          "Kesar Syrup",
          "Pina Colada Syrup",
          "Kaccha Aam Syrup",
        ],
      },
    ],
  },
  "sugar-fondant": {
    categoryId: "sugar-fondant",
    application: "Cake decorating, covering, figurines & decorative elements",
    subTagline: "Easy to shape · No cracks · Good finishing",
    heroBg: "#F2C4CE",
    flavorTones: ["#F2C4CE", "#F5D0D8", "#F8DCE2"],
    sizeGroups: [
      {
        label: "200 gm & 1 Kg colours",
        sizes: "200 gm · 1 Kg",
        items: [
          "White",
          "Green",
          "Black",
          "Brown",
          "Pink",
          "Blue",
          "Yellow",
          "Red",
        ],
      },
    ],
  },
  jam: {
    categoryId: "jam",
    application: "Spreads, bakery fillings & pastry use",
    heroBg: "#FFF0E0",
    flavorTones: ["#FFF0E0", "#FFE6CC", "#FFDCB8"],
    sizeGroups: [
      {
        label: "Fruit jam",
        sizes: "1 Kg · 4 Kg",
        items: [
          "Strawberry Fruit Jam",
          "Pineapple Fruit Jam",
          "Mango Fruit Jam",
          "Mix Fruit Jam (4 Kg available)",
        ],
      },
    ],
  },
  "chocolate-sauce": {
    categoryId: "chocolate-sauce",
    application:
      "Dessert drizzle, ice cream topping, cake decoration & brownie sauce",
    subTagline: "Dip the moment in deliciousness",
    heroBg: "#EDE4DC",
    flavorTones: ["#EDE4DC", "#E5D8CE", "#DDD0C4"],
    sizeGroups: [
      {
        label: "Chocolate sauce",
        sizes: "300 ml · 1 Ltr",
        items: ["Chocolate Flavoured Sauce"],
      },
    ],
  },
};

export function getCategoryPageData(
  slug: string,
): CategoryPageData | undefined {
  if (!(slug in categoryPageData)) return undefined;
  return categoryPageData[slug as CategoryCard["id"]];
}

export function getAllCategorySlugs(): CategoryCard["id"][] {
  return categoryCards.map((c) => c.id);
}

export function getCategoryPageContext(slug: string) {
  const category = getCategoryBySlug(slug);
  const page = getCategoryPageData(slug);
  if (!category || !page) return null;
  return { category, page };
}
