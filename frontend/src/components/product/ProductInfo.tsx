"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cartContext";

type Product = {
  slug: string;
  family: string;
  gender: string;
  title: string;
  price: number;
  color: {
    name: string;
    group: string;
    code: string;
  };
  edition?: string;
  sizes: string[];
  images: {
    url: string;
    filename: string;
  }[];
  sale?: boolean;
  discountPercent?: number;
  productTypes: string[];
  category: "apparel" | "shoes" | "socks";
};

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  const router = useRouter();
  const { addItem } = useCart();

  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products/related-colors?title=${encodeURIComponent(
        product.title
      )}&gender=${product.gender}`
    )
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data));
  }, [product.title, product.gender]);


  const [oppositeSlug, setOppositeSlug] = useState<string | null>(null);

  function getOppositeSlug(slug: string) {
    if (slug.startsWith("mens-")) {
      return slug.replace("mens-", "womens-");
    }

    if (slug.startsWith("womens-")) {
      return slug.replace("womens-", "mens-");
    }

    return null;
  }

  useEffect(() => {
    const targetSlug = getOppositeSlug(product.slug);

    if (!targetSlug) {
      setOppositeSlug(null);
      return;
    }

    fetch(`http://localhost:5000/products/slug-exists/${targetSlug}`)
      .then((res) => res.json())
      .then((data) => {
        setOppositeSlug(data.exists ? data.slug : null);
      });
  }, [product.slug]);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const priceNumber = product.price;

  const salePrice =
    product.sale && product.discountPercent
      ? Math.ceil(
        priceNumber -
        (priceNumber * product.discountPercent) / 100
      )
      : priceNumber;

  const isFreeShipping = salePrice > 100;

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem({
      id: product.slug,
      name: product.title,
      price: salePrice,
      color: product.edition
        ? `${product.color.name} (${product.edition})`
        : product.color.name,
      size: selectedSize,
      image: product.images[0]?.url?.startsWith("http")
        ? product.images[0].url
        : `http://localhost:5000${product.images[0]?.url}`,
      quantity: 1,

      category: product.category,
    });
  };

  return (
    <aside className="mt-[40px] grid grid-cols-1 gap-5 rounded-xl bg-white p-4 px-[40px] shadow-sm max-md:mx-2.5 md:sticky md:top-[112px] md:self-start">
      <div className="flex flex-col gap-1">
        <h1 className="font-serif text-2xl font-normal leading-tight text-black md:text-3xl">
          {product.title}
        </h1>

        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#6b6b6b] md:text-sm">
          Also available in:{" "}
          <button
            type="button"
            onClick={() => {
              if (oppositeSlug) {
                router.push(`/products/${oppositeSlug}`);
              }
            }}
            className="cursor-pointer underline"
          >
            {product.gender === "men" ? "Women's Sizes" : "Men's Sizes"}
          </button>
        </p>

        <div className="mt-3 flex items-center gap-2">
          {product.sale && product.discountPercent ? (
            <>
              <span className="text-lg font-semibold text-[#b21f1f]">
                ${salePrice}
              </span>

              <span className="text-lg text-[#777] line-through">
                ${product.price}
              </span>

              <span className="text-sm text-[#b21f1f]">
                ({product.discountPercent}% off)
              </span>
            </>
          ) : (
            <span className="text-lg font-medium uppercase tracking-wider text-black">
              ${product.price}
            </span>
          )}

          {isFreeShipping && (
            <span className="rounded-full bg-[#f3f1ec] px-2 py-1 text-xs font-medium uppercase italic tracking-wider text-black">
              + Free shipping
            </span>
          )}
        </div>

      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-black md:text-sm">
          Color:{" "}
          <span className="font-sans normal-case tracking-normal text-[#555]">
            {product.color.name}
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
              onClick={() =>
                router.push(
                  item.sale
                    ? `/products/${item.slug}?sale=true`
                    : `/products/${item.slug}`
                )
              }
              aria-label={`Select ${item.color.name}`}
              className={`h-9 w-9 rounded-full border transition ${product.slug === item.slug
                ? "border-2 border-black ring-2 ring-black ring-offset-2"
                : "border-gray-300 hover:border-black"
                }`}
              style={{ backgroundColor: item.color.code }}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-4 text-sm uppercase">
          {/* <button
            type="button"
            onClick={() => {
              if (product.gender !== "men" && menVersion) {
                router.push(`/products/${menVersion.slug}`);
              }
            }}
            className={`border-b pb-1 font-mono tracking-wider transition ${product.gender === "men"
              ? "border-black text-black"
              : "border-transparent text-[#666] hover:border-black"
              }`}
          >
            Men's Sizes
          </button> */}

          {/* <button
            type="button"
            onClick={() => {
              if (product.gender !== "women" && womenVersion) {
                router.push(`/products/${womenVersion.slug}`);
              }
            }}
            className={`border-b pb-1 font-mono tracking-wider transition ${product.gender === "women"
              ? "border-black text-black"
              : "border-transparent text-[#666] hover:border-black"
              }`}
          >
            Women's Sizes
          </button> */}
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
              <span>${product.price}</span>
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