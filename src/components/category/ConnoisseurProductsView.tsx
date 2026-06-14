"use client";

import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import { Button } from "@/components/ui/Button";
import type { StackInteractorItem } from "@/lib/catalog/stack-interactor-items";
import Link from "next/link";

type ConnoisseurProductsViewProps = {
  items: StackInteractorItem[];
};

export function ConnoisseurProductsView({ items }: ConnoisseurProductsViewProps) {
  return (
    <main className="overflow-x-hidden bg-cream pt-16">
      <div className="border-b border-charcoal/10 bg-cream/90 px-6 py-4 backdrop-blur-sm md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">
              Experimental layout
            </p>
            <p className="mt-1 font-body text-sm text-charcoal/70">
              Stack interactor concept — not the default catalog yet.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/products" variant="secondary" size="sm">
              Standard catalog
            </Button>
            <Button href="#enquiry" variant="primary" size="sm">
              Request samples
            </Button>
          </div>
        </div>
      </div>

      <ConnoisseurStackInteractor items={items} />

      <div className="border-t border-charcoal/10 px-6 py-10 md:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-charcoal/65">
            Each range links to its full category page with flavours and pack sizes.
          </p>
          <Link
            href="/products"
            className="font-body text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
          >
            Compare with grid view →
          </Link>
        </div>
      </div>
    </main>
  );
}
