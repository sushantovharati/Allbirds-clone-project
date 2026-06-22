import { AppliedFilters } from "@/components/common/CollectionToolbar";

export type Product = {
  slug: string;
  title: string;
  price: string;
  color: string;
  filterColor: string;
  edition?: string;
  badge?: string;
  family: string;

  productType: string;
  material: string;
  priceRange: string;
  gender: "men" | "women" | "unisex";
  collection: string;

  discountPercent?: number,
  sale?: boolean,

  colors: string[];
  sizes: string[];
  images: string[];
};

type FilterOptions = {
  filters: AppliedFilters;
  gender?: "men" | "women" | "unisex";
  collection?: string;
};

export function filterProducts(
  products: Product[],
  { filters, gender, collection }: FilterOptions
): Product[] {
  return products.filter((product) => {
    if (gender && product.gender !== gender) return false;
    if (collection && product.collection !== collection) return false;
    if (filters.size && !product.sizes.includes(filters.size)) return false;
    if (filters.color && product.filterColor !== filters.color) return false;
    if (filters.price && product.priceRange !== filters.price) return false;
    if (filters.type && product.productType !== filters.type) return false;
    if (filters.material && product.material !== filters.material) return false;

    return true;
  });
}