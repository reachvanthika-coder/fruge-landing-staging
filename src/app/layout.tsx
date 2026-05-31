import { GsapProvider } from "@/components/providers/GsapProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/ui/SkipLink";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Sacramento } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  variable: "--font-sacramento",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Frugel — Taste Meets Soul | Professional Fruit Ingredients from Goa",
  description:
    "Six product ranges crafted in Goa for professional kitchens across India. Glazes, Crushes, Syrups, Fruit Fillings, Fondants & Chocolate Sauce.",
  openGraph: {
    title: "Frugel — Your Bakery Deserves Ingredients With a Story",
    description: "Taste Meets Soul. Manufactured by SN Ventures, Kundaim IDC, Goa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${sacramento.variable}`}
    >
      <body>
        <GsapProvider>
          <SkipLink />
          <SiteHeader />
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
