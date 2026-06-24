"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";

export default function WomensBestsellersPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=women&badge=NEW,BESTSELLER"
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(products, {
        filters,
    });
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionHero
                    image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Bestsellers_Women_v2.jpg?v=1774031085&width=2048"
                    title=" Women's Bestsellers"
                    description="Iconic comfort, exceptional style. Shop our most popular women’s shoes."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Womens", href: "/collections/womens" },
                        { label: " Women's Bestsellers", href: "/collections/womens-bestsellers" },
                    ]}
                />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"]}
                    colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Yellow", "Green", "Blue", "Purple"]}
                    prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150"]}
                    productTypes={["Everyday Sneakers", "Flats", "High Tops", "Running Shoes", "Slip Ons", "Slippers", "Water-Repellent Shoes"]}
                    materials={["Sugar", "Tree", "Wool"]}
                    gender="women"
                    collectionType="bestsellers"
                />
                <ProductGrid products={filteredProducts} />
                <ValuePillars />
            </section>
        </main>
    );
}
