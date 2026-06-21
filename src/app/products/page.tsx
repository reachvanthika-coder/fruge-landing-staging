import { CategoryBreadcrumb } from "@/components/category/CategoryBreadcrumb";
import { CatalogProductImage } from "@/components/catalog/CatalogProductImage";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { loadCategories } from "@/lib/catalog/load-catalog";
import { getCategoryTheme } from "@/lib/catalog/themes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Frugel",
  description:
    "Professional ingredient ranges from Goa: Glaze Gels, Fruit Fillings, Crushes, Syrups, Fondants, Fruit Jam, Chocolate Sauce, and Flavoured Water.",
};

export default function ProductsIndexPage() {
  const categories = loadCategories();

  return (
    <main className="overflow-x-hidden bg-cream pt-24 pb-20 grain-overlay sm:pt-28">
      <SectionContainer maxWidth="wide">
        <CategoryBreadcrumb categoryTitle="All ranges" />

        <SectionEyebrow className="mt-8">What we make</SectionEyebrow>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          {categories.length} ranges. One Goan kitchen.
        </h1>
        <p className="mt-4 max-w-xl font-body text-base text-charcoal/80 sm:text-lg">
          Choose a category to see flavours, pack sizes, and application notes.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const theme = getCategoryTheme(category.id);
            return (
              <li key={category.id}>
                <Link
                  href={`/products/${category.id}`}
                  className={`group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border transition-shadow hover:shadow-[var(--shadow-card)] ${theme.borderClass}`}
                  style={{ backgroundColor: category.backgroundColor }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <CatalogProductImage
                      imageUrl={category.heroImageUrl}
                      alt={category.title}
                      className="absolute inset-0"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2
                      className={`font-display text-2xl font-bold ${theme.colorClass}`}
                    >
                      {category.title}
                    </h2>
                    <p className="mt-2 font-soul text-lg text-charcoal/75">
                      {category.tagline}
                    </p>
                    <p className="mt-3 font-body text-sm text-charcoal/60">
                      {category.sizesSummary}
                    </p>
                    <span
                      className={`mt-4 font-body text-sm font-semibold ${theme.colorClass}`}
                    >
                      View range →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </SectionContainer>
    </main>
  );
}
