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

export default function Slide({
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
                Easy on. Easy off. All summer long. These supportive, laid-back slides pair a relaxed look with iconic Allbirds comfort, making them an easy choice for warm days and wherever they take you. Bright colors included.
                "
                bestFor={["Weekends", "Vacation", "Beach", "Pool"]}
                productImage={"http://www.allbirds.com/cdn/shop/files/A12655_26Q1_Allbirds-Slide-Spice_PDP_PAIR_3Q_de5306b8-9dec-42f9-8dd2-03afd8c945f8.png?v=1769463782&width=1024"}
                imageAlt={"Picture is not available now"}
                designedTitle="Thoughtfully Designed"
                designedItems={[
                    "Soft, padded Tree Knit strap backed with soft recycled microsuede",
                    "Supportive sugarcane-based SweetFoam® cushioning with subtly raised texture",
                    "Grippy, durable natural rubber blend outsole for added traction on wet or dry surfaces",
                ]}
                technicalDetails={[
                    { label: "Weight", value: "7.3oz (M9), 5.5oz (W7)" },
                    { label: "Stack Height", value: "Heel: 25.7mm Toe: 17.5mm" },
                    { label: "Heel/Toe Drop", value: "8.2mm" },
                    { label: "Country of Origin", value: "Vietnam" },
                ]}
                materialsTitle="Materials & Sustainability"
                materials={materials}
                careTitle="Care instructions"
                careDesc="This shoe is washing machine approved. Just remove the insoles and laces and hand wash them separately to keep every step as fresh as the first."
            />

            <section className="mx-2.5 my-10">
                <div className="flex flex-col gap-5 text-center md:flex-row md:gap-2.5">
                    <img
                        src="https://www.allbirds.com/cdn/shop/files/26Q2_PDP_Slide_Split-Text_Desktop-Mobile_2x3_ddfea8c7-0911-4b52-9b3a-2096281b7dda.jpg?v=1775252338&width=1920"
                        alt="Slide Into Summer"
                        className="aspect-[10/7] w-full rounded-xl object-cover md:w-[55vw] md:min-w-[55vw]"
                    />

                    <div className="flex flex-col items-center justify-center gap-6 rounded-xl px-5 py-6 md:flex-1 md:px-10 lg:gap-8">
                        <h2 className="text-2xl capitalize leading-8">
                            Slide Into Summer
                        </h2>

                        <p className="px-4 text-sm">
                            Wildly comfortable, breezy slides that go with everything.
                            Perfect for the long days and warm nights ahead. Slip in.
                            Step out. Stay comfortable.
                        </p>

                        <a
                            href="/collections/mens-sandals"
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
                productImage="https://www.allbirds.com/cdn/shop/files/A12655_26Q1_Allbirds-Slide-Spice_PDP_SINGLE_3Q.png?v=1769559313&width=1024"
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