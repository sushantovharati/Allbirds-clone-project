"use client";

import { useState } from "react";

import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import WomensSocksHero from "@/components/womens-socks/WomensSocksHero";
import { womensNewArrivals } from "@/app/data/womensNewArrivals";
import CollectionToolbar, {
  AppliedFilters,
} from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import { socks } from "@/app/data/socks";
;

export default function WomensSocksPage() {
  const [filters, setFilters] = useState<AppliedFilters>({});

  const filteredProducts = filterProducts(socks, {
    filters,
  });
  return (
    <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
      <section className="mx-auto max-w-[1880px]">
        <WomensSocksHero />
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["S", "M", "L", "XL"]}
          colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Pink", "Yellow", "Green", "Blue", "Purple"]}
          prices={["Under $75"]}
          materials={["Cotton", "Tree-Fiber-Blend", "Trino-Knit", "Wool"]}
          gender="women"
          collectionType="socks"
        />
        <ProductGrid products={filteredProducts} />
        <ValuePillars />
      </section>
    </main>
  );
}




