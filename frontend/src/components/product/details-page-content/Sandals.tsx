"use client";

import Link from "next/link";
import RelatedProductsContent from "./RelatedProductsContent";
import ProductInfoAccordion from "./ProductInfoAccordion";
import WhiteCottonVideoContent from "./WhiteCottonVideoContent";

const slideFeatures = [
    {
        title: "BREATHE EASY",
        description:
            "Made from TENCEL™ Lyocell (tree fiber) and recycled polyester to stay breathable, moisture-wicking, and cool.",
        position: "top-[28.5%] left-[15%] text-right",
    },
    {
        title: "GET A GRIP",
        description:
            "A natural rubber blend outsole adds traction while supporting responsible forestry practices.",
        position: "top-[68.5%] left-[16%] text-right",
    },
    {
        title: "MADE TO MOVE",
        description: "Flexible and supportive—designed to move naturally with you.",
        position: "top-[28.5%] right-[15%] text-left",
    },
    {
        title: "BUILT TO BOUNCE BACK",
        description:
            "SweetFoam® cushioning made from sugarcane delivers comfort and energy return.",
        position: "top-[68.5%] right-[16%] text-left",
    },
];

type ProductProps = {
    gender?: string;
};

export default function Sandals({
    gender = "men",
}: ProductProps) {

    const materials = [
        {
            type: "Upper",
            name: "Tree Knit",
            desc: "Tree Knit made from eucalyptus-derived TENCEL™ Lyocell (tree fiber) yarn and recycled polyester blend",
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
                desc="
                Sun on your feet. Comfort underneath. Light, easy, and made for warm weather, these flip flops bring everyday comfort to sunny days, beach walks, and everything in between. Just slip them on and go.
                "
                bestFor={["Weekends", "Vacation", "Beach", "Pool"]}
                productImage={"http://www.allbirds.com/cdn/shop/files/A12597_26Q1_Allbirds-Flip-Flop-Mid-Yellow_PDP_PAIR_3Q_cd755d08-576e-4d9f-93e0-9630d60a0f17.png?v=1769462492&width=1024"}
                imageAlt={"Picture is not available now"}
                designedTitle="Thoughtfully Designed"
                designedItems={[
                    "Soft, padded Tree Knit strap backed with soft recycled microsuede",
                    "Supportive sugarcane-based SweetFoam® cushioning with subtly raised texture",
                    "Grippy, durable natural rubber blend outsole for added traction on wet or dry surfaces",
                ]}
                technicalDetails={[
                    { label: "Weight", value: "5.1oz (W7), 6.7oz (M9)" },
                    { label: "Stack Height", value: "Heel: 23.5mm Toe: 20mm" },
                    { label: "Heel/Toe Drop", value: "3.5mm" },
                    { label: "Country of Origin", value: "Vietnam" },
                ]}
                materialsTitle="Materials & Sustainability"
                materials={materials}
                careTitle="Care instructions"
                careDesc="Yes, they’re machine washable. Remove the insoles, hand wash those separately, and let everything air dry. Fresh again."
            />

            <section className="mx-2.5 my-10">
                <div className="flex flex-col gap-5 text-center md:flex-row md:gap-2.5">
                    <img
                        src="https://www.allbirds.com/cdn/shop/files/26Q2_PDP_FlipFlopSplit-Text_Desktop-Mobile_2x3_03a1d08b-4113-467d-8b8a-62fbaf3e0cc8.jpg?v=1775251302&width=1920"
                        alt="Slide Into Summer"
                        className="aspect-[10/7] w-full rounded-xl object-cover md:w-[55vw] md:min-w-[55vw]"
                    />

                    <div className="flex flex-col items-center justify-center gap-6 rounded-xl px-5 py-6 md:flex-1 md:px-10 lg:gap-8">
                        <h2 className="text-2xl capitalize leading-8">
                            Make The Living Easy
                        </h2>

                        <p className="px-4 text-sm">
                            A step above your usual summer flip-flop. Materials that feel good against your bare skin. Support for long summer days. In colors that feel like summer.
                        </p>

                        <a
                            href={`/collections/${gender === "women" ? "womens" : "mens"}-sandals`}
                            className="text-sm capitalize underline"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-auto my-5 md:my-10 md:max-w-4xl">
                <div className="text-center">
                    <h2 className="font-serif text-3xl font-normal md:text-5xl">
                        Breathable By Nature
                    </h2>
                </div>
            </section>

            <WhiteCottonVideoContent
                desktopVideo="https://www.allbirds.com/cdn/shop/videos/c/vp/99ea42d721a54ab7b128e5850984fda4/99ea42d721a54ab7b128e5850984fda4.HD-1080p-3.3Mbps-50402257.mp4?v=0"
                mobileVideo="https://www.allbirds.com/cdn/shop/videos/c/vp/dd9018c1ba3f41d7883cbd17351412c1/dd9018c1ba3f41d7883cbd17351412c1.HD-1080p-3.3Mbps-50402258.mp4?v=0"
                productImage="https://www.allbirds.com/cdn/shop/files/A12597_26Q1_Allbirds-Flip-Flop-Mid-Yellow_PDP_SINGLE_3Q.png?v=1775251596&width=1024"
                productAlt="Allbirds Slide"
                features={slideFeatures}
            />

            <RelatedProductsContent
                productCount={5}
                gender={gender}
            />
        </>
    );
}