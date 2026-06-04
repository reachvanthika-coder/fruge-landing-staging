import { CatalogProductImage } from "@/components/catalog/CatalogProductImage";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { getCategoryTheme } from "@/lib/catalog/themes";
import type { CatalogCategory, CatalogFlavor } from "@/lib/catalog/types";
import { cn } from "@/lib/cn";

type CategoryCatalogSectionProps = {
  category: CatalogCategory;
  flavors: CatalogFlavor[];
  sectionBg: string;
};

export function CategoryCatalogSection({
  category,
  flavors,
  sectionBg,
}: CategoryCatalogSectionProps) {
  const theme = getCategoryTheme(category.id);

  return (
    <section
      id="full-range"
      className="py-16 sm:py-20 grain-overlay"
      style={{ backgroundColor: sectionBg }}
      aria-label={`Full ${category.title} range`}
    >
      <SectionContainer maxWidth="wide">
        <SectionEyebrow className={theme.colorClass}>Full range</SectionEyebrow>
        <h2
          className={cn(
            "max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl",
            theme.colorClass,
          )}
        >
          Every SKU in this range
        </h2>
        <p className="mt-4 max-w-xl font-body text-base text-charcoal/80">
          Confirmed flavours and pack sizes from our catalogue. Placeholder images
          mark SKUs still waiting for a photo URL in the CSV.
        </p>

        <div className="mt-10 space-y-12">
          {flavors.map((flavor) => (
            <div key={flavor.id}>
              <h3 className="font-display text-xl font-bold text-charcoal">
                {flavor.name}
              </h3>
              {flavor.tagline && (
                <p className="mt-1 font-body text-sm italic text-charcoal/70">
                  {flavor.tagline}
                </p>
              )}
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {flavor.skus.map((sku) => (
                  <li
                    key={sku.id}
                    className={cn(
                      "overflow-hidden rounded-[var(--radius-card)] border bg-cream/50",
                      theme.borderClass,
                    )}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <CatalogProductImage
                        imageUrl={sku.imageUrl}
                        alt={`${flavor.name} — ${sku.sizeLabel}`}
                        className="absolute inset-0"
                        sizes="(max-width: 640px) 100vw, 320px"
                        showPendingBadge
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-display text-lg font-bold text-charcoal">
                        {flavor.name}
                      </p>
                      <p className="mt-1 font-body text-sm text-charcoal/70">
                        {sku.sizeLabel}
                      </p>
                      <p className="mt-2 font-mono text-xs text-charcoal/40">
                        {sku.id}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
