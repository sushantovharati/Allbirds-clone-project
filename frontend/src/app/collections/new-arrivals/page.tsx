"use client";

import { useState } from "react";
// import ProductGrid from "@/components/shop-all/ProductGrid";
import CollectionCards from "@/components/new-arrivals/CollectionCards";
import ValuePillars from "@/components/home/ValuePillars";
import { newArrivals } from "@/app/data/newArrivals";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import ProductGrid from "@/components/product/ProductGrid";

export default function NewArrivalsPage() {

  const [filters, setFilters] = useState<AppliedFilters>({});

  const filteredProducts = filterProducts(newArrivals, {
    filters,
  });

  return (
    <main className="bg-[#ece9e2] px-6 pb-10 pt-32">
      <div className="mx-auto max-w-[1800px]">
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["S","M","L","XL","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","15"]}
          colors={["Black", "White", "Red", "Green", "Grey", "Beige", "Yellow", "Blue",]}
          prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150", "Over $150"]}
          productTypes={["Everyday Sneakers", "Flats", "Running Shoes", "Slip Ons", "Slippers", "Socks"]}
          materials={["Alternative-leather", "Canvas", "Cotton", "Cozy-collection", "Sugar", "Tree",]}
          gender="n/a"
        />
        <ProductGrid products={filteredProducts} />
        <CollectionCards />
        <ValuePillars />
      </div>
    </main>
  );
}