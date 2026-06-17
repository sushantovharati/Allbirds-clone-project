import { allProducts } from "@/app/data/allProducts";
import { AppliedFilters } from "@/components/common/CollectionToolbar";

type Product = (typeof allProducts)[number];


type FilterOptions = {
  filters: AppliedFilters;
  gender?: "men" | "women";
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