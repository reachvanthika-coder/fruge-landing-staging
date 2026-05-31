import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { getAsset } from "@/lib/assets";
import { dealerCopy } from "@/lib/constants/copy";
import { formatStat, getNetworkCounters } from "@/lib/site-config";
import { MapPin } from "lucide-react";

export function DealerNetworkSection() {
  const map = getAsset("dealer-india-map");
  const counters = getNetworkCounters();

  return (
    <section
      id="dealer-network"
      className="bg-warm-grey py-20 grain-overlay sm:py-28"
      aria-label="Dealer Network"
      data-gsap="dealer-section"
    >
      <SectionContainer maxWidth="wide">
        <SectionEyebrow>{dealerCopy.eyebrow}</SectionEyebrow>
        <h2
          className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          data-gsap="dealer-headline"
        >
          <span className="block">{dealerCopy.headlineLine1}</span>
          <span className="mt-1 block text-red-drip">
            {dealerCopy.headlineLine2}
          </span>
        </h2>

        <div className="mt-8 max-w-3xl space-y-5" data-gsap="dealer-body">
          {dealerCopy.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-body text-base leading-relaxed text-charcoal/90 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center"
          data-gsap="dealer-map-block"
        >
          <div
            className="relative"
            role="img"
            aria-label="Map showing Frugel dealer network across India, headquartered in Kundaim IDC, Goa"
            data-animate="scale-in"
            data-gsap="dealer-map"
          >
            {map && (
              <AssetPlaceholder
                assetId={map.id}
                label={map.label}
                aspectRatio={map.aspectRatio}
                variant="svg"
                dimensions={map.dimensions}
              />
            )}
            <div
              className="absolute left-[28%] top-[72%] flex h-6 w-6 items-center justify-center rounded-full bg-red-drip ring-4 ring-red-drip/30"
              aria-hidden="true"
              data-gsap="dealer-goa-pin"
            />
          </div>

          <ul className="space-y-4" data-gsap="dealer-callouts">
            {dealerCopy.mapCallouts.map((callout) => (
              <li
                key={callout}
                className="flex items-start gap-3 font-body text-sm text-charcoal sm:text-base"
              >
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-red-drip"
                  aria-hidden="true"
                />
                {callout}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          data-gsap="dealer-counters"
        >
          {counters.map((counter) => (
            <div
              key={counter.label}
              className="rounded-[var(--radius-card)] border border-red-drip/10 bg-cream p-5 text-center"
            >
              {counter.isGrowing ? (
                <>
                  <p className="font-display text-2xl font-bold text-red-drip sm:text-3xl">
                    {counter.label}
                  </p>
                  <p className="mt-1 font-body text-sm text-text-muted">
                    Pan India
                  </p>
                </>
              ) : counter.value !== null ? (
                <>
                  <p className="font-display text-3xl font-bold text-red-drip">
                    <AnimatedCounter
                      value={counter.value}
                      label={counter.label}
                    />
                  </p>
                  <p className="mt-1 font-body text-sm text-text-muted">
                    {counter.label}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display text-3xl font-bold text-red-drip">
                    {formatStat(counter.value)}
                  </p>
                  <p className="mt-1 font-body text-sm text-text-muted">
                    {counter.label}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center"
          data-gsap="dealer-ctas"
        >
          <Button href="#enquiry" size="lg">
            {dealerCopy.primaryCta}
          </Button>
          <Button href="#enquiry" variant="secondary" size="lg">
            {dealerCopy.secondaryCta}
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
