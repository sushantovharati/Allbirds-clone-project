"use client";

import { useState } from "react";
import CollectionHero from "@/components/common/CollectionHero";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionToolbar, {
    AppliedFilters,
} from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import { mensTerraluxCl } from "@/app/data/mensTerraluxCl";
import ProductGrid from "@/components/product/ProductGrid";
import FeatureBanners from "@/components/common/FeatureBanners";


const banners = [
    {
        title: "Shoes",
        image: "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Collections_3xPromo-Shoes_Lifestyle_Desktop_2x3-934x1360.jpg?v=1751420659&width=1024",
        buttons: [
            { label: "SHOP MEN", href: "/collections/mens" },
            { label: "SHOP WOMEN", href: "/collections/womens" },
        ],
    },
    {
        image: "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Collections_3xPromo-Apparel_Lifestyle_Desktop_2x3_0dacc5af-924f-4c55-a08a-9d7deb5d061a.png?v=1751420659&width=1024",
    },
    {
        title: "Apparel",
        image:
            "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Collections_3xPromo-Apparel_Lifestyle_Desktop_2x3_1.png?v=1751420661&width=1024",
        buttons: [
            { label: "SHOP MEN", href: "/collections/mens-apparel" },
            { label: "SHOP WOMEN", href: "/collections/womens-apparel" },
        ],
    },
];


export default function MensTerraluxClPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(mensTerraluxCl, {
        filters,
    });

    return (
        <>
            <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
                <section className="mx-auto max-w-[1880px]">
                    <CollectionHero
                        image="https://www.allbirds.com/cdn/shop/files/26Q1_Terralux_Collections-Header_Desktop_16x9_Mens.jpg?v=1771357128&width=2048"
                        title="Men's Terralux™ Collection"
                        description=""
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Mens", href: "/collections/mens" },
                            { label: "Men's Terralux™ Collection", href: "/collections/mens-terralux-cl" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"]}
                        prices={["$126 - $150"]}
                        gender="n/a"
                    />

                    <ProductGrid products={filteredProducts} />
                    <FeatureBanners banners={banners} />
                    <ValuePillars />
                </section>
            </main>
        </>
    );
}