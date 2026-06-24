"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionHero from "@/components/common/CollectionHero";
import FAQSection from "@/components/common/FAQSection";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";


const mensFaqs = [
    {
        question: "What are the best slip-on shoes for the airport and travel?",
        answer: "Allbirds offers two shoes that are ideal for going from plane to pavement. Whether you’re headed straight to the hotel or checking out the sites and sounds of the city, slip-ons are a great solution for on-the-go travelers.  Our Tree Loungers are easy breezy and lightweight. Slip them on and off going through airport security, and enjoy their breathable comfort and versatility every other moment of your trip. (If your travels are taking you to colder climates, we recommend going with the Wool Cruiser Slip On for added warmth.)  The Tree Dasher Relay offers the look and feel of a running shoe, but has a seamless one-piece upper. The lightly padded heel collar keeps your shoes in place during those long walks through the terminal and wherever else your steps take you."
    },
    {
        question: "Should you wear socks with slip-on shoes?",
        answer: "The choice is entirely up to you! Some Allbirds wearers are perfectly fine going sockless in their slip-on shoes, but like any shoe, going without socks for an extended period of time may result in chaffing and blisters on your bare feet, especially if you are logging a high amount of steps on a regular basis.  That said, if you want that sleek, no-sock look with your slip-ons, we recommend our Anytime No Show Sock."
    },
    {
        question: "Are Allbirds shoes itchy?",
        answer: "Nope! Allbirds shoes are designed with comfort at the forefront and feature our signature ZQ-Certified merino wool, which is softer and less irritating than regular wool. With fibers that are 20% the diameter of human hair, our superfine merino wool is breathable and moisture-wicking, plus it’s a renewable resource, thanks to our free-spirited Allbirds sheep.  However, everyone's skin sensitivity varies. While most people find Allbirds shoes to be extremely comfortable and itch-free, there may be a small number of people who might find them slightly itchy if they wear them without socks. You should also remember that the shoes need a few days of wear to break in fully and become more comfortable."
    },
    {
        question: "Should slip-on shoes feel tight or loose?",
        answer: "Your slip-on shoes should give you a secure fit without feeling overly constricting. They should feel comfortable and stable, with minimal slippage as you walk. However, it's equally important that they aren't so tight that they cause rubbing or pinching—no one wants discomfort or blisters from tight shoes. In general, there should be sufficient space in the front part of the shoe (the toe box) for your toes to wiggle freely. Plus, a small gap (roughly the width of your thumb) should exist between your longest toe and the tip of the shoe."
    },

];


export default function MensLoungersPage() {

    const [products, setProducts] = useState<Product[]>([]);
    
        useEffect(() => {
            fetch(
                "http://localhost:5000/products?gender=men&family=tree-dasher-relay,tree-runner-nz,runner-nz,runner-go,dasher-nz"
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
                    image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_SlipOns_Men_3cd7ee54-499e-4df6-84bf-817788f5a904.jpg?v=1773874480&width=2048"
                    title="Men's Slip Ons"
                    description="Easy to wear, easy to style, and comfortable enough for pretty much anywhere the day takes you."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Mens", href: "/collections/mens" },
                        { label: "Men's Slip Ons", href: "/collections/mens-loungers" },
                    ]}
                />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "W4.5/M3", "W5.5/M4", "W6.5/M5", "W7.5/M6", "W8.5/M7", "W9.5/M8", "W10.5/M9", "W11.5/M10", "W12.5/M11", "W13.5/M12", "W14.5/M13", "W15.5/M14"]}
                    colors={["Black", "Grey", "White", "Beige", "Brown", "Blue"]}
                    prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150"]}
                    productTypes={["Everyday Sneakers", "Running Shoes", "Slip Ons", "Slippers"]}
                    materials={["Corduroy", "Tree", "Wool"]}
                    gender="men"
                    collectionType="loungers"
                />
                <ProductGrid products={filteredProducts} />
                <FAQSection
                    title="Men's Slip Ons"
                    description="There’s nothing quite like the simplicity of slip-on shoes—just slide in and go. Designed for effortless comfort and everyday versatility, they offer a sleek, modern look that works from casual outings to relaxed workdays. Lightweight, breathable materials keep your feet cool and supported, while cushioned soles provide all-day ease. Whether you’re running errands, heading to the office, or taking it easy at home, these comfortable slip-on shoes combine convenience, performance, and timeless style in every step."
                    faqs={mensFaqs}
                />
                <ValuePillars />
            </section>
        </main>
    );
}




