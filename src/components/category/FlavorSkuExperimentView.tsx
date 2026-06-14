"use client";

import { FlavorSkuStackInteractor } from "@/components/ui/flavor-sku-stack-interactor";
import { Button } from "@/components/ui/Button";
import type { FlavorSkuStackItem } from "@/lib/catalog/flavor-stack-items";
import Link from "next/link";

type FlavorSkuExperimentViewProps = {
  categoryTitle: string;
  categoryTagline: string;
  application: string;
  sizesSummary: string;
  flavors: FlavorSkuStackItem[];
  standardPageHref: string;
  initialFlavorId?: string;
};

export function FlavorSkuExperimentView({
  categoryTitle,
  categoryTagline,
  application,
  sizesSummary,
  flavors,
  standardPageHref,
  initialFlavorId = "cashew-glaze",
}: FlavorSkuExperimentViewProps) {
  return (
    <main className="overflow-x-hidden bg-cream pt-16">
      <div className="border-b border-charcoal/10 bg-cream/90 px-6 py-4 backdrop-blur-sm md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">
              Experimental layout · {categoryTitle}
            </p>
            <p className="mt-1 max-w-xl font-body text-sm text-charcoal/70">
              Hover a flavour to preview · pick a pack size below the image.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={standardPageHref} variant="secondary" size="sm">
              Standard page
            </Button>
            <Button href="/#enquiry" variant="primary" size="sm">
              Request samples
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b border-charcoal/10 px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-glaze-caramel">
            Professional range
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            {categoryTitle}
          </h1>
          <p className="mt-2 font-soul text-2xl text-charcoal/75">{categoryTagline}</p>
          <p className="mt-3 max-w-2xl font-body text-sm text-charcoal/65 sm:text-base">
            {application}. Pack sizes: {sizesSummary}.
          </p>
        </div>
      </div>

      <FlavorSkuStackInteractor
        flavors={flavors}
        initialFlavorId={initialFlavorId}
      />

      <div className="border-t border-charcoal/10 px-6 py-10 md:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-charcoal/65">
            {flavors.length} flavours in this range. Compare with the full scroll
            layout on the standard category page.
          </p>
          <Link
            href={standardPageHref}
            className="font-body text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
          >
            Open standard {categoryTitle} page →
          </Link>
        </div>
      </div>
    </main>
  );
}
