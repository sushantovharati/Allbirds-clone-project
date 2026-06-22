import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mb-4 h-[370px] overflow-hidden rounded-[18px]">
      <Image
        src="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Bestsellers_Men_v2.jpg?v=1774031085&width=2048"
        alt="Men's New Arrivals"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-7 top-20 z-10 text-white">
        <p className="text-[16px]">
          Home&nbsp; / &nbsp;Mens&nbsp; / &nbsp;Bestsellers
        </p>
      </div>

      <div className="absolute bottom-8 left-7 z-10 text-white">
        <h1 className="text-[24px] font-normal leading-tight">Men&apos;s Bestsellers</h1>
        <p className="mt-3 text-[12px] font-semibold">
          Iconic comfort, exceptional style. Shop our most popular men&apos;s shoes.
        </p>
      </div>
    </section>
  );
}