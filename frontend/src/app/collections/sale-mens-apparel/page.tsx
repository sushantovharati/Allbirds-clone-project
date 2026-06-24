"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import CollectionIntro from "@/components/common/CollectionIntro";
;

export default function SaleMensApparelPage() {
    const [products, setProducts] = useState<Product[]>([]);
    
        useEffect(() => {
            fetch(
                "http://localhost:5000/products?gender=men&category=apparel,socks&sale=true"
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
                <CollectionIntro
                    title="Sale Men's Apparel"
                    description="Stock up and shop these last-chance styles and colors before they’re gone for good."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Sale Men's Apparel", href: "/collections/sale-mens-apparel" }
                    ]}
                />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
                    colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Pink", "Yellow", "Green", "Blue", "Purple"]}
                    prices={["Under $75"]}
                    productTypes={["Long Sleeve Tees", "Shirts", "Socks", "Sweatpants", "Tees"]}
                    materials={["Cotton", "Tree-Fiber-Blend", "Trino-Knit", "Wool"]}
                />
                <ProductGrid products={filteredProducts} />
                <ValuePillars />
            </section>
        </main>
    );
}




