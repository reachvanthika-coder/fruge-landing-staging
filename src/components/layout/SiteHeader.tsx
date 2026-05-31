import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-charcoal-deep/80 backdrop-blur-md">
      <SectionContainer
        as="header"
        maxWidth="wide"
        innerClassName="flex min-h-16 items-center justify-between py-3"
      >
        <BrandLogo on="dark" priority />
        <Button href="#enquiry" variant="primary" size="sm">
          Request Samples
        </Button>
      </SectionContainer>
    </header>
  );
}
