"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionCards from "@/components/new-arrivals/CollectionCards";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionToolbar, {
  AppliedFilters,
} from "@/components/common/CollectionToolbar";

import { filterProducts } from "@/lib/filterProducts";

export default function ShopAllPage() {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=men,women,unisex"
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(products, {
        filters,
    });

  return (
    <main className="bg-[#ece9e2] px-6 pb-10 pt-32">
      <div className="mx-auto max-w-[1800px]">
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["XS","S","M","L","XL","XXL","XXXL","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","15","11T","12T","13T","1Y","2Y","3Y","W4.5/M3","W5/M3","W5.5/M4","W6/M4","W6.5/M5","W7/M5","W7.5/M6","W8/M6","W8.5/M7","W9/M7","W9.5/M8","W10/M8","W10.5/M9","W11/M9","W11.5/M10","W12/M10","W12.5/M11","W13/M11","W13.5/M12","W14/M12","W14.5/M13","W15/M13","W15.5/M14","W16/M14"]}
          colors={["Black","White","Red","Green","Grey","Beige","Yellow","Blue"]}
          prices={["Under $75","$76 - $100","$101 - $125","$126 - $150","Over $150"]}
          productTypes={["Everyday Sneakers","Flats","Fluffs","Golf","High Tops","Hiking Shoes","Long Sleeve Tees","Running Shoes","Sandals","Shirts","Slip Ons","Slippers","Socks","Sweatpants","Sweatshirts","Tees","Underwear","Water-Repellent Shoes"]}
          materials={["Alternative-Leather","Canvas","Corduroy","Cotton","Cozy-Collection","Luxe-Collection","Plant","Sugar","Tree","Tree-Fiber-Blend","Trino-Jersey","Trino-Knit","Wool"]}
          gender="n/a"
        />

        <ProductGrid products={filteredProducts} />

        <CollectionCards />
        <ValuePillars />
      </div>
    </main>
  );
}