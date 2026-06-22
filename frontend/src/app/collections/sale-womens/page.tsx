"use client";

import { useState } from "react";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import CollectionIntro from "@/components/common/CollectionIntro";
import { saleWomens } from "@/app/data/saleWomens";
;

export default function SaleWomensPage() {
    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(saleWomens, {
        filters,
    });
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionIntro
                    title="Women's Sale"
                    description="Stock up and shop these last-chance styles and colors before they’re gone for good."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Women's Sale", href: "/collections/sale-womens" }
                    ]}
                />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "W4.5/M3", "W5.5/M4", "W6.5/M5", "W7.5/M6", "W8.5/M7", "W9.5/M8", "W10.5/M9", "W11.5/M10", "W12.5/M11", "W13.5/M12", "W14.5/M13", "W15.5/M14"]}
                    colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Pink", "Orange", "Yellow", "Green", "Blue", "Purple"]}
                    prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150"]}
                    productTypes={["Everyday Sneakers", "Flats", "High Tops", "Hiking Shoes", "Running Shoes", "Shirts", "Slip Ons", "Slippers", "Socks", "Sweatpants", "Sweatshirts", "Tees", "Water-Repellent Shoes"]}
                    materials={["Canvas", "Corduroy", "Cotton", "Cozy-Collection", "Luxe-Collection", "Plant", "Sugar", "Tree", "Wool"]}
                />
                <ProductGrid products={filteredProducts} />
                <ValuePillars />
            </section>
        </main>
    );
}




