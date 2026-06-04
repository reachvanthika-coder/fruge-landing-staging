import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

type CategoryEnquiryCtaProps = {
  categoryTitle: string;
};

export function CategoryEnquiryCta({ categoryTitle }: CategoryEnquiryCtaProps) {
  return (
    <section
      className="bg-dark py-16 text-cream grain-overlay sm:py-20"
      aria-label="Request samples"
    >
      <SectionContainer maxWidth="narrow" innerClassName="text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Ready to try {categoryTitle}?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-base text-cream/80 sm:text-lg">
          Tell us about your kitchen and we&apos;ll help you pick the right flavours
          and pack sizes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/#enquiry" size="lg">
            Send an enquiry
          </Button>
          <Button
            href="/products"
            variant="secondary"
            size="lg"
            className="border-cream/30 text-cream hover:bg-cream/10"
          >
            Browse all products
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
