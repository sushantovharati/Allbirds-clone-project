import Link from "next/link";

export default function DasherHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[530px] overflow-hidden rounded-[17px]">
        <img
          src="https://www.allbirds.com/cdn/shop/files/26Q1_DasherNZ_LandingPage-Hero_Desktop_16x9_dcf7c25a-b129-4f74-a190-f12e5fd643e5.jpg?v=1770058005&width=2560"
          alt="Dasher hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-[70px] left-16 text-right text-white">
          

          <div className="flex flex-left gap-3">
            <Link
              href="/collections/mens-dasher-nz-cl"
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
              href="/collections/womens-dasher-nz-cl"
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
