import { PageAnimations } from "@/components/animations/PageAnimations";
import { SectionWave } from "@/components/ui/SectionWave";
import { DealerNetworkSection } from "@/components/sections/DealerNetworkSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OriginSection } from "@/components/sections/OriginSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductRiverSection } from "@/components/sections/ProductRiverSection";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";

export default function HomePage() {
  return (
    <>
      <PageAnimations />
      <main id="main-content" className="overflow-x-hidden bg-dark">
        <HeroSection />
        <SectionWave from="dark" to="cream" variant={0} />

        <ProductRiverSection />
        <SectionWave from="cream" to="sand" variant={1} />

        <OriginSection />
        <SectionWave from="sand" to="forest" variant={2} />

        <ProblemSection />
        <SectionWave from="forest" to="cream" variant={1} />

        <FoundersSection />
        {/* Founders + Why Partner share cream — no wave */}

        <WhyPartnerSection />
        <SectionWave from="cream" to="warmGrey" variant={0} />

        <DealerNetworkSection />
        <SectionWave from="warmGrey" to="dark" variant={1} />

        <EnquirySection />
        {/* Enquiry + Footer share dark — no wave */}

        <FooterSection />
      </main>
    </>
  );
}
