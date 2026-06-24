"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import { filterProducts } from "@/lib/filterProducts";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import FeatureBanners from "@/components/common/FeatureBanners";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import DasherCard from "@/components/mens-dasher-nz-cl/DasherCard";

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

export default function MensDasherNzClPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=men&family=dasher-nz"
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
                    <CollectionHero
                        image="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Collections-Header-Men_Desktop_16x9_2fb5001a-b050-4cbe-9e81-8122ed90ef3e.jpg?v=1770075693&width=2048"
                        title="Men's Dasher NZ Collection"
                        description=""
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Mens", href: "/collections/mens" },
                            { label: "Men's Dasher NZ Collection", href: "/collections/mens-dasher-nz-cl" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15"]}
                        prices={["$126 - $150"]}
                        productTypes={["Everyday Sneakers", "Running Shoes", "Slip Ons"]}
                        gender="men"
                        collectionType="dasher-nz-cl"
                    />

                    <ProductGrid
                        products={filteredProducts}
                        promoCard={<DasherCard />}
                    />

                    <FeatureBanners banners={banners} />
                    <ValuePillars />
                </section>
            </main>
        </>
    );
}