"use client";

import RelatedProductsContent from "./RelatedProductsContent";
import ProductInfoAccordion from "./ProductInfoAccordion";


type ProductProps = {
    gender?: string;
};

export default function MerinoBlendSweatshirt({
    gender = "women",
}: ProductProps) {

    const materials = [
        {
            type: "",
            name: "Material Composition",
            desc: "12% Merino Wool, 7% Tree-derived TENCEL™ Lyocell, 72% Organic Cotton, 9% Recycled Polyester",
            img: "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Tree_600x600_4e80064b-fe40-43b9-83b4-e589370a74a4.jpg?v=1771010465&width=1024",
        },

    ];

    return (
        <>
            <ProductInfoAccordion
                title="Why we made this"
                desc="
                We constructed our Merino Blend sweats with an ultra-soft blend of merino wool, tree, organic cotton, and recycled polyester fibers to create the ideal mid-weight layering piece. Perfect for all-season wear.
                "
                bestFor={["Everyday", "Lounging", "Cool Weather", "Weekends"]}
                productImage={"http://www.allbirds.com/cdn/shop/files/A12107_25Q3_Merino-Blend-Sweatshirt-Natural-White_PDP_Front-2000x2000.png?v=1756506587&width=1024"}
                imageAlt={"Picture is not available now"}
                designedTitle="Thoughtfully Designed"
                designedItems={[
                    "Super Soft Natural & Recycled Fabric - we use premium merino wool, tree, organic cotton, and recycled polyester fibers to make super soft, mid-weight sweats",
                    "Versatile Weight - our 330gsm sweats fabric is what we consider the ideal midweight layer. For reference, our tees are 200gsm and the heaviest sweats you'll find on the market are in the 450-500gsm range",
                    "Subtle Embroidered Branding - tonal embroidered script is the only branding you'll find on Allbirds sweats—a refreshing change from others that look more like billboards than garments",
                ]}
                technicalDetails={[
                    { label: "Weight", value: "17.1oz (size M)" },
                    { label: "Fabric Weight", value: "330 gsm" },
                    { label: "Country of Origin", value: "Peru" },
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
                            src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_MerinoBlendSweatshirt-Women_PDPStyling-01_Lifestyle_Desktop_2x3_a3f0ee1f-3f9c-4a1d-8f59-ece24e4ce2b8.png?v=1751420354&width=1024"
                            alt="How to Style 1"
                            className="aspect-[4/5] w-full rounded-3xl object-cover"
                        />
                    </div>

                    <div>
                        <img
                            src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_MerinoBlendSweatshirt-Women_PDPStyling-02_Lifestyle_Desktop_2x3_b19f3dae-29c1-446d-9e61-34b8eb35292a.png?v=1751420354&width=1024"
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