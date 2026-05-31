import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SoulText } from "@/components/ui/SoulText";
import { getAsset } from "@/lib/assets";
import { heroCopy } from "@/lib/constants/copy";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const productArrangement = getAsset("hero-product-arrangement");
  const dripSvg = getAsset("hero-drip-svg");

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-end overflow-hidden bg-dark grain-overlay"
      aria-label="Hero"
      data-gsap="hero-section"
    >
      {/* Product arrangement background */}
      {productArrangement && (
        <div
          className="absolute inset-0 opacity-40"
          data-gsap="hero-products"
          aria-hidden="true"
        >
          <AssetPlaceholder
            assetId={productArrangement.id}
            label={productArrangement.label}
            aspectRatio="16/9"
            variant="image"
            dimensions={productArrangement.dimensions}
            className="!absolute inset-0 !aspect-auto h-full w-full rounded-none border-0 opacity-60"
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/90" />

      <SectionContainer
        maxWidth="wide"
        innerClassName="relative z-10 flex flex-col items-center pb-16 pt-28 text-center sm:pb-20 sm:pt-36"
      >
        {/* Logo + drip animation area */}
        <div className="mb-8 flex flex-col items-center" data-gsap="hero-logo-drip">
          {dripSvg && (
            <div className="mb-4 hidden sm:block" aria-hidden="true">
              <AssetPlaceholder
                assetId={dripSvg.id}
                label={dripSvg.label}
                aspectRatio="1/1"
                variant="svg"
                dimensions={dripSvg.dimensions}
                className="!h-16 !w-16 border-red-drip/30 !p-2"
              />
            </div>
          )}
          <BrandLogo on="dark" priority className="!h-14 sm:!h-16" />
        </div>

        <div className="mb-6" data-gsap="hero-script">
          <SoulText light>{heroCopy.scriptTagline}</SoulText>
        </div>

        <h1
          className="max-w-4xl font-display text-4xl font-bold leading-[1.08] text-cream sm:text-5xl lg:text-7xl"
          data-gsap="hero-headline"
        >
          <span className="block">{heroCopy.headlineLine1}</span>
          <span className="mt-1 block text-red-drip">{heroCopy.headlineLine2}</span>
        </h1>

        <p
          className="mt-6 max-w-xl whitespace-pre-line font-body text-base leading-relaxed text-cream/75 sm:text-lg"
          data-gsap="hero-body"
        >
          {heroCopy.body}
        </p>

        <div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          data-gsap="hero-ctas"
        >
          <Button href="#product-river" size="lg">
            {heroCopy.primaryCta}
          </Button>
          <Button
            href="#enquiry"
            variant="secondary"
            size="lg"
            className="border-cream/30 text-cream hover:bg-cream/10"
          >
            {heroCopy.secondaryCta}
          </Button>
        </div>

        <div className="mt-10 space-y-2" data-gsap="hero-trust">
          <p className="font-body text-xs uppercase tracking-widest text-cream/50">
            {heroCopy.categoryTicker}
          </p>
          <p className="font-body text-sm text-cream/60">{heroCopy.trustLine}</p>
        </div>
      </SectionContainer>

      <div
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
        data-gsap="hero-scroll-indicator"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-cream/40" />
      </div>
    </section>
  );
}
