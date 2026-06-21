import { SiteAsset } from "@/components/ui/SiteAsset";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SoulText } from "@/components/ui/SoulText";
import { getAsset } from "@/lib/assets";
import { originCopy } from "@/lib/constants/copy";
import { Leaf, MapPin } from "lucide-react";

const markerIcons = {
  MapPin,
  Leaf,
};

export function OriginSection() {
  const map = getAsset("origin-goa-map");
  const farm = getAsset("origin-farm-panel");
  const factory = getAsset("origin-factory-panel");

  return (
    <section
      id="origin"
      className="overflow-hidden bg-goa-sand py-20 grain-overlay sm:py-28"
      aria-label="Born in Goa"
      data-gsap="origin-section"
    >
      <SectionContainer maxWidth="wide">
        <SectionEyebrow script>{originCopy.eyebrowScript}</SectionEyebrow>
        <h2
          className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl"
          data-gsap="origin-headline"
        >
          <span className="block">{originCopy.headlineLine1}</span>
          <span className="mt-1 block text-terracotta">
            {originCopy.headlineLine2}
          </span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2" data-gsap="origin-panels">
          {farm && (
            <div data-animate="panel-reveal" data-gsap="origin-farm-panel">
              <SiteAsset asset={farm} objectFit="cover" />
            </div>
          )}
          {factory && (
            <div data-animate="panel-reveal" data-gsap="origin-factory-panel">
              <SiteAsset asset={factory} objectFit="cover" />
            </div>
          )}
        </div>

        <div className="mt-10 space-y-5" data-gsap="origin-body">
          {originCopy.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="max-w-3xl font-body text-base leading-relaxed text-charcoal/90 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote
          className="mx-auto mt-12 max-w-2xl text-center"
          data-gsap="origin-pull-quote"
        >
          <SoulText className="text-2xl leading-snug sm:text-3xl lg:text-4xl">
            &ldquo;{originCopy.pullQuote}&rdquo;
          </SoulText>
        </blockquote>

        <div
          className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          data-gsap="origin-map-block"
        >
          {map && (
            <div
              role="img"
              aria-label="Illustrated map of Goa showing Frugel factory and produce regions"
              data-animate="scale-in"
              data-gsap="origin-map"
            >
              <SiteAsset asset={map} objectFit="contain" />
            </div>
          )}

          <ul className="space-y-4" data-gsap="origin-markers">
            {originCopy.mapMarkers.map((marker) => {
              const Icon = markerIcons[marker.icon];
              return (
                <li
                  key={marker.label}
                  className="flex items-start gap-3 font-body text-sm text-charcoal sm:text-base"
                >
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-drip"
                    aria-hidden="true"
                  />
                  {marker.label}
                </li>
              );
            })}
          </ul>
        </div>
      </SectionContainer>
    </section>
  );
}
