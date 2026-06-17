"use client";

import { useState } from "react";
import ProductGrid from "@/components/shop-all/ProductGrid";
import CollectionCards from "@/components/new-arrivals/CollectionCards";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionToolbar, {
  AppliedFilters,
} from "@/components/common/CollectionToolbar";
import { allProducts } from "@/app/data/allProducts";

import { filterProducts } from "@/lib/filterProducts";

export default function ShopAllPage() {
  const [filters, setFilters] = useState<AppliedFilters>({});

  const filteredProducts = filterProducts(allProducts, {
  filters,
});

  return (
    <main className="bg-[#ece9e2] px-6 pb-10 pt-32">
      <div className="mx-auto max-w-[1800px]">
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          showMaterial
          colors={[
            "Black",
            "White",
            "Red",
            "Green",
            "Grey",
            "Beige",
            "Yellow",
            "Blue",
          ]}
          productTypes={["Everyday Sneakers", "Slip Ons", "Socks"]}
          materials={[
            "Canvas",
            "Cotton",
            "Tree",
            "Tree-Fiber-Blend",
            "Trino-Knit",
          ]}
          gender="n/a"
        />

        <ProductGrid products={filteredProducts} />

        <CollectionCards />
        <ValuePillars />
      </div>
    </main>
  );
}