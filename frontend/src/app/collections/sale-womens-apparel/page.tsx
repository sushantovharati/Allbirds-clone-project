"use client";

import { useState } from "react";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import CollectionIntro from "@/components/common/CollectionIntro";
import { saleWomensApparel } from "@/app/data/saleWomensApparel";
;

export default function SaleWomensApparelPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(saleWomensApparel, {
        filters,
    });
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionIntro
                    title="Sale Women's Apparel"
                    description="Stock up and shop these last-chance styles and colors before they’re gone for good."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Sale Women's Apparel", href: "/collections/sale-womens-apparel" }
                    ]}
                />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
                    colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Pink", "Yellow", "Green", "Blue", "Purple"]}
                    prices={["Under $75"]}
                    productTypes={["Shirts", "Socks", "Sweatpants", "Sweatshirts", "Tees", "Underwear"]}
                    materials={["Cotton", "Tree-Fiber-Blend", "Trino-Jersey", "Trino-Knit", "Wool"]}
                />
                <ProductGrid products={filteredProducts} />
                <ValuePillars />
            </section>
        </main>
    );
}




