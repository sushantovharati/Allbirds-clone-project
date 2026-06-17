// "use client";

// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const products = [
//   {
//     tag: "NEW",
//     name: "WOMEN'S CANVAS CRUISER SLIP ON",
//     color: "Warm White",
//     price: "$75",
//     image:
//       "https://www.allbirds.com/cdn/shop/files/A12364_26Q1_Cruiser-Slip-On-Canvas-Warm-White-Natural-White_PDP_LEFT_9273769a-0a6f-47f4-a002-6d308f1f3e0e.png?v=1768946967&width=1280",
//     slug: "womens-canvas-cruiser-slip-on-warm-white",
//   },
//   {
//     tag: "NEW",
//     name: "WOMEN'S CRUISER SLIP ON",
//     color: "Blizzard",
//     price: "$100",
//     image:
//       "https://www.allbirds.com/cdn/shop/files/A12451_26Q1_Cruiser-Slip-On-Blizzard-Blizzard-Sole_PDP_LEFT_6b76e0cd-df5b-4ddc-bb7e-b354f44bbd8a.png?v=1768947332&width=2048",
//     slug: "womens-cruiser-slip-on-blizzard",
//   },
//   {
//     tag: "NEW",
//     name: "WOMEN'S RUNNER NZ SLIP ON",
//     color: "Mushroom",
//     price: "$105",
//     image:
//       "https://www.allbirds.com/cdn/shop/files/A12622_26Q1_Runner-NZ-Slip-On-Mushroom-Mushroom_PDP_LEFT_f22365dc-8298-40c8-a456-acf947b20a90.png?v=1768951496&width=1280",
//     slug: "womens-runner-nz-slip-on-mushroom",
//   },
//   {
//     tag: "NEW",
//     name: "WOMEN'S RUNNER NZ SLIP ON",
//     color: "Anthracite",
//     price: "$105",
//     image:
//       "https://www.allbirds.com/cdn/shop/files/A12386_26Q1_Runner-NZ-Slip-On-Anthracite-Dark-Anthr-Sole_PDP_LEFT_7ec4ff21-9ae4-4f0f-9a3c-e813a8404674.png?v=1768951351&width=1280",
//     slug: "womens-runner-nz-slip-on-anthracite",
//   },
// ];

// export default function BestSellers() {
//   return (
//     <section className="px-3 py-3">
//       <div className="mb-10 flex items-center justify-between">
//         <h2 className="border-b border-black text-[14px] font-medium uppercase tracking-[0.25em]">
//           Best Sellers
//         </h2>

//         <div className="hidden gap-3 md:flex">
//           <button className="flex h-12 w-12 items-center justify-center rounded-full border border-black">
//             <ChevronLeft size={22} />
//           </button>
//           <button className="flex h-12 w-12 items-center justify-center rounded-full border border-black">
//             <ChevronRight size={22} />
//           </button>
//         </div>
//       </div>

//       <div className="flex gap-3 overflow-x-auto pb-2">
//         {products.map((product) => (
//           <Link
//             key={product.slug}
//             href={`/products/${product.slug}`}
//             className="group min-w-[360px] flex-1 overflow-hidden rounded-[18px] bg-white"
//           >
//             <div className="relative h-[320px] overflow-hidden">
//               <span className="absolute left-6 top-6 z-10 rounded-full bg-[#e7e4dd] px-3 py-2 text-xs font-bold tracking-wider">
//                 {product.tag}
//               </span>

//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
//               />
//             </div>

//             <div className="px-5 pb-6">
//               <h3 className="text-[18px] font-bold uppercase tracking-wide">
//                 {product.name}
//               </h3>

//               <p className="mt-2 text-[17px]">{product.color}</p>

//               <div className="mt-4 flex items-center justify-between">
//                 <div className="h-8 w-8 rounded-full border border-black p-1">
//                   <div className="h-full w-full rounded-full bg-[#ded8cc]" />
//                 </div>

//                 <p className="text-[18px] font-bold">{product.price}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

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
                <div className="flex gap-2">
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
                </div>

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