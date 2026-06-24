"use client";

import Link from "next/link";
import RelatedProductsContent from "./RelatedProductsContent";
import ProductInfoAccordion from "./ProductInfoAccordion";
import ProductSlidesUpContent from "./ProductSlidesUpContent";


const features = [
    {
        title: "GRIPPY TREADS",
        description:
            "Natural rubber blend treads give more traction when you need it.",
        position: "top-[28.5%] left-[15%] text-right",
    },
    {
        title: "RESPONSIBLY SOURCED",
        description:
            "Canvas upper made from hemp and organic cotton blend with recycled leather overlays.",
        position: "top-[68.5%] left-[16%] text-right",
    },
    {
        title: "ALLBIRDS FEATHERBED",
        description:
            "Our dual-density insole uses cushioned memory foam to deliver comfort that doesn’t quit.",
        position: "top-[28.5%] right-[15%] text-left",
    },
    {
        title: "SUPPORTIVE",
        description:
            "Our proprietary sugarcane-based SweetFoam® midsole is both sturdy and super soft.",
        position: "top-[68.5%] right-[16%] text-left",
    },
];

const styleCards = [
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_PDP_HowToStyle_MensVarsity_DesktopMobile_2x3_01.jpg?v=1766440970&width=1024",
        title: "LOOK GOOD",
        description:
            "This is comfort that refuses to sit out.",
    },
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_PDP_HowToStyle_MensVarsity_DesktopMobile_2x3_02.jpg?v=1766440970&width=1024",
        title: "FEEL GOOD",
        description:
            "Dress like a throwback, move like the future.",
    },
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_PDP_HowToStyle_MensVarsity_DesktopMobile_2x3_03.jpg?v=1766440970&width=1024",
        title: "DO GOOD",
        description:
            "Made from natural and recycled materials, inside and out.",
    },
];


type ProductProps = {
    gender?: string;
};

export default function MenVarsityContent({
    gender = "men",
}: ProductProps) {

    const materials = [
        {
            type: "Upper",
            name: "Canvas",
            desc: "Canvas upper made from a breathable hemp and organic cotton blend, with second-life leather overlays crafted from scraps that would otherwise end up as waste",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Cotton_600x600_08bbecab-da1c-461d-9ee8-8248d7c333e8.jpg?v=1772058149&width=1024",
        },
        {
            type: "Midsole",
            name: "SweetFoam®",
            desc: "SweetFoam® sugarcane-based EVA foam provides comfort and durability while being light on the planet",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Sugarcane_600x600_90d8166b-bfea-4744-a2c9-2251b6b7248d.jpg?v=1771010465&width=1024",
        },
        {
            type: "Outsole",
            name: "Natural rubber",
            desc: "Natural rubber blend outsole for added durability and traction",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Rubber_600x600_52358386-aa3d-4871-96be-889e43ca8198.jpg?v=1771010465&width=1024",
        },
    ];

    return (
        <>
            <ProductInfoAccordion
                title="Why We Love This"

                desc="Your new daily MVP, Varsity, blends old school vibes with new school comfort. An ultra-soft hemp and organic cotton blend is perfect for all-day wear, while bold detailing adds the perfect amount of cool for school, work, or play. Get ready to up your game."
                bestFor={["Walking", "Traveling", "Vibing", "Everyday"]}
                productImage={"http://www.allbirds.com/cdn/shop/files/A12270_26Q1_Mens-Varsity-Parchment-Blizzard-Sole_PDP_PAIR_3Q.png?v=1765307399&width=1024"}
                imageAlt={"Picture is not available now"}
                designedTitle="Thoughtfully Designed"
                designedItems={[
                    "Hemp and organic cotton canvas blend upper with recycled leather overlays creates a light but durable feel",
                    "Sugarcane-based SweetFoam® cushioning with responsive energy return",
                    "Plush Featherbed™ memory foam insole for extra comfort and bounce",
                    "Refined rubber outsole built for city traction",
                ]}
                technicalDetails={[
                    { label: "Weight", value: "12.9oz (M9)" },
                    { label: "Stack Height", value: "Heel: 34.5mm Toe: 25.5mm" },
                    { label: "Heel/Toe Drop", value: "9.0mm" },
                    { label: "Country of Origin", value: "Vietnam" },
                ]}
                materialsTitle="Materials & Sustainability"
                materials={materials}
                careTitle="Care instructions"
                careDesc="Spot clean with warm water and gentle soap when they need a refresh. Easy does it."
            />

            <section className="my-10 px-3 md:px-2.5">
                <h2 className="mb-10 text-center font-serif text-4xl text-black md:text-5xl">
                    Your New Daily MVP.
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
                <div className="relative w-full rounded-2xl bg-[#282932]">
                    <div className="relative z-10 flex flex-col items-center justify-center px-5 py-6 text-center md:px-10 md:py-8 lg:px-15 lg:py-12">

                        <h2 className="pt-1 pb-2 font-serif text-2xl leading-tight text-white select-none sm:text-3xl md:pt-2 md:pb-4 lg:text-2xl xl:text-[2.5rem]">
                            The Varsity Collection
                        </h2>

                        <p className="font-mono text-xs uppercase tracking-widest text-white">
                            Old School Vibes. New School Comfort.
                        </p>

                        <div className="flex gap-2">
                            <Link
                                href="/collections/mens-varsity-collection"
                                className="mt-4 rounded-full border border-white px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black md:mt-6"
                            >
                                SHOP MEN
                            </Link>
                            <Link
                                href="/collections/womens-varsity-collection"
                                className="mt-4 rounded-full border border-white px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black md:mt-6"
                            >
                                SHOP WOMEN
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ProductSlidesUpContent
                backgroundImage="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_PDP_MaterialsHero-Canvas_Background_Desktop-Mobile_16x9_ae72499c-34d0-4a5c-9aa9-adb93f2de526.jpg?v=1766440970&width=1024"
                mobileBackgroundImage="https://www.allbirds.com/cdn/shop/files/26Q1_Varsity_PDP_MaterialsHero-Canvas_Background_Desktop-Mobile_16x9_ae72499c-34d0-4a5c-9aa9-adb93f2de526.jpg?v=1766440970&width=1024"
                productImage="https://www.allbirds.com/cdn/shop/files/A12270_26Q1_Mens-Varsity-Parchment-Blizzard-Sole_PDP_LEFT.png?v=1765307399&width=1024"
                features={features}
            />
            <RelatedProductsContent
                productCount={5}
                gender={gender}
            />
        </>
    );
}