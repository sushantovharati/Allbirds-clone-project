import Image from "next/image";

export default function MensNewArrivalsHero() {
  return (
    <section className="relative mb-4 h-[370px] overflow-hidden rounded-[18px]">
      <Image
        src="https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_NA_Collections-Header_Desktop_16x9_M.jpg?v=1774909871&width=2048"
        alt="Men's New Arrivals"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-7 top-20 z-10 text-white">
        <p className="text-[16px]">
          Home&nbsp; / &nbsp;Mens&nbsp; / &nbsp;New Arrivals
        </p>
      </div>

      <div className="absolute bottom-8 left-7 z-10 text-white">
        <h1 className="text-[24px] font-normal leading-tight">New Arrivals</h1>
        <p className="mt-3 text-[12px] font-semibold">
          Start the season with comfort, style, and versatility.
        </p>
      </div>
    </section>
  );
}