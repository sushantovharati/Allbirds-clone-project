"use client";

import { useState } from "react";
import { filterProducts } from "@/lib/filterProducts";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import { womensActiveShoes } from "@/app/data/womensActiveShoes";
import WomensActiveShoesHero from "@/components/womensActiveShoes/WomensActiveShoesHero";


export default function MensActiveShoesPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(womensActiveShoes, {
        filters,
    });

    return (
        <>
            <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
                <section className="mx-auto max-w-[1880px]">
                    <WomensActiveShoesHero
                        title="Women's Active Shoes"
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Womens", href: "/collections/womens" },
                            { label: "Women's Active Shoes", href: "/collections/womens-active-shoes" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"]}
                        colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Orange", "Green", "Blue", "Purple"]}
                        prices={["Under $75", "$126 - $150"]}
                        productTypes={["Everyday Sneakers", "Hiking Shoes", "Running Shoes", "Slip Ons", "Water-Repellent Shoes"]}
                        materials={["Tree", "Wool"]}
                        gender="women"
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