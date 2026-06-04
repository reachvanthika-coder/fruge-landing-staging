import { CategoryCatalogSection } from "@/components/category/CategoryCatalogSection";
import { CategoryEnquiryCta } from "@/components/category/CategoryEnquiryCta";
import { CategoryHero } from "@/components/category/CategoryHero";
import { FlavorFeatureSection } from "@/components/category/FlavorFeatureSection";
import { SectionWave } from "@/components/ui/SectionWave";
import type { CatalogCategoryPage } from "@/lib/catalog/types";

type CategoryPageViewProps = {
  page: CatalogCategoryPage;
};

export function CategoryPageView({ page }: CategoryPageViewProps) {
  const { category, flavors, application } = page;
  const featured = flavors.filter((f) => f.featuredOnPage);
  const catalogBg =
    flavors[flavors.length - 1]?.backgroundColor ?? category.backgroundColor;

  let previousBg = category.backgroundColor;

  return (
    <main className="overflow-x-hidden bg-cream">
      <CategoryHero category={category} application={application} />

      {featured.length > 0 ? (
        <>
          <SectionWave
            fromColor={previousBg}
            toColor={featured[0]!.backgroundColor}
            variant={0}
          />
          {featured.map((flavor, index) => {
            const waveAfter =
              index < featured.length - 1 ? (
                <SectionWave
                  key={`wave-${flavor.id}`}
                  fromColor={flavor.backgroundColor}
                  toColor={featured[index + 1]!.backgroundColor}
                  variant={((index + 1) % 3) as 0 | 1 | 2}
                />
              ) : null;

            previousBg = flavor.backgroundColor;

            return (
              <div key={flavor.id}>
                <FlavorFeatureSection
                  flavor={flavor}
                  categoryId={category.id}
                  index={index}
                />
                {waveAfter}
              </div>
            );
          })}
          <SectionWave
            fromColor={previousBg}
            toColor={catalogBg}
            variant={1}
          />
        </>
      ) : (
        <SectionWave fromColor={category.backgroundColor} toColor={catalogBg} variant={0} />
      )}

      {flavors.length > 0 && (
        <CategoryCatalogSection
          category={category}
          flavors={flavors}
          sectionBg={catalogBg}
        />
      )}

      <SectionWave fromColor={catalogBg} toColor="#1a120a" variant={2} drips />

      <CategoryEnquiryCta categoryTitle={category.title} />
    </main>
  );
}
