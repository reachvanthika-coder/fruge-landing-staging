import { CatalogProductImage } from "@/components/catalog/CatalogProductImage";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { CatalogFlavor } from "@/lib/catalog/types";
import { cn } from "@/lib/cn";

type FlavorFeatureSectionProps = {
  flavor: CatalogFlavor;
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
  index,
}: FlavorFeatureSectionProps) {
  const isEven = index % 2 === 0;
  const showSkuRow = flavor.skus.length > 1;

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
            <h2 className="font-display text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
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

          {/* Pack shot floats on flavour background — no card frame */}
          <div className="relative mx-auto flex min-h-[280px] w-full max-w-md items-end justify-center sm:min-h-[340px] lg:max-w-lg">
            <div className="relative h-[min(340px,52vh)] w-full max-w-[280px] sm:max-w-[320px]">
              <CatalogProductImage
                variant="packshot"
                imageUrl={flavorDisplayImageUrl(flavor)}
                alt={flavor.name}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 60vw, 320px"
              />
            </div>
          </div>
        </div>

        {showSkuRow && (
          <ul className="mt-14 flex flex-wrap items-end justify-center gap-x-10 gap-y-8 sm:gap-x-14">
            {flavor.skus.map((sku) => (
              <li key={sku.id} className="flex flex-col items-center gap-3">
                <div className="relative h-36 w-28 sm:h-44 sm:w-32">
                  <CatalogProductImage
                    variant="packshot"
                    imageUrl={sku.imageUrl}
                    alt={`${flavor.name} — ${sku.sizeLabel}`}
                    className="absolute inset-0"
                    sizes="128px"
                  />
                </div>
                <p className="font-body text-sm font-semibold text-charcoal/85">
                  {sku.sizeLabel}
                </p>
              </li>
            ))}
          </ul>
        )}
      </SectionContainer>
    </section>
  );
}
