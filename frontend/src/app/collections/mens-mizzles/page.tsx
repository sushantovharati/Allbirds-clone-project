"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import { filterProducts } from "@/lib/filterProducts";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import MensMizzlesHero from "@/components/mens-mizzles/MensMizzlesHero";


export default function MensAllWeatherCollectionsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=men&family=wool-runner-up-mizzle"
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
                    <MensMizzlesHero
                        image="https://www.allbirds.com/cdn/shop/files/25Q4_Waterproof_Collections-Header_Waterproof-Men_Desktop_16x9_08374d83-eb9c-482f-adfb-5f10fd5719eb.jpg?v=1759178870&width=2048"
                        title="Men’s All-Weather Collection"
                        description="Our all-weather shoes combine innovative technology with the planet-friendly comfort you expect from Allbirds."
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Mens", href: "/collections/mens" },
                            { label: "Men’s All-Weather Collection", href: "/collections/mens-mizzles" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"]}
                        colors={["Black", "Grey", "Beige", "Brown", "Green", "Blue"]}
                        prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150", "Over $150"]}
                        productTypes={["Everyday Sneakers", "High Tops", "Hiking Shoes", "Running Shoes", "Water-Repellent Shoes"]}
                        gender="men"
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