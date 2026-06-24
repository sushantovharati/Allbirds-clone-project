"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import CollectionIntro from "@/components/common/CollectionIntro";
;

export default function SaleMensPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
            "http://localhost:5000/products?gender=men&sale=true"
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
                title="Men's Sale"
                description="Stock up and shop these last-chance styles and colors before they’re gone for good."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Men's Sale", href: "/collections/sale-mens" }
                  ]}
                 />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15", "W5/M3", "W6/M4", "W7/M5", "W8/M6", "W9/M7", "W10/M8", "W11/M9", "W12/M10", "W13/M11", "W14/M12", "W15/M13", "W16/M14"]}
                    colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Pink", "Orange", "Yellow", "Green", "Blue"]}
                    prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150", "Over $150"]}
                    productTypes={["Everyday Sneakers", "Golf", "High Tops", "Hiking Shoes", "Long Sleeve Tees", "Running Shoes", "Sandals", "Shirts", "Slip Ons", "Slippers", "Socks", "Sweatpants", "Tees", "Water-Repellent Shoes"]}
                    materials={["Alternative-Leather", "Canvas", "Corduroy", "Cotton", "Luxe-Collection", "Sugar", "Tree", "Wool"]}
                />
                <ProductGrid products={filteredProducts} />
                <ValuePillars />
            </section>
        </main>
    );
}




