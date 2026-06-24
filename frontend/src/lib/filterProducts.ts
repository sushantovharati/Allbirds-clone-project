import { AppliedFilters } from "@/components/common/CollectionToolbar";

export type Product = {
  slug: string;
  title: string;
  price: number;
  quantity: number;

  category: string;
  gender: "men" | "women" | "unisex";

  productTypes: string[];
  materials: string[];

  color: {
    name: string;
    group: string;
    code: string;
  };

  edition?: string;
  family: string;
  badge?: string;

  sale?: boolean;
  discountPercent?: number;

  sizes: string[];

  images: {
    url: string;
    filename: string;
  }[];
};

type FilterOptions = {
  filters: AppliedFilters;
  gender?: "men" | "women" | "unisex";
  collection?: string;
};

export function filterProducts(
  products: Product[],
  { filters, gender }: FilterOptions
): Product[] {
  return products.filter((product) => {
    if (gender && product.gender !== gender) return false;

    if (filters.size && !product.sizes.includes(filters.size)) return false;

    if (filters.color && product.color.group !== filters.color)
      return false;

    if (filters.type && !product.productTypes.includes(filters.type))
      return false;

    if (
      filters.material &&
      !product.materials.includes(filters.material)
    )
      return false;

    if (filters.price) {
      const price = product.price;

      switch (filters.price) {
        case "$0 - $50":
          if (price > 50) return false;
          break;

        case "$51 - $75":
          if (price < 51 || price > 75) return false;
          break;

        case "$76 - $100":
          if (price < 76 || price > 100) return false;
          break;

        case "$101 - $125":
          if (price < 101 || price > 125) return false;
          break;

        case "$126+":
          if (price < 126) return false;
          break;
      }
    }

    return true;
  });
}