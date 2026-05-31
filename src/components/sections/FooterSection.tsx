import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { DripDivider } from "@/components/ui/DripDivider";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SoulText } from "@/components/ui/SoulText";
import { footerCopy } from "@/lib/constants/copy";
import { getAsset } from "@/lib/assets";
import {
  getAboutSecondary,
  getConnectLinks,
  getFssaiLine,
  getLegalCopyright,
  siteConfig,
} from "@/lib/site-config";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function FooterSection() {
  const dripBackdrop = getAsset("footer-drip-backdrop");
  const connectLinks = getConnectLinks();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-dark py-16 text-cream grain-overlay sm:py-20"
      aria-label="Footer"
      data-gsap="footer-section"
    >
      {dripBackdrop && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 flex justify-center opacity-10"
          aria-hidden="true"
          data-animate="scale-in"
          data-gsap="footer-drip-backdrop"
        >
          <AssetPlaceholder
            assetId={dripBackdrop.id}
            label={dripBackdrop.label}
            aspectRatio={dripBackdrop.aspectRatio}
            variant="svg"
            dimensions={dripBackdrop.dimensions}
            className="!w-full max-w-2xl border-0 bg-transparent"
          />
        </div>
      )}

      <SectionContainer maxWidth="wide" innerClassName="relative z-10">
        <BrandLogo on="dark" className="mb-10" />

        <div data-gsap="footer-tagline">
          <p className="max-w-3xl font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-6xl">
            {footerCopy.taglineLine1}
          </p>
          <p className="max-w-3xl font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-6xl">
            {footerCopy.taglineLine2}
          </p>
        </div>

        <div data-gsap="footer-script-closer">
          <SoulText light className="mt-6 text-2xl sm:text-3xl">
            {footerCopy.scriptCloser}
          </SoulText>
        </div>

        <p className="mt-8 max-w-xl font-body text-sm leading-relaxed text-cream/70 sm:text-base">
          {footerCopy.about}
        </p>
        <p className="mt-3 max-w-xl font-body text-sm text-cream/50">
          {getAboutSecondary()}
        </p>

        <div
          className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          data-gsap="footer-columns"
        >
          {Object.entries(footerCopy.columns).map(([key, column]) => (
            <nav key={key} aria-label={column.title}>
              <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-red-drip">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-body text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Connect">
            <h3 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-red-drip">
              Connect
            </h3>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/70 transition-colors hover:text-cream"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex gap-4" data-gsap="footer-social">
          <Link
            href={siteConfig.social.instagram}
            aria-label="Frugel on Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-cream/10 text-cream transition-colors hover:bg-red-drip"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            aria-label="Frugel on LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-cream/10 text-cream transition-colors hover:bg-red-drip"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>

        <DripDivider variant="footer" className="mt-12" />

        <div className="mt-8 border-t border-cream/10 pt-8">
          <p className="font-body text-sm text-cream/50">{getLegalCopyright()}</p>
          <p className="mt-1 font-body text-sm text-cream/40">{getFssaiLine()}</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
