export type CatalogCategory = {
  id: string;
  sortOrder: number;
  title: string;
  tagline: string;
  backgroundColor: string;
  heroImageUrl: string | null;
  sizesSummary: string;
};

export type CatalogSku = {
  id: string;
  sortOrder: number;
  sizeLabel: string;
  imageUrl: string | null;
};

export type CatalogFlavor = {
  id: string;
  sortOrder: number;
  name: string;
  backgroundColor: string;
  tagline: string | null;
  description: string | null;
  featuredOnPage: boolean;
  flavorImageUrl: string | null;
  skus: CatalogSku[];
};

export type CatalogCategoryPage = {
  category: CatalogCategory;
  flavors: CatalogFlavor[];
  application: string;
};

export type ResolvedCatalogImage = {
  src: string;
  isPlaceholder: boolean;
};
