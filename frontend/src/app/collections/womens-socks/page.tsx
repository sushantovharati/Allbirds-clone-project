"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import WomensSocksHero from "@/components/womens-socks/WomensSocksHero";
import CollectionToolbar, {
  AppliedFilters,
} from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
;

export default function WomensSocksPage() {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=unisex&category=socks"
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(products, {
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




