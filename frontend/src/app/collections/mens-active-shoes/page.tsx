"use client";

import { useState } from "react";
import { filterProducts } from "@/lib/filterProducts";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import { mensActiveshoes } from "@/app/data/mensActiveShoes";
import MensActiveShoesHero from "@/components/mensActiveShoes/MensActiveShoesHero";


export default function MensActiveShoesPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(mensActiveshoes, {
        filters,
    });

    return (
        <>
            <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
                <section className="mx-auto max-w-[1880px]">
                    <MensActiveShoesHero
                        title="Men's Active Shoes"
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Mens", href: "/collections/mens" },
                            { label: "Men's Active Shoes", href: "/collections/mens-active-shoes" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"]}
                        colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Green", "Blue"]}
                        prices={["Under $75", "$76 - $100", "$126 - $150"]}
                        productTypes={["Everyday Sneakers", "Golf", "Hiking Shoes", "Running Shoes", "Slip Ons", "Water-Repellent Shoes"]}
                        materials={["Tree", "Wool"]}
                        gender="men"
                        collectionType="active-shoes"
                    />

                    <ProductGrid
                        products={filteredProducts}
                    />
                    <ValuePillars />
                </section>
            </main>
        </>
    );
}