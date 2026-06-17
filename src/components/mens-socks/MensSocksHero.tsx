import Link from "next/link";

export default function MensSocksHero() {
    return (
        <section className="relative top-10 mb-4 h-[220px] rounded-[18px]">
            {/* Breadcrumb */}
            <div className="absolute left-7 top-5 flex items-center text-[16px] text-[#243b53]">
                <Link href="/" className="hover:underline">
                    Home
                </Link>

                <span className="mx-2">/</span>

                <Link href="/collections/mens" className="hover:underline">
                    Mens
                </Link>

                <span className="mx-2">/</span>

                <Link
                    href="/collections/mens-socks"
                    className="hover:underline"
                >
                    Men's Socks
                </Link>
            </div>

            {/* Center Content */}
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <h1 className="text-[24px] font-normal leading-tight text-[#212121]">
                    Men's Socks
                </h1>

                <p className="mt-4 max-w-[900px] text-[14px] font-semibold text-[#4b5563]">
                    Our Anytime Socks are made from the best materials nature has to offer.
                    Pair them with Allbirds shoes for <br /> unbeatable comfort that’s even better
                    together.
                </p>
            </div>
        </section>
    );
}