// src/components/new-arrivals/CollectionCards.tsx

import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "Men's",
    button: "SHOP MEN'S",
    href: "/collections/mens",
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_01_Lifestyle.jpg?v=1774909856&width=1024",
  },
  {
    title: "Women's",
    button: "SHOP WOMEN'S",
    href: "/collections/womens",
    image:
      "https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_Site_Homepage_CategoryRow-01_Desktop-Mobile_2x3_04_Lifestyle.jpg?v=1774909855&width=1024",
  },
  {
    title: "Apparel",
    button: "SHOP APPAREL",
    href: "/collections/apparel",
    image:
      "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Collections_3xPromo-Apparel_Lifestyle_Desktop_2x3_1.png?v=1751420661&width=1024",
  },
];

export default function CollectionCards() {
  return (
    <section className="mt-10 grid grid-cols-1 gap-4 px-6 lg:grid-cols-3">
      {collections.map((item) => (
        <div
          key={item.title}
          className="group relative h-[760px] overflow-hidden rounded-[26px]"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10" />

          <h2 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[58px] font-normal text-white">
            {item.title}
          </h2>

          <Link
            href={item.href}
            className="absolute bottom-7 left-7 right-7 z-10 rounded-full border border-white py-2 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            {item.button}
          </Link>
        </div>
      ))}
    </section>
  );
}