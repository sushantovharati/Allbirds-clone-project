"use client"

import ProductGallery from "./ProductGallery";
import ProductGalleryMini from "./ProductGalleryMini";
import ProductInfo from "./ProductInfo";

console.log("ProductGallery:", ProductGallery);
type Product = {
    slug: string;
    family: string;
    gender: string;
    title: string;
    price: number;
    edition?: string;
    color: {
        name: string;
        group: string;
        code: string;
    };
    sizes: string[];
    badge?: string;
    images: {
        url: string;
        filename: string;
    }[];
    sale?: boolean;
    discountPercent?: number;
    productTypes: string[];
};

type Props = {
    product: Product;
};

export default function ProductHero({ product }: Props) {
    return (
        <section className="mx-auto max-w-[1800px] px-4 py-6">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_620px]">
                {product.images.length < 5 ? (
                    <ProductGalleryMini product={product} />
                ) : (
                    <ProductGallery product={product} />
                )}

                <div className="xl:sticky xl:top-[110px] xl:h-fit">
                    <ProductInfo product={product} />
                </div>
            </div>

        </section>
    );
}