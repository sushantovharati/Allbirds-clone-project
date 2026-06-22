"use client";

import { useState } from "react";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import CollectionIntro from "@/components/common/CollectionIntro";
import { womensApparel } from "@/app/data/womenApparel";
;

export default function MensApparelPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(womensApparel, {
        filters,
    });
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionIntro
                    title="Women's Apparel"
                    description="From ultra-soft tees to breathable socks and comfortable sweats, our men's apparel collection is designed for exceptional everyday comfort."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Womens", href: "/collections/womens" },
                        { label: "Women's Apparel", href: "/collections/womens-apparel" },
                    ]}
                />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
                    colors={["Black", "White", "Brown", "Pink", "Green", "Purple", "Grey", "Beige", "Red", "Yellow", "Blue"]}
                    prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150", "Over $150"]}
                    productTypes={["Shirts", "Socks", "Sweatpants", "Sweatshirts", "Tees", "Underwear"]}
                    materials={["Cotton", "Tree-Fiber-Blend", "trino-jersey", "Trino-Knit", "Wool"]}
                    gender="women"
                    collectionType="apparel"
                />
                <ProductGrid products={filteredProducts} />
                <ValuePillars />
            </section>
        </main>
    );
}




