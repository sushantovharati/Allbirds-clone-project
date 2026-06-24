"use client";

import Link from "next/link";
import RelatedProductsContent from "./RelatedProductsContent";
import ProductInfoAccordion from "./ProductInfoAccordion";
import ProductSlidesUpContent from "./ProductSlidesUpContent";


const features = [
    {
        title: "BREATHE EASY",
        description:
            "Made from TENCEL™ Lyocell (tree fiber) and recycled polyester to stay breathable, moisture-wicking, and cool.",
        position: "top-[28.5%] left-[15%] text-right",
    },
    {
        title: "RESPONSIBLY SOURCED",
        description:
            "Overlays crafted from recycled leather scraps that would otherwise end up as waste.",
        position: "top-[68.5%] left-[16%] text-right",
    },
    {
        title: "PLUSH FEATHERBED™",
        description:
            "Dual-density memory foam insole adds extra softness and comfort that doesn’t quit.",
        position: "top-[28.5%] right-[15%] text-left",
    },
    {
        title: "BUILT TO BOUNCE BACK",
        description:
            "SweetFoam® cushioning made from sugarcane delivers comfort and energy return.",
        position: "top-[68.5%] right-[16%] text-left",
    },
];

const styleCards = [
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_VarsityAiry_PDP_Mens_HowToStyle_DesktopMobile_2x3_01.jpg?v=1771522016&width=1024",
        title: "LOOK GOOD",
        description:
            "Classic sport style, lightened up and breezy. With their streamlined silhouette, these pair just as well with casual workday looks as they do with skirts and shorts. Always ready, always right.",

    },
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_VarsityAiry_PDP_Mens_HowToStyle_DesktopMobile_2x3_02.jpg?v=1771522017&width=1024",
        title: "FEEL GOOD",
        description:
            "Breathable tree-fiber uppers help keep feet cool and dry, while lightweight cushioning delivers soft, responsive comfort with every step. Easy to wear. Easy to keep wearing.",

    },
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_VarsityAiry_PDP_Mens_HowToStyle_DesktopMobile_2x3_03_c11dcff7-85ca-4252-9c52-e864332a1a49.jpg?v=1771522016&width=1024",
        title: "DO GOOD",
        description:
            "Our upper blends tree-based fibers with recycled materials that require less water and energy than many conventional synthetics. A lighter footprint, made possible by better materials—built for everyday wear.",

    },
];


type ProductProps = {
    gender?: string;
};

export default function WomenVarsityContent({
    gender = "men",
}: ProductProps) {

    const materials = [
        {
            type: "Upper",
            name: "Tree Knit",
            desc: "Knit upper made from eucalyptus tree-derived TENCEL™ Lyocell and recycled polyester",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Tree_600x600_4e80064b-fe40-43b9-83b4-e589370a74a4.jpg?v=1771010465&width=1024",
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
            desc: "Grippy, natural rubber blend outsole for added durability and traction",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Rubber_600x600_52358386-aa3d-4871-96be-889e43ca8198.jpg?v=1771010465&width=1024",
        },
    ];

    return (
        <>
            <ProductInfoAccordion
                title="Why we made this"

                desc="Our retro-inspired Varsity gets a breath of fresh air. An all-new open knit mesh helps maximize airflow and breathability, ensuring uncompromising all-day comfort and wearability. Fresh, airy, and cool in every sense, it’s a total breeze."
                bestFor={["Walking", "Weekends", "Summer", "Every day", "All day"]}
                productImage={"http://www.allbirds.com/cdn/shop/files/A12611_26Q2_Womens-Varsity-Airy-Mushroom-Natural-White_PDP_PAIR_3Q.png?v=1770677960&width=1024"}
                imageAlt={"Picture is not available now"}
                designedTitle="Thoughtfully Designed"
                designedItems={[
                    "Breathable TENCEL™ Lyocell (tree fiber) and recycled polyester blend upper for a light, cool feel",
                    "Sugarcane-based SweetFoam® cushioning with responsive energy return",
                    "Plush Featherbed™ memory foam insole for extra comfort and bounce",
                    "Recycled leather overlays",
                    "Merino wool-blend lining for softness, socks optional",
                ]}
                technicalDetails={[
                    { label: "Weight", value: "9.4oz (W7)" },
                    { label: "Heel/Toe Drop", value: "7mm" },
                    { label: "Stack Height", value: "Heel: 27mm Toe: 20mm" },
                    { label: "Country of Origin", value: "Vietnam" },
                ]}
                materialsTitle="Materials & Sustainability"
                materials={materials}
                careTitle="Care instructions"
                careDesc="SYes, they’re machine washable. Remove the insoles, hand wash those separately, and let everything air dry. Fresh again."
            />

            <section className="my-10 px-3 md:px-2.5">
                <h2 className="mb-10 text-center font-serif text-4xl text-black md:text-5xl">
                    Your Easy, Breezy MVP.
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

                <h2 className="my-[35px] text-center font-serif text-4xl text-black md:text-5xl">
                    Breathable By Nature
                </h2>
            </section>


            <ProductSlidesUpContent
                backgroundImage="https://www.allbirds.com/cdn/shop/files/26Q1_terralux_PDP_MaterialsHero-Background_Terralux_Desktop-Mobile_16x9_d87a4d4e-998d-47bf-81d3-2f96a6605b39.jpg?v=1771522247&width=1024"
                mobileBackgroundImage="https://www.allbirds.com/cdn/shop/files/26Q1_terralux_PDP_MaterialsHero-Background_Terralux_Desktop-Mobile_16x9_d87a4d4e-998d-47bf-81d3-2f96a6605b39.jpg?v=1771522247&width=1024"
                productImage="https://www.allbirds.com/cdn/shop/files/A12611_26Q2_Womens-Varsity-Airy-Mushroom-Natural-White_PDP_LEFT.png?v=1770677960&width=1024"
                features={features}
            />

            <section className="my-2.5 px-2.5">
                <div className="relative w-full rounded-2xl bg-[#6a2219]">
                    <div className="relative z-10 flex flex-col items-center justify-center px-5 py-6 text-center md:px-10 md:py-8 lg:px-15 lg:py-12">

                        <p className="font-mono text-xs uppercase tracking-widest text-white">
                            The Varsity Collection
                        </p>
                        <h2 className="pt-1 pb-2 font-serif text-2xl leading-tight text-white select-none sm:text-3xl md:pt-2 md:pb-4 lg:text-2xl xl:text-[2.5rem]">
                            Old School Vibes. New School Comfort.
                        </h2>



                        <div className="flex gap-2">
                            <Link
                                href="/pages/varsity-collection"
                                className="mt-4 rounded-full border border-white px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black md:mt-6"
                            >
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductsContent
                productCount={5}
                gender={gender}
            />
        </>
    );
}