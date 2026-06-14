import { FlavorSkuExperimentView } from "@/components/category/FlavorSkuExperimentView";
import { flavorsToStackItems } from "@/lib/catalog/flavor-stack-items";
import {
  loadCategoryFlavors,
  loadCategoryPage,
} from "@/lib/catalog/load-catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const CATEGORY_ID = "glaze-gel";

export const metadata: Metadata = {
  title: "Glaze Gels (Stack View) — Frugel",
  description:
    "Experimental flavour explorer for Frugel Glaze Gels — hover flavours and select pack sizes.",
  robots: { index: false, follow: false },
};

export default function ProductsExperimentPage() {
  const page = loadCategoryPage(CATEGORY_ID);
  if (!page) notFound();

  const flavors = loadCategoryFlavors(CATEGORY_ID);
  const stackItems = flavorsToStackItems(flavors);

  return (
    <FlavorSkuExperimentView
      categoryTitle={page.category.title}
      categoryTagline={page.category.tagline}
      application={page.application}
      sizesSummary={page.category.sizesSummary}
      flavors={stackItems}
      standardPageHref={`/products/${CATEGORY_ID}`}
      initialFlavorId="cashew-glaze"
    />
  );
}
