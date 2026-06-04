import { CategoryBreadcrumb } from "@/components/category/CategoryBreadcrumb";
import { CatalogProductImage } from "@/components/catalog/CatalogProductImage";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { getCategoryTheme } from "@/lib/catalog/themes";
import type { CatalogCategory } from "@/lib/catalog/types";
import { cn } from "@/lib/cn";

type CategoryHeroProps = {
  category: CatalogCategory;
  application: string;
};

export function CategoryHero({ category, application }: CategoryHeroProps) {
  const theme = getCategoryTheme(category.id);

  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 grain-overlay"
      style={{ backgroundColor: category.backgroundColor }}
      aria-label={`${category.title} range`}
    >
      <SectionContainer maxWidth="wide">
        <CategoryBreadcrumb categoryTitle={category.title} className="mb-8" />

        <SectionEyebrow className={theme.colorClass}>
          Professional range
        </SectionEyebrow>

        <h1
          className={cn(
            "max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl",
            theme.colorClass,
          )}
        >
          {category.title}
        </h1>

        <p className="mt-4 max-w-xl font-soul text-2xl text-charcoal/80 sm:text-3xl">
          {category.tagline}
        </p>

        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal/85 sm:text-lg">
          {application}. Pack sizes: {category.sizesSummary}.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/#enquiry" size="lg">
            Request samples
          </Button>
          <Button href="/#product-river" variant="secondary" size="lg">
            All ranges
          </Button>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-product)] ring-1 ring-charcoal/10">
          <CatalogProductImage
            imageUrl={category.heroImageUrl}
            alt={`${category.title} range`}
            className="absolute inset-0"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
        </div>
      </SectionContainer>
    </section>
  );
}
