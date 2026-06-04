export type CategoryTheme = {
  colorClass: string;
  borderClass: string;
  application: string;
};

const DEFAULT_THEME: CategoryTheme = {
  colorClass: "text-charcoal",
  borderClass: "border-charcoal/20",
  application: "Professional bakery ingredients",
};

export const categoryThemes: Record<string, CategoryTheme> = {
  "glaze-gel": {
    colorClass: "text-glaze-caramel",
    borderClass: "border-glaze-caramel/30 hover:border-glaze-caramel/60",
    application: "Cake & dessert toppings, decoration",
  },
  "fruit-filling": {
    colorClass: "text-filling-cherry",
    borderClass: "border-filling-cherry/30 hover:border-filling-cherry/60",
    application: "Cakes, pies & desserts",
  },
  crushes: {
    colorClass: "text-crush-amber",
    borderClass: "border-crush-amber/30 hover:border-crush-amber/60",
    application:
      "Cocktails, mocktails, milkshakes, juices, toppings, ice creams & desserts",
  },
  syrups: {
    colorClass: "text-syrup-emerald",
    borderClass: "border-syrup-emerald/30 hover:border-syrup-emerald/60",
    application:
      "Cocktails, mocktails, milkshakes, juices, toppings, ice creams & desserts",
  },
  fondants: {
    colorClass: "text-jam-plum",
    borderClass: "border-fondant-blush hover:border-fondant-blush",
    application: "Cake decorating, covering, figurines & decorative elements",
  },
  "chocolate-sauce": {
    colorClass: "text-choc-espresso",
    borderClass: "border-choc-espresso/30 hover:border-choc-espresso/60",
    application:
      "Dessert drizzle, ice cream topping, cake decoration & brownie sauce",
  },
};

export function getCategoryTheme(categoryId: string): CategoryTheme {
  return categoryThemes[categoryId] ?? DEFAULT_THEME;
}
