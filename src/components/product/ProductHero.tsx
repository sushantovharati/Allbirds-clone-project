"use client"

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

console.log("ProductGallery:", ProductGallery);
type Product = {
    slug: string;
    family: string;
    gender: string;
    title: string;
    price: string;
    color: string;
    edition?: string;
    colors: string[];
    sizes: string[];
    badge?: string;
    images: string[];
};

type Props = {
    product: Product;
};

export default function ProductHero({ product }: Props) {
    return (
        <section className="mx-auto max-w-[1800px] px-4 py-6">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_620px]">
                <ProductGallery product={product} />

                <div className="xl:sticky xl:top-[110px] xl:h-fit">
                    <ProductInfo product={product} />
                </div>
            </div>

        </section>
    );
}