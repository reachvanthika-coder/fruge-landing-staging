import { ReasonCard } from "@/components/ui/ReasonCard";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { whyPartnerCopy } from "@/lib/constants/copy";
import { reasonCards } from "@/lib/constants/reasons";

export function WhyPartnerSection() {
  return (
    <section
      id="why-partner"
      className="bg-cream py-20 grain-overlay sm:py-28"
      aria-label="Why Partner"
      data-gsap="why-partner-section"
    >
      <SectionContainer maxWidth="wide">
        <SectionEyebrow>{whyPartnerCopy.eyebrow}</SectionEyebrow>
        <h2
          className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          data-gsap="why-partner-headline"
        >
          <span className="block">{whyPartnerCopy.headlineLine1}</span>
          <span className="mt-1 block text-red-drip">
            {whyPartnerCopy.headlineLine2}
          </span>
        </h2>

        <p
          className="mt-6 max-w-3xl font-body text-base leading-relaxed text-text-muted sm:text-lg"
          data-gsap="why-partner-intro"
        >
          {whyPartnerCopy.intro}
        </p>

        <div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-gsap="why-partner-grid"
        >
          {reasonCards.map((card) => (
            <ReasonCard key={card.title} card={card} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
