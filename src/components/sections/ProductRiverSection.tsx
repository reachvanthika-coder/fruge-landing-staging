import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProductRiverRail } from "@/components/sections/ProductRiverRail";
import { productRiverCopy } from "@/lib/constants/copy";

export function ProductRiverSection() {
  return (
    <section
      id="product-river"
      className="overflow-hidden bg-cream py-20 grain-overlay sm:py-28"
      aria-label="Product River"
      data-gsap="product-river-section"
    >
      <SectionContainer maxWidth="wide">
        <SectionEyebrow>{productRiverCopy.eyebrow}</SectionEyebrow>
        <h2
          className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl"
          data-gsap="product-river-headline"
        >
          <span className="block">{productRiverCopy.headlineLine1}</span>
          <span className="mt-1 block text-red-drip">
            {productRiverCopy.headlineLine2}
          </span>
        </h2>
        <p className="mt-4 max-w-xl font-body text-sm text-text-muted">
          Swipe, drag, or use arrow keys to browse all six ranges.
        </p>
      </SectionContainer>

      <div className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductRiverRail />
      </div>

      <SectionContainer maxWidth="wide">
        <div className="mt-12 flex justify-center" data-gsap="product-river-cta">
          <Button href="#enquiry" size="lg">
            {productRiverCopy.primaryCta}
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
