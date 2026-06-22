"use client";

import { useState } from "react";
import { filterProducts } from "@/lib/filterProducts";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import FeatureBanners from "@/components/common/FeatureBanners";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import { womensSandals } from "@/app/data/womensSandals";

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
        title: "Apparel",
        image:
            "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Collections_3xPromo-Apparel_Lifestyle_Desktop_2x3_1.png?v=1751420661&width=1024",
        buttons: [
            { label: "SHOP MEN", href: "/collections/mens-apparel" },
            { label: "SHOP WOMEN", href: "/collections/womens-apparel" },
        ],
    },
    {
        title: "Accessories",
        image: "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Collections_3xPromo-Apparel_Lifestyle_Desktop_2x3_0dacc5af-924f-4c55-a08a-9d7deb5d061a.png?v=1751420659&width=1024",
        buttons: [
            { label: "SHOP MEN", href: "/collections/mens-accessories" },
            { label: "SHOP WOMEN", href: "/collections/womens-accessories" },
        ],
    },
];

export default function MensSaldalsPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(womensSandals, {
        filters,
    });
    return (
        <>
            <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
                <section className="mx-auto max-w-[1880px]">
                    <CollectionHero
                        image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Sandals_200bb6ff-be07-4a45-89d9-7098df582e87.jpg?v=1773874480&width=2048"
                        title="Women's Sandals"
                        description="Light, easy, and made for warm weather, these sandals are made to move. "
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Womens", href: "/collections/womens" },
                            { label: "Women's Sandals", href: "/collections/womens-sandals" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["5", "6", "7", "8", "9", "10", "11"]}
                        colors={["Black", "Grey", "Beige"]}
                        prices={["Under $75"]}
                        gender="women"
                        collectionType="sandals"
                    />

                    <ProductGrid
                        products={filteredProducts}
                    />

                    <FeatureBanners banners={banners} />
                    <ValuePillars />
                </section>
            </main>
        </>
    );
}