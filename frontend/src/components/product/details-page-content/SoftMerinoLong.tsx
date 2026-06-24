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

export default function SoftMerinoContent({
    gender = "men",
}: ProductProps) {

    const materials = [
        {
            type: "",
            name: "Material Composition",
            desc: "50% Organic Cotton, 30% Merino Wool, 20% Tree-derived TENCEL™ Lyocell",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Tree_600x600_4e80064b-fe40-43b9-83b4-e589370a74a4.jpg?v=1771010465&width=1024",
        },

    ];

    return (
        <>
            <ProductInfoAccordion
                title="Why we made this"
                desc="
                It turns out that the same natural materials we use in our shoes are also great for apparel. Our Soft Merino Tees use all natural wool, tree, and cotton fibers to produce a comfortable, midweight tee. The perfect closet staple.
                "
                bestFor={[
                    "Everyday",
                    "Casual Office",
                    "Walking",
                    "Warm Weather",
                    "Vacation",
                    "Weekends",
                ]}
                productImage={"http://www.allbirds.com/cdn/shop/files/A12111_25Q3_Anytime_Soft_Merino_Tee_Deep_Navy_PDP_F2-2000x2000.png?v=1755542919&width=1024"}
                imageAlt={"Picture is not available now"}
                designedTitle="Thoughtfully Designed"
                designedItems={[
                    "Super Soft, All Natural Fabric - wool, organic cotton, and tree-derived Tencel™ yarn make Allbirds tees a 100% natural alternative to the polyesters you see across other shirts in the market",
                    "Subtle Embroidered Branding - we apply the Allbirds minimalist ethos to our tees. Branding is subtle and each design line is considered and refined",
                    "Subtle Embroidered Branding - embroidered script logo above the hem line on the left side of the tee",
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
                careDesc="Machine wash on cold using mild detergent and then tumble dry low. Or, to minimize your carbon footprint & maximize your product’s lifetime, air dry. Do not iron, bleach, or dry clean."
            />

            <section className="my-10 px-2.5">
                <h2 className="my-6 text-center font-serif text-3xl text-black md:mt-8 md:mb-10 md:text-[40px]">
                    How to Style
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <img
                            src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_SoftMerinoTee-Men_PDPStyling-01_Lifestyle_Desktop_2x3_a9989dde-010d-4bbb-a030-502897304194.png?v=1751420356&width=1024"
                            alt="How to Style 1"
                            className="aspect-[4/5] w-full rounded-3xl object-cover"
                        />
                    </div>

                    <div>
                        <img
                            src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_SoftMerinoTee-Men_PDPStyling-02_Lifestyle_Desktop_2x3_e094f3b4-c019-4fb4-b4e0-9b7cc8c918f8.png?v=1751420356&width=1024"
                            alt="How to Style 2"
                            className="aspect-[4/5] w-full rounded-3xl object-cover"
                        />
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