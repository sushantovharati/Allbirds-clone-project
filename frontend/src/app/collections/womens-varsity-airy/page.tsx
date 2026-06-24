"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import { filterProducts } from "@/lib/filterProducts";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import FeatureBanners from "@/components/common/FeatureBanners";

const banners = [
    {
        title: "Men's",
        image: "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_01_Lifestyle.jpg?v=1774909856&width=1024",
        buttons: [
            { label: "SHOP MEN'S", href: "/collections/mens" },
        ],
    },
    {
        title: "Women's",
        image: "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_04_Lifestyle.jpg?v=1774909855&width=1024",
        buttons: [
            { label: "SHOP WOMEN'S", href: "/collections/womens" },
        ],
    },
    {
        title: "Apparel",
        image:
            "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Collections_3xPromo-Apparel_Lifestyle_Desktop_2x3_1.png?v=1751420661&width=1024",
        buttons: [
            { label: "SHOP APPAREL", href: "/collections/socks" },
        ],
    },
];

export default function WomensVarsityCollectionPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=women&family=women-varsity"
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
                    <div className="mt-20" />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"]}
                        prices={["$101 - $125"]}
                        gender="n/a"
                        collectionType="varsity-collection"
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