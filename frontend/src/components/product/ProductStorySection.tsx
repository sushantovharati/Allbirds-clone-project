import Link from "next/link";

export default function ProductStorySection() {
    return (
        <section className="relative my-10 overflow-hidden text-center text-white">
            <div className="relative mx-7 flex aspect-[0.63] flex-col overflow-hidden rounded-xl md:aspect-[2.56] md:rounded-3xl">
                <div className="absolute inset-0">
                    <img
                        src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Moonshot_BrandMessage_Lifestyle_Desktop_16x9_withVeil_4e2589c0-b881-4155-a7c9-b1617e4b9333.jpg?v=1758318144&width=1920"
                        alt=""
                        className="hidden h-full w-full object-cover md:block"
                    />
                    <img
                        src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_Moonshot_BrandMessage_Lifestyle_Mobile_2x3withVeil_41388d8d-27ce-43d0-be23-c9e7ac81b07a.jpg?v=1758320395&width=1024"
                        alt=""
                        className="block h-full w-full object-cover md:hidden"
                    />
                </div>

                <div className="absolute inset-0 bg-black/10" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <svg
                        className="w-[42%] md:w-[33%] md:rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="-5 -5 255 382"
                    >
                        <path
                            d="M 122.5 0.669
         C 190.747 0.669
         244.331 54.253
         244.331 122.5
         L 244.331 249.331
         C 244.331 317.578
         190.747 371.162
         122.5 371.162
         C 54.253 371.162
         0.669 317.578
         0.669 249.331
         L 0.669 122.5
         C 0.669 54.253
         54.253 0.669
         122.5 0.669"
                            stroke="#fff"
                            strokeWidth=".662"
                            fill="none"
                        />

                        <rect
                            width="219.663"
                            height="346.663"
                            x="232.331"
                            y="359.331"
                            stroke="#fff"
                            strokeWidth=".662"
                            rx="109.831"
                            transform="rotate(-180 232.331 359.331)"
                        />

                        <rect
                            width="195.663"
                            height="322.663"
                            x="220.331"
                            y="347.331"
                            fill="#212121"
                            fillOpacity=".1"
                            rx="97.831"
                            transform="rotate(-180 220.331 347.331)"
                        />

                        <rect
                            width="196.663"
                            height="322.663"
                            x="220.331"
                            y="347.331"
                            stroke="#fff"
                            strokeWidth=".662"
                            rx="97.831"
                            transform="rotate(-180 220.331 347.331)"
                        />

                        <circle
                            cx="1"
                            cy="198"
                            r="2.5"
                            fill="white"
                            transform="matrix(-1,0,0,-1,123.49997,569.16179)"
                        />

                        <circle
                            cx="1"
                            cy="186"
                            r="2.5"
                            fill="white"
                            transform="matrix(0.78599,0.61823,-0.61823,0.78599,312.58598,-120.25316)"
                        />

                        <circle
                            cx="1"
                            cy="174"
                            r="2.5"
                            fill="white"
                            transform="matrix(0.66951,-0.7428,0.7428,0.66951,-98.19232,-75.26531)"
                        />
                    </svg>
                </div>

                <div className="relative z-10 m-auto flex flex-col items-center gap-3 px-10 pt-[25%] md:absolute md:inset-0 md:h-fit md:pt-0">
                    <h2 className="text-xl font-normal tracking-wide lg:text-2xl 2xl:text-3xl">
                        Better Things in a Better Way
                    </h2>

                    <p className="text-xs font-semibold lg:text-sm 2xl:text-base">
                        Looking to the world's greatest innovator - Nature
                    </p>

                    <Link
                        href="/pages/our-story"
                        className="my-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#212121] transition hover:bg-[#f1f1f1]"
                    >
                        Learn More
                    </Link>
                </div>

                <div className="relative z-10 mb-9 mt-auto overflow-visible md:static">
                    <ul className="flex gap-2 whitespace-nowrap px-4 md:block md:px-0">
                        <li className="inline-block md:absolute md:right-[17%] md:top-[16%]">
                            <Callout>Responsible Energy</Callout>
                        </li>

                        <li className="inline-block md:absolute md:left-[12%] md:top-[47%]">
                            <Callout>Renewable Materials</Callout>
                        </li>

                        <li className="inline-block md:absolute md:bottom-[20%] md:right-[12%]">
                            <Callout>Regenerative Agriculture</Callout>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <p className="rounded-full border border-white/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[1.2px] text-white backdrop-blur-sm lg:text-xs">
            {children}
        </p>
    );
}