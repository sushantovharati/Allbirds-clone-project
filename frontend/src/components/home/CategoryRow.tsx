"use client";

import Link from "next/link";

const categories = [
  {
    title: "New Arrivals",
    buttons: [
      { label: "Shop Men", href: "/collections/mens-new-arrivals" },
      { label: "Shop Women", href: "/collections/womens-new-arrivals" },
    ],
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_01.jpg?v=1774645561&width=1024",
  },
  {
    title: "Mens",
    buttons: [{ label: "Shop Men", href: "/collections/mens" }],
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_04.jpg?v=1774645561&width=1024",
  },
  {
    title: "Womens",
    buttons: [{ label: "Shop Women", href: "/collections/womens" }],
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_03.jpg?v=1774645561&width=1024",
  },
  {
    title: "Best Sellers",
    buttons: [
      { label: "Shop Men", href: "/collections/mens-bestsellers" },
      { label: "Shop Women", href: "/collections/womens-bestsellers" },
    ],
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_02.jpg?v=1774645561&width=1024",
  },
];

export default function CategoryRow() {
  return (
    <section className="px-2.5 py-6">
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => (
          <div
            key={item.title}
            className="group relative aspect-[0.77] overflow-hidden text-white rounded-[20px] transition-all duration-700 ease-in-out hover:rounded-[48%]"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div
                className="flex flex-col items-center gap-2 transition-all duration-500 group-hover:-translate-y-4"
              >
                {/* Title Button */}
                <div className="rounded-full border border-white px-8 py-2 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 group-hover:border-transparent" >
                  {item.title}
                </div>

                {/* CTA Buttons */}
                <div className="flex max-h-0 flex-col gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {item.buttons.map((button) => (
                    <Link
                      key={button.label}
                      href={button.href}
                      className="rounded-full border border-white px-8 py-2 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}