"use client";

import Link from "next/link";
import RelatedProductsContent from "./RelatedProductsContent";
import ProductInfoAccordion from "./ProductInfoAccordion";


const styleCards = [
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_PDP_Womens_HowToStyle_DesktopMobile_2x3_01.jpg?v=1769467172&width=1024",
        title: "LOOK GOOD",
        description:
            "Built to look sharp whether you’re moving fast—or taking your time.",
    },
    {
        image:
            "//www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_PDP_Womens_HowToStyle_DesktopMobile_2x3_02.jpg?v=1769467172&width=1024",
        title: "FEEL GOOD",
        description:
            "Wildly comfortable from the first step, with breathable support that moves naturally with you.",
    },
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_PDP_Womens_HowToStyle_DesktopMobile_2x3_03-1.jpg?v=1769467172&width=1024",
        title: "DO GOOD",
        description:
            "Made with TENCEL™ Lyocell (tree fiber) uppers that use less water and energy to produce than many synthetic textiles.",
    },
];

type ProductProps = {
    gender?: string;
};

export default function WomenDasherNz({
    gender = "women",
}: ProductProps) {

    const materials = [
        {
            type: "Upper",
            name: "Tree Knit",
            desc: "Made from Eucalyptus tree-derived TENCEL™ Lyocell and recycled polyester",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Tree_600x600_4e80064b-fe40-43b9-83b4-e589370a74a4.jpg?v=1771010465&width=1024",
        },
        {
            type: "Midsole",
            name: "SweetFoam®",
            desc: "Sugarcane-based EVA foam provides comfort and durability while being light on the planet",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Sugarcane_600x600_90d8166b-bfea-4744-a2c9-2251b6b7248d.jpg?v=1771010465&width=1024",
        },
        {
            type: "Outsole",
            name: "Natural rubber",
            desc: "For added durability and traction",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Rubber_600x600_52358386-aa3d-4871-96be-889e43ca8198.jpg?v=1771010465&width=1024",
        },
        {
            type: "Laces",
            name: "100% recycled polyester",
            desc: "Sourced from plastic bottles",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_RecycledPlastic_600x600_ae7e87d3-2469-4a89-ac33-6267fdc06446.jpg?v=1771010465&width=1024",
        },
    ];

    return (
        <>
            <ProductInfoAccordion
                title="Why We Love This"
                desc="A new take on our fan-favorite Dasher, made for busy days and spontaneous plans. Lightweight, breathable comfort keeps you cool as you move, with added heel protection where it counts. Fast when you want. Comfortable always."
                bestFor={["Walking", "Jogging", "Commuting", "Light Workouts", "Everyday-ing"]}
                productImage={"http://www.allbirds.com/cdn/shop/files/A12519_26Q1_Dasher-NZ-Light-Burnt-Olive-Natural-White-Sole_PDP_PAIR_3Q_255b0602-1a79-45f7-88e0-00675c6f9fb2.png?v=1768948821&width=1024"}
                imageAlt={"Picture is not available now"}
                designedTitle="Thoughtfully Designed"
                designedItems={[
                    "Breathable tree knit upper for a light, cool feel",
                    "Easy-entry heel tab for quick slip on and off",
                    "Wool-blend lining for softness, socks optional",
                    "Sugarcane-based SweetFoam® cushioning with responsive energy return",
                    "Plush Featherbed™ memory foam insole for extra comfort and bounce",
                    "Redesigned traction pattern for more grip on paved surfaces",
                ]}
                technicalDetails={[
                    { label: "Weight", value: "10.9oz (M9) 9.0oz (W7)" },
                    { label: "Heel/Toe Drop", value: "7mm" },
                    { label: "Stack Height", value: "Heel: 22.9mm Toe: 15.9mm" },
                    { label: "Country of Origin", value: "Vietnam" },
                ]}
                materialsTitle="Materials & Sustainability"
                materials={materials}
                careTitle="Care instructions"
                careDesc="Yes, they’re machine washable. Remove the insoles, hand wash those separately, and let everything air dry."
            />

            <section className="my-10 px-3 md:px-2.5">
                <h2 className="mb-10 text-center font-serif text-4xl text-black md:text-5xl">
                    Wildly Comfortable. Super Natural.
                </h2>

                {/* Mobile */}
                <div className="flex gap-3 overflow-x-auto md:hidden">
                    {styleCards.map((card) => (
                        <div
                            key={card.title}
                            className="w-[85vw] shrink-0"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="aspect-[2/3] w-full rounded-3xl object-cover"
                            />

                            <h3 className="mt-6 text-center font-mono text-sm uppercase tracking-[0.12em]">
                                {card.title}
                            </h3>

                            <p className="mt-2 px-4 text-center text-sm leading-5 text-neutral-600">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Desktop */}
                <div className="hidden grid-cols-3 gap-3 md:grid">
                    {styleCards.map((card) => (
                        <div key={card.title}>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="aspect-[2/3] w-full rounded-3xl object-cover"
                            />

                            <h3 className="mt-8 text-center font-mono text-base uppercase tracking-[0.12em]">
                                {card.title}
                            </h3>

                            <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-6 text-neutral-600">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-2.5 px-2.5">
                <div className="relative w-full rounded-2xl bg-[#7c8c52]">
                    <div className="relative z-10 flex flex-col items-center justify-center px-5 py-6 text-center md:px-10 md:py-8 lg:px-15 lg:py-12">
                        <p className="font-mono text-xs uppercase tracking-widest text-white">
                            The Dasher NZ Collection
                        </p>

                        <h2 className="pt-1 pb-2 font-serif text-2xl leading-tight text-white select-none sm:text-3xl md:pt-2 md:pb-4 lg:text-2xl xl:text-[2.5rem]">
                            Comfort That Keeps Up
                        </h2>

                        <Link
                            href="/pages/dasher-nz-collection"
                            className="mt-4 rounded-full border border-white px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black md:mt-6"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>

            <RelatedProductsContent
                productCount={4}
                gender={gender}
            />
        </>
    );
}