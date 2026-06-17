"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cartContext";
import { allProducts } from "@/app/data/allProducts";

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
  images: string[];
};

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  const router = useRouter();
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const relatedProducts = allProducts.filter(
    (item) => item.title.trim().toLowerCase() === product.title.trim().toLowerCase() && item.gender === product.gender
  );

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem({
      id: product.slug,
      name: product.title,
      price: Number(product.price.replace("$", "")),
      color: product.edition ? `${product.color} (${product.edition})` : product.color,
      size: selectedSize,
      image: product.images[0],
      quantity: 1,
    });
  };

  return (
    <aside className="grid grid-cols-1 gap-5 rounded-xl bg-white p-4 px-[40px] shadow-sm max-md:mx-2.5 md:sticky md:top-[112px] md:self-start">
      <div className="flex flex-col gap-1">
        <h1 className="font-serif text-2xl font-normal leading-tight text-black md:text-3xl">
          {product.title}
        </h1>

        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#6b6b6b] md:text-sm">
          Also available in:{" "}
          <span className="cursor-pointer underline">Women's Sizes</span>
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-medium uppercase tracking-wider text-black">
            {product.price}
          </span>

          <span className="rounded-full bg-[#f3f1ec] px-2 py-1 text-xs font-medium uppercase italic tracking-wider text-black">
            + Free shipping
          </span>
        </div>
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-black md:text-sm">
          Color:{" "}
          <span className="font-sans normal-case tracking-normal text-[#555]">
            {product.color}
          </span>

          {product.edition && (
            <span className="ml-1 font-sans normal-case tracking-normal text-[#777]">
              ({product.edition})
            </span>
          )}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {relatedProducts.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => router.push(`/products/${item.slug}`)}
              aria-label={`Select ${item.color}`}
              className={`h-9 w-9 rounded-full border transition ${product.slug === item.slug
                ? "border-2 border-black ring-2 ring-black ring-offset-2"
                : "border-gray-300 hover:border-black"
                }`}
              style={{ backgroundColor: item.colors[0] }}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-4 text-sm uppercase">
          <button className="border-b border-black pb-1 font-mono tracking-wider text-black">
            Men's Sizes
          </button>

          <button className="border-b border-transparent pb-1 font-mono tracking-wider text-[#666] transition hover:border-black">
            Women's Sizes
          </button>
        </div>

        <ul className="mt-4 grid grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <li key={size}>
              <button
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`h-10 w-full rounded border text-sm font-medium transition ${selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-black hover:border-black"
                  }`}
              >
                {size}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col items-start gap-1 text-xs text-[#666]">
          <p>The Tree Runner NZ fits true-to-size for most customers.</p>
          <button className="cursor-pointer underline">Fit Guide</button>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          disabled={!selectedSize}
          onClick={handleAddToCart}
          className={`w-full rounded-full border py-4 text-sm font-bold uppercase tracking-wider transition ${selectedSize
            ? "border-black bg-black text-white hover:bg-[#222]"
            : "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-400"
            }`}
        >
          {selectedSize ? (
            <>
              Add to Cart <span className="mx-1">-</span>
              <span>{product.price}</span>
            </>
          ) : (
            "Select A Size"
          )}
        </button>

        <div className="mt-1 flex flex-col items-center justify-center gap-1 text-black">
          <span className="block text-xs">
            Free Shipping on Orders over $100
          </span>
        </div>
      </div>
    </aside>
  );
}