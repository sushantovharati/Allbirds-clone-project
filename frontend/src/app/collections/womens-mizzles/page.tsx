"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import { filterProducts } from "@/lib/filterProducts";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import WomensMizzlesHero from "@/components/womens-mizzles/WomensMizzlesHero";


export default function WomensAllWeatherCollectionsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=women&family=wool-runner-up-mizzle"
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
                    <WomensMizzlesHero
                        image="https://www.allbirds.com/cdn/shop/files/25Q4_Waterproof_Collections-Header_Waterproof-Women_Desktop_16x9_2c861d26-9e3d-4631-83ea-512235c2f734.jpg?v=1759178867&width=2048"
                        title="Women’s All-Weather Collection"
                        description="Our all-weather shoes combine innovative technology with the planet-friendly comfort you expect from Allbirds."
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Womens", href: "/collections/womens" },
                            { label: "Women’s All-Weather Collection", href: "/collections/womens-mizzles" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"]}
                        colors={["Black", "Grey", "Beige", "Brown", "Green", "Blue"]}
                        prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150"]}
                        productTypes={["Everyday Sneakers", "High Tops", "Hiking Shoes", "Running Shoes", "Water-Repellent Shoes"]}
                        gender="women"
                        collectionType="mizzles"
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