import Link from "next/link";
import Image from "next/image";

export default function LargeProductCarousel() {
    return (
        <section className="relative mb-3 mt-24 overflow-x-clip">
            {/* Category Button */}
            <div className="relative z-10 mb-8 flex items-center justify-center gap-10">
                <Link
                    href="/collections/mens-dasher-nz-cl"
                    className="cursor-pointer border-b-2 border-black pb-1 font-mono text-sm font-medium uppercase tracking-wider text-black transition-opacity hover:opacity-70 md:text-base"
                >
                    Dasher NZ Collection
                </Link>
            </div>

            {/* Product Image Area */}
            <div className="relative -my-[8%] select-none">
                {/* Dotted Background */}
                <div className="absolute inset-0 m-auto h-full w-full md:h-[70%] md:w-[70%]">
                    <div className="relative h-full w-full overflow-hidden bg-[#f7f4ef] opacity-60">
                        <div className="absolute inset-0 bg-[radial-gradient(#8f8a84_1.5px,transparent_1.5px)] [background-size:30px_30px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#ece9e2_75%)]" />
                    </div>
                </div>

                {/* Product Image */}
                <div className="relative z-10 mx-auto aspect-square w-[750px] max-w-[90vw]">
                    <Image
                        src="https://www.allbirds.com/cdn/shop/files/A12640_26Q1_Dasher-NZ-Relay-Natural-Black-Blizzard_PDP_LEFT.png?v=1768950664&width=1600"
                        alt="Men's Dasher NZ Relay - Natural Black"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="relative z-10 flex w-full flex-col items-center gap-5 text-center">
                <h3 className="font-serif text-[30px] leading-[30px] text-black md:text-[40px] md:leading-10">
                    Dasher NZ Relay
                </h3>

                <div className="flex items-center gap-2.5">
                    <p className="text-xs leading-5">Natural Black (Blizzard Sole)</p>
                    <span>-</span>
                    <span className="text-xs font-medium uppercase tracking-widest leading-5">
                        $135
                    </span>
                </div>

                <Link
                    href="/products/mens-dasher-nz-relay-natural-black-blizzard"
                    className="flex h-11 min-w-32 items-center justify-center rounded-full border border-black px-6 text-sm font-bold text-black transition hover:bg-black hover:text-white"
                >
                    Shop Men
                </Link>
            </div>

            <div className="mx-2.5 my-10 flex justify-around gap-[15px] px-10 max-md:flex-col md:my-20 md:gap-10 lg:gap-15 lg:px-25 xl:gap-24 xl:px-35">
                <p className="min-w-[20vw] pt-1 text-center font-sans text-xs leading-5 tracking-widest uppercase md:text-left pl-[30px] pr-0">
                    DRIVEN BY A BELIEF IN BETTER, WE TURNED TO NATURE FOR ANSWERS.
                </p>

                <p className="text-center font-sans text-sm leading-5 md:text-left md:text-2xl md:leading-8 px-[60px]">
                    From sugarcane to tree fiber to responsibly-sourced Merino wool, we’re
                    finding new uses for materials that nature has already perfected. It’s
                    part of our commitment to doing better things in a better way, while still
                    making the most comfortable shoes on the planet.
                </p>
            </div>
        </section>
    );
}