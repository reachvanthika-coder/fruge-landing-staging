import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { getAsset } from "@/lib/assets";
import { foundersCopy } from "@/lib/constants/copy";
import {
  Factory,
  GraduationCap,
  Handshake,
  Leaf,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const credentialIcons: Record<string, LucideIcon> = {
  GraduationCap,
  Factory,
  Leaf,
  ShieldCheck,
  Handshake,
};

export function FoundersSection() {
  const farm = getAsset("founders-farm-panel");
  const lab = getAsset("founders-lab-panel");
  const photo = getAsset("founders-couple-photo");

  return (
    <section
      id="founders"
      className="overflow-hidden bg-cream py-20 grain-overlay sm:py-28"
      aria-label="Founders"
      data-gsap="founders-section"
    >
      <SectionContainer maxWidth="wide">
        <SectionEyebrow>{foundersCopy.eyebrow}</SectionEyebrow>
        <h2
          className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          data-gsap="founders-headline"
        >
          <span className="block">{foundersCopy.headlineLine1}</span>
          <span className="mt-1 block text-red-drip">
            {foundersCopy.headlineLine2}
          </span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2" data-gsap="founders-panels">
          {farm && (
            <div data-animate="panel-reveal" data-gsap="founders-farm-panel">
              <AssetPlaceholder
                assetId={farm.id}
                label={farm.label}
                aspectRatio={farm.aspectRatio}
                variant="image"
                dimensions={farm.dimensions}
              />
            </div>
          )}
          {lab && (
            <div data-animate="panel-reveal" data-gsap="founders-lab-panel">
              <AssetPlaceholder
                assetId={lab.id}
                label={lab.label}
                aspectRatio={farm?.aspectRatio ?? "3/4"}
                variant="image"
                dimensions={lab.dimensions}
              />
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="space-y-5" data-gsap="founders-body">
            {foundersCopy.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-base leading-relaxed text-charcoal/90 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {photo && (
            <div
              className="mx-auto w-full max-w-xs overflow-hidden rounded-[var(--radius-card)] lg:max-w-sm"
              data-animate="scale-in"
              data-gsap="founders-photo"
            >
              <AssetPlaceholder
                assetId={photo.id}
                label={photo.label}
                aspectRatio={photo.aspectRatio}
                variant="image"
                dimensions={photo.dimensions}
              />
            </div>
          )}
        </div>

        <div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          data-gsap="founders-credentials"
        >
          {foundersCopy.credentials.map((cred) => {
            const Icon = credentialIcons[cred.icon];
            return (
              <div key={cred.label} data-gsap="founders-typewriter-tag">
                <IconBadge icon={Icon} label={cred.label} />
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
