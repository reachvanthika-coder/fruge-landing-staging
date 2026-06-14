/**
 * Generates product catalog CSVs from structured source data.
 * Run: node scripts/generate-product-csvs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "..", "content", "products", "data");

const HEADER =
  "flavorId,flavorSortOrder,flavorName,flavorBackgroundColor,flavorTagline,flavorDescription,featuredOnPage,flavorImageUrl,skuId,skuSortOrder,sizeLabel,skuImageUrl";

const SIZE_ORDER = {
  "200 gm": 1,
  "300 gm": 2,
  "300 ml": 3,
  "500 ml": 4,
  "750 ml": 5,
  "1 Kg": 6,
  "1 Ltr": 7,
  "4 Kg": 8,
  "5 Ltr": 9,
};

function slugSize(label) {
  return label
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/kg/g, "kg")
    .replace(/ltr/g, "ltr");
}

function escapeCsv(value) {
  if (value == null || value === "") return "";
  const str = String(value);
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

function rowsForCategory(flavors) {
  const rows = [];
  for (const flavor of flavors) {
    const sizes = [...flavor.sizes].sort(
      (a, b) => (SIZE_ORDER[a] ?? 99) - (SIZE_ORDER[b] ?? 99),
    );
    sizes.forEach((sizeLabel, index) => {
      rows.push([
        flavor.id,
        flavor.sortOrder,
        flavor.name,
        flavor.color,
        flavor.tagline,
        "",
        flavor.featured ? "true" : "false",
        "",
        `${flavor.id}-${slugSize(sizeLabel)}`,
        index + 1,
        sizeLabel,
        "",
      ]);
    });
  }
  return rows;
}

function writeCategoryCsv(filename, flavors) {
  const rows = rowsForCategory(flavors);
  const lines = [HEADER, ...rows.map((row) => row.map(escapeCsv).join(","))];
  fs.writeFileSync(path.join(DATA_DIR, filename), `${lines.join("\n")}\n`, "utf-8");
  console.log(`Wrote ${filename} (${flavors.length} flavours, ${rows.length} SKUs)`);
}

const fondants = [
  { id: "white", sortOrder: 1, name: "White", color: "#F5F5F0", tagline: "The blank canvas every design starts from", featured: true, sizes: ["200 gm", "1 Kg"] },
  { id: "yellow", sortOrder: 2, name: "Yellow", color: "#FFF3C4", tagline: "Sunlit tone for cheerful celebration cakes", featured: false, sizes: ["200 gm", "1 Kg"] },
  { id: "red", sortOrder: 3, name: "Red", color: "#F8D7DA", tagline: "Bold crimson for classic celebration lines", featured: true, sizes: ["200 gm", "1 Kg"] },
  { id: "pink", sortOrder: 4, name: "Pink", color: "#FCE4EC", tagline: "Soft blush for birthdays and boutique tiers", featured: false, sizes: ["200 gm", "1 Kg"] },
  { id: "green", sortOrder: 5, name: "Green", color: "#DCEDC8", tagline: "Garden-fresh green for themed finishes", featured: false, sizes: ["200 gm", "1 Kg"] },
  { id: "blue", sortOrder: 6, name: "Blue", color: "#D6E4F0", tagline: "Cool sky tone for modern celebration work", featured: false, sizes: ["200 gm", "1 Kg"] },
  { id: "brown", sortOrder: 7, name: "Brown", color: "#D7CCC8", tagline: "Earthy warmth for rustic and chocolate themes", featured: false, sizes: ["200 gm", "1 Kg"] },
  { id: "black", sortOrder: 8, name: "Black", color: "#E0E0E0", tagline: "Deep contrast for dramatic statement pieces", featured: false, sizes: ["200 gm", "1 Kg"] },
];

const crushes = [
  { id: "mango", sortOrder: 1, name: "Mango", color: "#FFE0B2", tagline: "Tropical gold for shakes and dessert bars", featured: true, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "strawberry", sortOrder: 2, name: "Strawberry", color: "#F8D7E0", tagline: "Berry brightness for milkshakes and toppings", featured: true, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "pineapple", sortOrder: 3, name: "Pineapple", color: "#FFECB3", tagline: "Sun-sweet crush for tropical beverage lines", featured: false, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "pineapple-whole-fruit", sortOrder: 4, name: "Pineapple Whole Fruit", color: "#FFE082", tagline: "Real fruit texture in every pour", featured: false, sizes: ["300 ml", "1 Ltr", "5 Ltr"] },
  { id: "strawberry-whole-fruit", sortOrder: 5, name: "Strawberry Whole Fruit", color: "#F5C6D0", tagline: "Chunky berry body for premium mocktails", featured: false, sizes: ["300 ml", "1 Ltr"] },
  { id: "mango-whole-fruit", sortOrder: 6, name: "Mango Whole Fruit", color: "#FFD180", tagline: "Alphonso-style richness with fruit pieces", featured: false, sizes: ["300 ml", "1 Ltr"] },
  { id: "blueberry", sortOrder: 7, name: "Blueberry", color: "#D6E4F0", tagline: "Deep berry notes for café beverage menus", featured: false, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "butterscotch", sortOrder: 8, name: "Butterscotch", color: "#F5D6A8", tagline: "Caramel warmth for dessert drinks and sundaes", featured: false, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "orange", sortOrder: 9, name: "Orange", color: "#FFD4A3", tagline: "Citrus punch for sodas and fruit coolers", featured: false, sizes: ["750 ml", "5 Ltr"] },
  { id: "blackcurrant", sortOrder: 10, name: "Blackcurrant", color: "#E4D4F0", tagline: "Bold purple depth for signature mocktails", featured: false, sizes: ["750 ml"] },
  { id: "litchi", sortOrder: 11, name: "Litchi", color: "#FCE4EC", tagline: "Floral sweetness for exotic drink programmes", featured: false, sizes: ["750 ml", "5 Ltr"] },
  { id: "guava", sortOrder: 12, name: "Guava", color: "#FFCCBC", tagline: "Tropical pink for juices and dessert bars", featured: false, sizes: ["750 ml", "5 Ltr"] },
  { id: "kiwi", sortOrder: 13, name: "Kiwi", color: "#DCEDC8", tagline: "Zesty green lift for modern beverage lines", featured: false, sizes: ["750 ml"] },
  { id: "blackforest", sortOrder: 14, name: "Blackforest", color: "#D7CCC8", tagline: "Chocolate-cherry depth for indulgent drinks", featured: false, sizes: ["300 ml", "1 Ltr", "5 Ltr"] },
  { id: "rasmalai", sortOrder: 15, name: "Rasmalai", color: "#FFF8E1", tagline: "Indian dessert nostalgia in every swirl", featured: false, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "rabdi", sortOrder: 16, name: "Rabdi", color: "#FFF3E0", tagline: "Rich mawa notes for faloodas and kulfi", featured: false, sizes: ["300 ml", "750 ml"] },
  { id: "mango-rabdi", sortOrder: 17, name: "Mango Rabdi", color: "#FFE0B2", tagline: "Mango meets mawa for festive beverage menus", featured: false, sizes: ["750 ml"] },
  { id: "mango-mawa", sortOrder: 18, name: "Mango Mawa", color: "#FFCC80", tagline: "Dense mango richness for premium toppings", featured: false, sizes: ["300 ml"] },
  { id: "kesar-mawa", sortOrder: 19, name: "Kesar Mawa", color: "#FFF9C4", tagline: "Saffron-kissed mawa for celebration drinks", featured: false, sizes: ["750 ml"] },
  { id: "cashew", sortOrder: 20, name: "Cashew", color: "#F5E6D3", tagline: "Nutty luxury for milkshakes and faloodas", featured: false, sizes: ["300 ml", "1 Ltr"] },
  { id: "choco-cashew", sortOrder: 21, name: "Choco Cashew", color: "#D7CCC8", tagline: "Chocolate-nut indulgence for dessert bars", featured: false, sizes: ["300 ml"] },
];

const syrups = [
  { id: "rose-syrup", sortOrder: 1, name: "Rose Syrup", color: "#FCE4EC", tagline: "Floral classic for faloodas and milkshakes", featured: true, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "blue-curacao", sortOrder: 2, name: "Blue Curacao", color: "#B3E5FC", tagline: "Electric blue for cocktail and mocktail bars", featured: true, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "lime-mint-mojito", sortOrder: 3, name: "Lime Mint Mojito", color: "#DCEDC8", tagline: "Fresh zesty lift for summer beverage menus", featured: false, sizes: ["300 ml", "750 ml", "5 Ltr"] },
  { id: "kaccha-aam", sortOrder: 4, name: "Kaccha Aam", color: "#C8E6C9", tagline: "Raw mango tang for regional cooler programmes", featured: false, sizes: ["300 ml", "750 ml"] },
  { id: "khus", sortOrder: 5, name: "Khus", color: "#A5D6A7", tagline: "Earthy vetiver refresh for traditional drinks", featured: false, sizes: ["750 ml"] },
  { id: "kesar", sortOrder: 6, name: "Kesar", color: "#FFF9C4", tagline: "Saffron warmth for festive beverage lines", featured: false, sizes: ["750 ml"] },
  { id: "jeera-masala", sortOrder: 7, name: "Jeera Masala", color: "#FFF3E0", tagline: "Spiced fizz for Indian soda programmes", featured: false, sizes: ["750 ml"] },
  { id: "pina-colada", sortOrder: 8, name: "Pina Colada", color: "#FFF8E1", tagline: "Coconut-pineapple escape in every pour", featured: false, sizes: ["750 ml"] },
  { id: "caramel", sortOrder: 9, name: "Caramel", color: "#E6C9A8", tagline: "Golden sweetness for coffee and dessert drinks", featured: false, sizes: ["750 ml"] },
  { id: "vanilla", sortOrder: 10, name: "Vanilla", color: "#F5F5F0", tagline: "Timeless base note for shakes and frappés", featured: false, sizes: ["750 ml"] },
  { id: "watermelon", sortOrder: 11, name: "Watermelon", color: "#FFCDD2", tagline: "Juicy summer pink for seasonal coolers", featured: false, sizes: ["750 ml"] },
];

const chocolateSauce = [
  {
    id: "chocolate-flavoured-sauce",
    sortOrder: 1,
    name: "Chocolate Flavoured Sauce",
    color: "#D7CCC8",
    tagline: "Silky drizzle for sundaes, brownies, and plating",
    featured: true,
    sizes: ["300 ml", "750 ml", "1 Ltr", "5 Ltr"],
  },
];

const fruitFilling = [
  { id: "strawberry", sortOrder: 1, name: "Strawberry", color: "#F8D7E0", tagline: "Berry-rich filling for layered celebration cakes", featured: true, sizes: ["300 gm", "1 Kg"] },
  { id: "red-cherry", sortOrder: 2, name: "Red Cherry", color: "#FCE8EC", tagline: "Classic cherry depth for pastries and pies", featured: true, sizes: ["300 gm", "1 Kg"] },
  { id: "blueberry", sortOrder: 3, name: "Blueberry", color: "#D6E4F0", tagline: "Deep berry body with 50% fruit content", featured: false, sizes: ["300 gm", "1 Kg"] },
  { id: "mango", sortOrder: 4, name: "Mango", color: "#FFE0B2", tagline: "Tropical sunshine between every sponge layer", featured: false, sizes: ["1 Kg"] },
  { id: "pineapple", sortOrder: 5, name: "Pineapple", color: "#FFECB3", tagline: "Golden fruit filling for tropical pastry lines", featured: false, sizes: ["1 Kg"] },
];

const jam = [
  { id: "strawberry", sortOrder: 1, name: "Strawberry", color: "#F8D7E0", tagline: "Slow-cooked berry spread bakers trust daily", featured: true, sizes: ["1 Kg", "4 Kg"] },
  { id: "mango", sortOrder: 2, name: "Mango", color: "#FFE0B2", tagline: "Alphonso-style richness for bakery counters", featured: true, sizes: ["1 Kg", "4 Kg"] },
  { id: "pineapple", sortOrder: 3, name: "Pineapple", color: "#FFECB3", tagline: "Tropical sweetness for tarts and toast lines", featured: false, sizes: ["1 Kg", "4 Kg"] },
  { id: "mixed-fruit", sortOrder: 4, name: "Mixed Fruit", color: "#FFF0E0", tagline: "An orchard blend for versatile pastry use", featured: false, sizes: ["1 Kg", "4 Kg"] },
];

const flavouredWater = [
  { id: "rose", sortOrder: 1, name: "Rose", color: "#FCE4EC", tagline: "Delicate floral note for mithai and beverage prep", featured: true, sizes: ["500 ml"] },
  { id: "kewra-water", sortOrder: 2, name: "Kewra Water", color: "#E8F5E9", tagline: "Traditional pandanus essence for festive recipes", featured: true, sizes: ["500 ml"] },
];

writeCategoryCsv("fondants.csv", fondants);
writeCategoryCsv("crushes.csv", crushes);
writeCategoryCsv("syrups.csv", syrups);
writeCategoryCsv("chocolate-sauce.csv", chocolateSauce);
writeCategoryCsv("fruit-filling.csv", fruitFilling);
writeCategoryCsv("jam.csv", jam);
writeCategoryCsv("flavoured-water.csv", flavouredWater);

const categoryCsv = `id,sortOrder,title,tagline,backgroundColor,heroImageUrl,sizesSummary
glaze-gel,1,Glaze Gels,The finish your cakes remember.,#F5E6D3,,250 gm · 1 Kg · 2.5 Kg
fruit-filling,2,Fruit Fillings,Where every slice tells a story.,#FCE8EC,,300 gm · 1 Kg
crushes,3,Crushes,Flavour at full volume.,#FFF3E0,,300 ml · 750 ml · 1 Ltr · 5 Ltr
syrups,4,Syrups,Pour personality into every drink.,#FFE8CC,,300 ml · 750 ml · 5 Ltr
fondants,5,Fondants,Colour your craft.,#F2C4CE,,200 gm · 1 Kg
jam,6,Fruit Jam,Slow-cooked. Fast-selling.,#FFF0E0,,1 Kg · 4 Kg
chocolate-sauce,7,Chocolate Sauce,The drizzle that closes the deal.,#EDE4DC,,300 ml · 750 ml · 1 Ltr · 5 Ltr
flavoured-water,8,Flavoured Water,Essence in every drop.,#E8F4F8,,500 ml
`;

fs.writeFileSync(path.join(DATA_DIR, "category.csv"), categoryCsv, "utf-8");
console.log("Wrote category.csv");
