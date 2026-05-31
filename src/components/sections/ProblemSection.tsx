import { DataCalloutCard } from "@/components/ui/DataCalloutCard";
import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { getAsset } from "@/lib/assets";
import { problemCopy } from "@/lib/constants/copy";

const fruitAssets = [
  "problem-fruit-mango",
  "problem-fruit-cashew",
  "problem-fruit-kokum",
] as const;

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-forest py-20 text-cream grain-overlay sm:py-28"
      aria-label="The Problem"
      data-gsap="problem-section"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-around px-8"
        aria-hidden="true"
        data-gsap="problem-fruit-fall"
      >
        {fruitAssets.map((id) => {
          const asset = getAsset(id);
          if (!asset) return null;
          return (
            <AssetPlaceholder
              key={id}
              assetId={asset.id}
              label={asset.label}
              aspectRatio="1/1"
              variant="svg"
              dimensions={asset.dimensions}
              className="!h-16 !w-16 border-cream/20 bg-cream/5 !p-2"
            />
          );
        })}
      </div>

      <SectionContainer maxWidth="narrow" innerClassName="relative z-10">
        <SectionEyebrow light>{problemCopy.eyebrow}</SectionEyebrow>

        <h2
          className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl"
          data-gsap="problem-headline"
        >
          <span className="block">{problemCopy.headlineLine1}</span>
          <span className="mt-2 block text-red-drip">{problemCopy.headlineLine2}</span>
        </h2>

        <div className="mt-8 space-y-5" data-gsap="problem-body">
          {problemCopy.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-body text-base leading-relaxed text-cream/80 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="mt-12 grid gap-5 sm:grid-cols-3"
          data-gsap="problem-callouts"
        >
          {problemCopy.callouts.map((callout) => (
            <DataCalloutCard
              key={callout.label}
              value={callout.value}
              prefix={callout.prefix}
              suffix={callout.suffix}
              label={callout.label}
              light
            />
          ))}
        </div>

        <p
          className="mt-12 text-center font-display text-lg italic text-cream/70 sm:text-xl"
          data-gsap="problem-transition"
        >
          {problemCopy.transitionLine}
        </p>
      </SectionContainer>
    </section>
  );
}
