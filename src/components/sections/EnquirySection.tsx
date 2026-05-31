"use client";

import { AssetPlaceholder } from "@/components/ui/AssetPlaceholder";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { enquiryCopy, productCategories, businessTypes } from "@/lib/constants/copy";
import { getAsset } from "@/lib/assets";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type EnquiryFormData = {
  name: string;
  business: string;
  city: string;
  message: string;
};

export function EnquirySection() {
  const bg = getAsset("enquiry-orchard-bg");
  const bgMobile = getAsset("enquiry-orchard-bg-mobile");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormData>();

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const onSubmit = async (data: EnquiryFormData) => {
    console.log("Enquiry submitted:", { ...data, categories: selectedCategories });
    await new Promise((r) => setTimeout(r, 800));
    reset();
    setSelectedCategories([]);
    alert("Thank you — we'll respond within 24 hours.");
  };

  const inputClass = cn(
    "min-h-11 w-full rounded-[var(--radius-button)] border border-cream/20 bg-cream/10 px-4 py-2.5",
    "font-body text-base text-cream placeholder:text-cream/50",
    "focus:border-red-drip focus:outline-none focus:ring-2 focus:ring-red-drip/50",
  );

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-dark py-20 sm:py-28"
      aria-label="Enquiry"
      data-gsap="enquiry-section"
    >
      <div className="absolute inset-0 bg-dark" data-gsap="enquiry-bg">
        {bg && (
          <div className="hidden sm:block">
            <AssetPlaceholder
              assetId={bg.id}
              label={bg.label}
              aspectRatio="16/9"
              variant="image"
              dimensions={bg.dimensions}
              className="!absolute inset-0 !aspect-auto h-full w-full rounded-none border-0 opacity-40"
            />
          </div>
        )}
        {bgMobile && (
          <div className="sm:hidden">
            <AssetPlaceholder
              assetId={bgMobile.id}
              label={bgMobile.label}
              aspectRatio="3/4"
              variant="image"
              dimensions={bgMobile.dimensions}
              className="!absolute inset-0 !aspect-auto h-full w-full rounded-none border-0 opacity-40"
            />
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-dark/80 grain-overlay" />

      <SectionContainer maxWidth="wide" innerClassName="relative z-10">
        <SectionEyebrow script light>
          {enquiryCopy.eyebrowScript}
        </SectionEyebrow>
        <h2
          className="max-w-2xl font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl"
          data-gsap="enquiry-headline"
        >
          <span className="block">{enquiryCopy.headlineLine1}</span>
          <span className="mt-1 block text-red-drip">{enquiryCopy.headlineLine2}</span>
        </h2>

        <div className="mt-6 max-w-2xl space-y-4" data-gsap="enquiry-body">
          {enquiryCopy.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="font-body text-base leading-relaxed text-cream/80 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            data-gsap="enquiry-form"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block font-body text-sm text-cream/90">
                {enquiryCopy.formFields.name}
              </label>
              <input id="name" type="text" autoComplete="name" className={inputClass}
                {...register("name", { required: "Name is required" })} />
              {errors.name && (
                <p role="alert" className="mt-1 text-sm text-red-drip">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="business" className="mb-1.5 block font-body text-sm text-cream/90">
                {enquiryCopy.formFields.business}
              </label>
              <input id="business" type="text" list="business-types" className={inputClass}
                placeholder={enquiryCopy.formFields.businessHint}
                {...register("business", { required: "Business name & type is required" })} />
              <datalist id="business-types">
                {businessTypes.map((t) => <option key={t} value={t} />)}
              </datalist>
              {errors.business && (
                <p role="alert" className="mt-1 text-sm text-red-drip">{errors.business.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="mb-1.5 block font-body text-sm text-cream/90">
                {enquiryCopy.formFields.city}
              </label>
              <input id="city" type="text" autoComplete="address-level2" className={inputClass}
                {...register("city", { required: "City / region is required" })} />
              {errors.city && (
                <p role="alert" className="mt-1 text-sm text-red-drip">{errors.city.message}</p>
              )}
            </div>

            <fieldset>
              <legend className="mb-2 font-body text-sm text-cream/90">
                {enquiryCopy.formFields.products}
              </legend>
              <div className="flex flex-wrap gap-2">
                {productCategories.map((category) => {
                  const selected = selectedCategories.includes(category);
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => toggleCategory(category)}
                      aria-pressed={selected}
                      className={cn(
                        "min-h-10 rounded-full border px-4 py-2 font-body text-sm transition-colors",
                        selected
                          ? "border-red-drip bg-red-drip text-cream"
                          : "border-cream/30 text-cream/80 hover:border-red-drip/50",
                      )}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-body text-sm text-cream/90">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={enquiryCopy.formFields.message}
                className={cn(inputClass, "min-h-[120px] resize-y")}
                {...register("message", { required: "Please tell us about your kitchen or business" })}
              />
              {errors.message && (
                <p role="alert" className="mt-1 text-sm text-red-drip">{errors.message.message}</p>
              )}
            </div>

            <div>
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending…" : enquiryCopy.submitCta}
              </Button>
              <p className="mt-3 font-body text-sm italic text-cream/60">
                {enquiryCopy.trustLine}
              </p>
            </div>
          </form>

          <aside
            className="rounded-[var(--radius-card)] border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm"
            data-gsap="enquiry-contact"
            aria-label="Contact details"
          >
            <h3 className="mb-6 font-display text-xl font-bold text-cream">Contact</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 font-body text-cream/85 transition-colors hover:text-red-drip"
                >
                  <Mail className="h-5 w-5 shrink-0 text-red-drip" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 font-body text-cream/85 transition-colors hover:text-red-drip"
                >
                  <Phone className="h-5 w-5 shrink-0 text-red-drip" aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-cream/85">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-drip" aria-hidden="true" />
                {siteConfig.contact.address}
              </li>
              <li>
                <a
                  href={siteConfig.contact.websiteUrl}
                  className="flex items-center gap-3 font-body text-cream/85 transition-colors hover:text-red-drip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-5 w-5 shrink-0 text-red-drip" aria-hidden="true" />
                  {siteConfig.contact.websiteDisplay}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}
