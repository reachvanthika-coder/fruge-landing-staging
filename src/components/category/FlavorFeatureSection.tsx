import { CatalogProductImage } from "@/components/catalog/CatalogProductImage";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { getCategoryTheme } from "@/lib/catalog/themes";
import type { CatalogFlavor } from "@/lib/catalog/types";
import { cn } from "@/lib/cn";

type FlavorFeatureSectionProps = {
  flavor: CatalogFlavor;
  categoryId: string;
  index: number;
};

function flavorDisplayImageUrl(flavor: CatalogFlavor): string | null {
  return flavor.flavorImageUrl ?? flavor.skus[0]?.imageUrl ?? null;
}

function flavorSizeSummary(flavor: CatalogFlavor): string {
  return flavor.skus.map((sku) => sku.sizeLabel).join(" · ");
}

export function FlavorFeatureSection({
  flavor,
  categoryId,
  index,
}: FlavorFeatureSectionProps) {
  const theme = getCategoryTheme(categoryId);
  const isEven = index % 2 === 0;

  return (
    <section
      id={flavor.id}
      className="py-16 sm:py-20 grain-overlay"
      style={{ backgroundColor: flavor.backgroundColor }}
      aria-label={flavor.name}
    >
      <SectionContainer maxWidth="wide">
        <div
          className={cn(
            "grid gap-10 lg:grid-cols-2 lg:items-center",
            !isEven && "lg:[&>div:first-child]:order-2",
          )}
        >
          <div>
            {flavor.featuredOnPage && (
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wider text-red-drip">
                Featured product
              </p>
            )}
            <h2
              className={cn(
                "font-display text-3xl font-bold leading-tight sm:text-4xl",
                theme.colorClass,
              )}
            >
              {flavor.name}
            </h2>
            {flavor.tagline && (
              <p className="mt-3 font-soul text-xl text-charcoal/75 sm:text-2xl">
                {flavor.tagline}
              </p>
            )}
            {flavor.description && (
              <p className="mt-5 font-body text-base leading-relaxed text-charcoal/85 sm:text-lg">
                {flavor.description}
              </p>
            )}
            {flavor.skus.length > 0 && (
              <p className="mt-4 font-body text-sm font-medium text-charcoal/70">
                Available: {flavorSizeSummary(flavor)}
              </p>
            )}
            <div className="mt-8">
              <Button href="/#enquiry" size="lg">
                Enquire about {flavor.name}
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "relative min-h-[280px] overflow-hidden rounded-[var(--radius-card)] border shadow-[var(--shadow-card)]",
              theme.borderClass,
            )}
          >
            <CatalogProductImage
              imageUrl={flavorDisplayImageUrl(flavor)}
              alt={flavor.name}
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
