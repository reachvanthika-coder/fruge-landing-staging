import { HeaderNav, MobileHeaderMenu } from "@/components/layout/HeaderNav";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-white/10 bg-charcoal-deep/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <MobileHeaderMenu className="shrink-0" />

        <BrandLogo on="dark" priority />

        <HeaderNav />

        <Button
          href="#enquiry"
          variant="primary"
          size="sm"
          className="ml-auto shrink-0 whitespace-nowrap"
        >
          <span className="hidden sm:inline">Request Samples</span>
          <span className="sm:hidden">Samples</span>
        </Button>
      </div>
    </header>
  );
}
