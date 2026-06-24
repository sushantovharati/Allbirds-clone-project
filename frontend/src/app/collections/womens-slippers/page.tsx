"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import { filterProducts } from "@/lib/filterProducts";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import FeatureBanners from "@/components/common/FeatureBanners";
import SlippersHero from "@/components/womens-slippers/slippersHero";


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


export default function MensVarsityCollectionPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=women&family=slipper"
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(products, {
        filters,
    });
    return (
        <>
            <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
                <section className="mx-auto max-w-[1880px]">
                    <SlippersHero
                        title="Women's Slippers Shop"
                        description="Unreasonably Soft. Unmistakably Stylish."
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Mens", href: "/collections/mens" },
                            { label: "Women's Slippers Shop", href: "/collections/womens-slippers" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["W4.5/M3", "W5.5/M4", "W6.5/M5", "W7.5/M6", "W8.5/M7", "W9.5/M8", "W10.5/M9", "W11.5/M10", "W12.5/M11", "W13.5/M12", "W14.5/M13", "W15.5/M14"]}
                        prices={["Under $75"]}
                        gender="women"
                        collectionType="slippers"
                    />

                    <FeatureBanners banners={banners} />

                    <ValuePillars />
                </section>
            </main>
        </>
    );
}