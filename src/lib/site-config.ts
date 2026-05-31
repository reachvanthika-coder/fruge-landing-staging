/**
 * ═══════════════════════════════════════════════════════════════════
 * FRUGEL — SITE CONFIGURATION (Single Source of Truth)
 * ═══════════════════════════════════════════════════════════════════
 *
 * Update values here ONLY. Changes propagate across the entire site:
 * footer, enquiry form, dealer counters, legal bar, and future pages.
 *
 * See ASSETS.md → "Site Configuration" for the content-team checklist.
 */

export const siteConfig = {
  brand: {
    name: "Frugel",
    tagline: "Taste Meets Soul",
    subBrand: "The Goan Delicacy",
    positioning: "The Professional Choice",
    company: "SN Ventures",
    established: "2022",
  },

  /** Contact — replace placeholders when confirmed */
  contact: {
    email: "info.snventures@gmail.com",
    phone: "+91 88300 87472",
    websiteDisplay: "www.frugel.in",
    websiteUrl: "https://www.frugel.in",
    address: "Plot No. 258, Near Volvo, Kundaim IDC, Goa - 403115",
  },

  /** Legal & compliance */
  legal: {
    /** Set to your FSSAI licence number when ready, e.g. "12345678901234" */
    fssaiLicense: null as string | null,
    copyrightYear: 2024,
  },

  /**
   * Dealer network stats — set numeric values when known.
   * `null` displays "—" until you fill them in.
   */
  network: {
    bakeryPartners: null as number | null,
    cities: null as number | null,
    states: null as number | null,
    /** Label for the 4th counter (always text, not a number) */
    growingLabel: "Growing →",
  },

  social: {
    instagram: "#",
    linkedin: "#",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Display a network stat or placeholder em-dash */
export function formatStat(value: number | null | undefined): string {
  if (value === null || value === undefined) return "—";
  return value.toLocaleString("en-IN");
}

export function getFssaiDisplay(): string {
  return siteConfig.legal.fssaiLicense ?? "[FSSAI number to be added]";
}

export function getLegalCopyright(): string {
  const { brand, contact, legal } = siteConfig;
  return `© ${legal.copyrightYear} ${brand.name} · ${brand.company} · ${contact.address}`;
}

export function getFssaiLine(): string {
  return `FSSAI Licence: ${getFssaiDisplay()} · All Rights Reserved`;
}

export function getAboutSecondary(): string {
  return `Manufactured & marketed by ${siteConfig.brand.company}, Kundaim IDC, Goa. FSSAI Compliant.`;
}

export type NetworkCounter = {
  label: string;
  value: number | null;
  isGrowing?: boolean;
};

export function getNetworkCounters(): NetworkCounter[] {
  const { network } = siteConfig;
  return [
    { label: "Bakery Partners", value: network.bakeryPartners },
    { label: "Cities", value: network.cities },
    { label: "States", value: network.states },
    { label: network.growingLabel, value: null, isGrowing: true },
  ];
}

export type ConnectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export function getConnectLinks(): ConnectLink[] {
  const { contact, social } = siteConfig;
  return [
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "Instagram", href: social.instagram, external: true },
    { label: "LinkedIn", href: social.linkedin, external: true },
    { label: contact.websiteDisplay, href: contact.websiteUrl, external: true },
  ];
}

export function getPhoneTel(): string {
  return siteConfig.contact.phone.replace(/\s/g, "");
}
