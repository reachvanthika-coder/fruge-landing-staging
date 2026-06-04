import { CategoryPageView } from "@/components/category/CategoryPageView";
import {
  getAllCategoryIds,
  loadCategoryPage,
} from "@/lib/catalog/load-catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCategoryIds().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = loadCategoryPage(slug);
  if (!page) return { title: "Product not found" };

  const { category, application } = page;
  return {
    title: `${category.title} — Frugel`,
    description: `${category.tagline} ${application}. Sizes: ${category.sizesSummary}.`,
    openGraph: {
      title: `${category.title} | Frugel`,
      description: category.tagline,
    },
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = loadCategoryPage(slug);
  if (!page) notFound();

  return <CategoryPageView page={page} />;
}
