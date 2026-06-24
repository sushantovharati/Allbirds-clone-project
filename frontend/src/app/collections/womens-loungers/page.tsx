"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionHero from "@/components/common/CollectionHero";
import FAQSection from "@/components/common/FAQSection";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";


const womensFaqs = [
    {
        question: "Is it OK to wear socks with slip-on shoes?",
        answer: "Yes, it's totally fine to wear socks with slip-on shoes. In fact, many people prefer to wear socks with them for a variety of reasons, like comfort, reducing foot sweat and odor, and preventing blisters. The type of socks you choose can depend on the look you're going for. No-show or low-cut socks are a popular choice as they make you look like you’re rocking bare feet, keeping that minimalistic look that slip-on shoes provide. In the end, your comfort and your styling is the key. If wearing socks with your slip-on shoes makes you more comfortable and feels better, go for it!"
    },
    {
        question: "What kind of socks do you wear with slip-on sneakers?",
        answer: "You can wear any style of socks you want with your Allbirds slip-on shoes, but if you’re going for that clean, sockless look, we recommend going with no-show socks like our Anytime No Show Sock. Available in multiple sizes, these socks are highly breathable and have reinforced wear points for added durability. And they just so happen to pair perfectly with Allbirds shoes."
    },
    {
        question: "Should slip-on shoes be tight or loose?",
        answer: "Your slip-on shoes should provide a snug fit, but not be too tight. They should be secure around your feet, with no significant slippage when you walk. At the same time, they shouldn't be so tight that they pinch or rub your feet, which can cause discomfort or blisters.  Generally, there should be enough room in the toe box for your toes to move freely, and there should be a little space (about a thumb's width) between your longest toe and the end of the shoe."
    },
];


export default function WomensLoungersPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
                "http://localhost:5000/products?gender=women&family=tree-dasher-relay,tree-runner-nz,runner-nz,runner-go,dasher-nz"
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
                    image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_SlipOns_Women_1b301277-1e4c-4c8d-84c0-7a91da1de1cc.jpg?v=1773874481&width=2048"
                    title="Women's Slip Ons"
                    description="No laces, no problem. Our sleek, breezy slip-ons are easy to wear, and even easier to notice."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Womens", href: "/collections/womens" },
                        { label: "Women's Slip Ons", href: "/collections/womens-loungers" },
                    ]}
                />
                <CollectionToolbar
                    count={filteredProducts.length}
                    filters={filters}
                    onFiltersChange={setFilters}
                    sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "W4.5/M3", "W5.5/M4", "W6.5/M5", "W7.5/M6", "W8.5/M7", "W9.5/M8", "W10.5/M9", "W11.5/M10", "W12.5/M11", "W13.5/M12", "W14.5/M13", "W15.5/M14"]}
                    colors={["Black", "Grey", "White", "Beige", "Red", "Green", "Blue", "Purple"]}
                    prices={["Under $75", "$76 - $100", "$101 - $125"]}
                    productTypes={["Everyday Sneakers", "Flats", "Running Shoes", "Slip Ons", "Slippers"]}
                    materials={["Canvas", "Corduroy", "Cotton", "Cozy-Collection", "Tree", "Wool"]}
                    gender="women"
                    collectionType="loungers"
                />
                <ProductGrid products={filteredProducts} />
                <FAQSection
                    title="Women's Slip Ons"
                    description="There’s nothing quite like the simplicity of slip-on shoes—just slide in and go. Designed for effortless comfort and everyday versatility, they offer a sleek, modern look that works from casual outings to relaxed workdays. Lightweight, breathable materials keep your feet cool and supported, while cushioned soles provide all-day ease. Whether you’re running errands, heading to the office, or taking it easy at home, these comfortable slip-on shoes combine convenience, performance, and timeless style in every step."
                    faqs={womensFaqs}
                />
                <ValuePillars />
            </section>
        </main>
    );
}




