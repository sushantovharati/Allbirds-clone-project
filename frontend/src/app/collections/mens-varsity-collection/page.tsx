"use client";
import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import { filterProducts } from "@/lib/filterProducts";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";

export default function MensVarsityCollectionPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=men&family=men-varsity"
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
                        image="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_Site_CollectionsHeader_NewArrivals_Men_Desktop-1.jpg?v=1767649994&width=2048"
                        title="Men's Varsity Collection"
                        description=""
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "Mens", href: "/collections/mens" },
                            { label: "Men's Varsity Collection", href: "/collections/mens-varsity-collection" },
                        ]}
                    />
                    <CollectionToolbar
                        count={filteredProducts.length}
                        filters={filters}
                        onFiltersChange={setFilters}
                        sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"]}
                        prices={["$101 - $125"]}
                        gender="men"
                        collectionType="varsity-collection"
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