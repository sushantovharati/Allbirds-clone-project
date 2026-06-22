"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { bestsellers } from "@/app/data/bestsellers";

export default function BestSellers() {
  const sliderRef = useRef<HTMLDivElement>(null);

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
          Best Sellers
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
        {bestsellers.map((product, index) => (
          <Link
            key={`${product.slug}-${product.color}-${index}`}
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
                src={product.images[0]}
                alt={product.title}
                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="px-5 pb-6">
              <h3 className="text-[18px] font-bold uppercase tracking-wide">
                {product.title}
              </h3>

              <p className="mt-2 text-[17px]">{product.color}</p>

              <div className="mt-4 flex items-center justify-between">
                {/* <div className="flex gap-2">
                  {product.colors.slice(0, 4).map((color, idx) => (
                    <div
                      key={idx}
                      className="h-8 w-8 rounded-full border border-black p-1"
                    >
                      <div
                        className="h-full w-full rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  ))}
                </div> */}

                <p className="text-[18px] font-bold">
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}