"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedProductsProps {
  title?: string;
  badge?: string;
  productCount?: number;
  gender?: string;
}

export default function RelatedProductsContent({
  title = "You May Also Like: ",
  badge = "NEW",
  productCount = 6,
  gender = "men",
}: RelatedProductsProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?gender=${gender}&badge=${badge}`)
      .then((res) => res.json())
      .then((data) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, productCount));
      });
  }, [badge, productCount]);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-3 py-3">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="border-b border-black text-[14px] font-medium uppercase tracking-[0.25em]">
          {title}
        </h2>

        <div className="hidden gap-3 md:flex">
          <button
            onClick={scrollLeft}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={scrollRight}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-white"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="
          flex
          gap-3
          overflow-x-auto
          scroll-smooth
          pb-2
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group min-w-[360px] flex-1 overflow-hidden rounded-[18px] bg-white"
          >
            <div className="relative h-[320px] overflow-hidden">
              {product.badge && (
                <span className="absolute left-6 top-6 z-10 rounded-full bg-[#e7e4dd] px-3 py-2 text-xs font-bold tracking-wider">
                  {product.badge}
                </span>
              )}

              <img
                src={
                  product.images?.[0]?.url?.startsWith("http")
                    ? product.images[0].url
                    : `http://localhost:5000${product.images?.[0]?.url}`
                }
                alt={product.title}
                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="px-5 pb-6">
              <h3 className="text-[18px] font-bold uppercase tracking-wide">
                {product.title}
              </h3>

              <p className="mt-2 text-[17px]">
                {product.color?.name}
              </p>

              <p className="mt-4 text-[18px] font-bold">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}