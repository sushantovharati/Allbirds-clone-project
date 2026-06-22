import Link from "next/link";
import Image from "next/image";

export default function DasherCard() {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden rounded-[24px]">
      <Image
        src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Collections-TilePromo-4Grid-1x1_AssetName_Desktop_2x3_912dd80b-7a1c-46b3-bd72-cb3f1829e9e7.jpg?v=1770077221&width=1600"
        alt="Dasher NZ"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="mb-3 text-2xl font-normal">
          Dasher NZ
        </h2>

        <p className="mb-6 text-[15px] font-bold leading-6">
          Comfort That Keeps Up
        </p>

        <Link
          href="/pages/dasher-nz-collection"
          className="flex h-11 items-center justify-center rounded-full border border-white px-7 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}