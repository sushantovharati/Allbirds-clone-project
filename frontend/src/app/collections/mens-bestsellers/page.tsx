"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import CollectionHero from "@/components/common/CollectionHero";

export default function MensBestsellersPage() {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=men&badge=NEW"
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
        <CollectionHero
                  image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Bestsellers_Men_v2.jpg?v=1774031085&width=2048"
                  title="Men's Bestsellers"
                  description="Iconic comfort, exceptional style. Shop our most popular men’s shoes."
                  breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Mens", href: "/collections/mens" },
                    {label: " Men's Bestsellers", href: "/collections/mens-bestsellers"}
                  ]}
                />
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15"]}
          colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Yellow", "Green", "Blue"]}
          prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150", "Over $150"]}
          productTypes={["Everyday Sneakers", "High Tops", "Running Shoes", "Slip Ons", "Slippers", "Water-Repellent Shoes"]}
          materials={["Canvas", "Sugar", "Tree", "Wool"]}
          gender="men"
          collectionType="bestsellers"
        />
        <ProductGrid products={filteredProducts} />
        <ValuePillars />
      </section>
    </main>
  );
}