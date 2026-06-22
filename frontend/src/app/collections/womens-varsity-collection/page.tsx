"use client";

import { useState } from "react";
import { filterProducts } from "@/lib/filterProducts";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import { womensVarsityCollection } from "@/app/data/womensVarsityCollection";

export default function WomensVarsityCollectionPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(womensVarsityCollection, {
        filters,
    });
    return (
        <>
            <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
                <section className="mx-auto max-w-[1880px]">
                    <CollectionHero
                        image="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_CollectionsHeader_NewArrivals_Women_Desktop.jpg?v=1767649995&width=2048"
                        title="Women's Varsity Collection"
                        description=""
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Womens", href: "/collections/mens" },
                            { label: "Women's Varsity Collection", href: "/collections/womens-varsity-collection" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"]}
                        prices={["$101 - $125"]}
                        gender="women"
                        collectionType="varsity-collection"
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