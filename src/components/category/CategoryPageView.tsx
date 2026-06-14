import { CategoryEnquiryCta } from "@/components/category/CategoryEnquiryCta";
import { CategoryExplorerSection } from "@/components/category/CategoryExplorerSection";
import { CategoryHero } from "@/components/category/CategoryHero";
import { FlavorFeatureSection } from "@/components/category/FlavorFeatureSection";
import { SectionWave } from "@/components/ui/SectionWave";
import {
  categoryUsesExplorerLayout,
  getExplorerInitialFlavorId,
} from "@/lib/catalog/explorer-config";
import { flavorsToStackItems } from "@/lib/catalog/flavor-stack-items";
import type { CatalogCategoryPage } from "@/lib/catalog/types";

type CategoryPageViewProps = {
  page: CatalogCategoryPage;
};

export function CategoryPageView({ page }: CategoryPageViewProps) {
  const { category, flavors, application } = page;

  if (categoryUsesExplorerLayout(flavors)) {
    const stackItems = flavorsToStackItems(flavors);
    const initialFlavorId = getExplorerInitialFlavorId(category.id, flavors);

    return (
      <main className="overflow-x-hidden bg-cream">
        <CategoryHero
          category={category}
          application={application}
          showRangeImage={false}
        />

        <CategoryExplorerSection
          flavors={stackItems}
          initialFlavorId={initialFlavorId}
          imageTransitionMode="crossfade"
        />

        <CategoryEnquiryCta categoryTitle={category.title} />
      </main>
    );
  }

  let previousBg = category.backgroundColor;

  return (
    <main className="overflow-x-hidden bg-cream">
      <CategoryHero category={category} application={application} />

      {flavors.length > 0 ? (
        <>
          <SectionWave
            fromColor={previousBg}
            toColor={flavors[0]!.backgroundColor}
            variant={0}
          />
          {flavors.map((flavor, index) => {
            const nextFlavor = flavors[index + 1];
            const waveAfter = nextFlavor ? (
              <SectionWave
                key={`wave-${flavor.id}-to-${nextFlavor.id}`}
                fromColor={flavor.backgroundColor}
                toColor={nextFlavor.backgroundColor}
                variant={(index % 3) as 0 | 1 | 2}
              />
            ) : null;

            previousBg = flavor.backgroundColor;

            return (
              <div key={flavor.id}>
                <FlavorFeatureSection flavor={flavor} index={index} />
                {waveAfter}
              </div>
            );
          })}
        </>
      ) : null}

      <SectionWave fromColor={previousBg} toColor="#1a120a" variant={2} drips />

      <CategoryEnquiryCta categoryTitle={category.title} />
    </main>
  );
}
