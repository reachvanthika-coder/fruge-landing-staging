import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { getAsset } from "@/lib/assets";
import { innovationCopy } from "@/lib/constants/copy";
import { cn } from "@/lib/cn";

export function InnovationSection() {
  const bottle = getAsset("innovation-wfc-bottle");

  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-dark py-20 grain-overlay sm:py-28"
      aria-label="Whole Fruit Chunks Innovation"
      data-gsap="innovation-section"
    >
      {/* Spotlight vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,130,12,0.12)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <SectionContainer maxWidth="wide" innerClassName="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow light>{innovationCopy.eyebrow}</SectionEyebrow>
            <h2
              className="font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl"
              data-gsap="innovation-headline"
            >
              <span className="block">{innovationCopy.headlineLine1}</span>
              <span className="mt-1 block text-red-drip">
                {innovationCopy.headlineLine2}
              </span>
            </h2>

            <div className="mt-8 space-y-4" data-gsap="innovation-body">
              {innovationCopy.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="font-body text-base leading-relaxed text-cream/80 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className="mt-8 flex flex-wrap gap-2"
              data-gsap="innovation-chips"
            >
              {innovationCopy.productChips.map((chip) => (
                <span
                  key={chip}
                  className={cn(
                    "rounded-full border border-red-drip/30 bg-red-drip/10 px-4 py-1.5",
                    "font-body text-sm text-cream/90",
                  )}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-10" data-gsap="innovation-cta">
              <Button href="#product-river" size="lg">
                {innovationCopy.primaryCta}
              </Button>
              <p className="mt-3 font-body text-sm text-cream/50">
                {innovationCopy.smallCopy}
              </p>
            </div>
          </div>

          <div
            className="relative mx-auto max-w-md"
            data-gsap="innovation-bottle"
          >
            {bottle && (
              <AssetPlaceholder
                assetId={bottle.id}
                label={bottle.label}
                aspectRatio={bottle.aspectRatio}
                variant="image"
                dimensions={bottle.dimensions}
                className="shadow-[var(--shadow-product)] ring-1 ring-crush-amber/20"
              />
            )}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
