import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden p-3 mt-[29px]">
      <div className="relative h-[580px] overflow-hidden rounded-[17px]">
        <img
          src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_Site_Homepage_Hero_Desktop_16x9-3.jpg?v=1779316981&width=2560"
          alt="Allbirds hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-[70px] right-16 text-right text-white">
          <p className="mb-3 text-sm font-light tracking-[0.25em]">
            ALL NEW DASHER NZ COLLECTION
          </p>
          <h1 className="text-2xl font-">
            Wildly Comfortable. Super Natural.
          </h1>

          <div className="flex flex-right gap-3 pl-[170px]">
            <Link
              href="products/mens-dasher-nz-natural-black-blizzard"
              className="
                        flex h-8 items-center justify-center
                        rounded-full
                        border border-white
                        bg-white
                        px-5
                        mt-5
                        w-[140px]
                        text-sm font-bold text-black
                        transition-all duration-300
                        hover:bg-black
                        hover:text-white
                        hover:border-black"
            >
              SHOP MEN
            </Link>

            <Link
              href="products/womens-dasher-nz-blizzard"
              className="
                        flex h-8 items-center justify-center
                        rounded-full
                        border border-white
                        bg-white
                        px-5
                        mt-5
                        text-sm font-bold text-black
                        transition-all duration-300
                        hover:bg-black
                        hover:text-white
                        hover:border-black"
            >
              SHOP WOMEN
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
