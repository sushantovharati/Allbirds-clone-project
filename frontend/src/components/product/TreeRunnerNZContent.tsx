type Props = {
    product: {
        title: string;
        image: string;
    };
};

export default function TreeRunnerNZContent({ product }: Props) {
    return (
        <>
            <section className="m-2.5 my-10 rounded-lg bg-white shadow-sm lg:rounded-none lg:bg-transparent lg:shadow-none">
                <div className="rounded-3xl bg-white px-7 shadow-sm">
                    <button className="flex w-full items-center justify-between py-6">
                        <span className="font-mono text-base uppercase tracking-widest">
                            WHY WE LOVE THIS
                        </span>
                        <PlusIcon open />
                    </button>

                    <div className="relative flex items-center justify-center gap-8 pb-4">
                        <div className="w-1/3 max-w-[400px]">
                            <p className="text-lg leading-7 text-black">
                                The latest iteration of our fan-fave Tree Runner nods to our New
                                Zealand roots, tying ten years of innovation together in a shoe as
                                stylish as it is comfortable. Offering a slightly more structured
                                build than the original, this light, breathable, sneaker is made to
                                move.
                            </p>

                            <BestFor />
                            <TechnicalDetails />
                        </div>

                        <div className="relative aspect-square w-1/3 max-w-[600px] grow">
                            <div className="absolute inset-0 m-auto aspect-square w-[87%]">
                                <div className="absolute inset-0 rounded-full border border-[#ece9e2] opacity-70" />
                                <div className="absolute inset-4 rounded-full border border-[#ece9e2] opacity-70" />
                                <div className="absolute inset-8 rounded-full bg-[#f3f1ec]" />
                            </div>

                            <img
                                src={product.image}
                                alt={product.title}
                                className="absolute inset-8 h-[calc(100%-64px)] w-[calc(100%-64px)] object-contain"
                            />
                        </div>

                        <div className="w-1/3 max-w-[400px]">
                            <ThoughtfullyDesigned />
                        </div>
                    </div>
                </div>

                <div className="mt-2.5 rounded-3xl bg-white px-7 shadow-sm">
                    <button className="flex w-full items-center justify-between py-6">
                        <span className="font-mono text-base uppercase tracking-widest">
                            Materials & Sustainability
                        </span>
                        <PlusIcon />
                    </button>

                    <div className="flex gap-x-6 pb-8 lg:gap-x-12">
                        <MaterialsList />
                    </div>
                </div>

                <div className="mt-2.5 rounded-3xl bg-white px-7 shadow-sm">
                    <button className="flex w-full items-center justify-between py-6">
                        <span className="font-mono text-base uppercase tracking-widest">
                            Care instructions
                        </span>
                        <PlusIcon />
                    </button>

                    <p className="pb-8 text-sm leading-5 text-black">
                        Yes, they’re machine washable. Remove the insoles, hand wash those
                        separately, and let everything air dry. Fresh again.
                    </p>
                </div>
            </section>

            <section className="my-10">
                <div className="px-2.5">
                    <div className="grid auto-rows-fr grid-cols-2 gap-2.5 md:grid-cols-4">
                        <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl bg-transparent">
                            <img
                                src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_TreeRunnerNZ-Men_PDPColorGrid-01_Lifestyle_Desktop_1x1_b11dc46e-f49d-428c-9da0-01185192f492.jpg?v=1752085755&width=1024"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-2xl bg-transparent">
                            <img
                                src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_TreeRunnerNZ-Men_PDPColorGrid-02_Texture_Desktop_16x9_bed85fb7-9f3a-46c9-9dd7-afff688f85e0.jpg?v=1752085756&width=1024"
                                alt=""
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-white">
                                <p className="text-sm font-medium md:text-2xl">Modern + Refined</p>
                                <p className="text-sm md:text-base">
                                    Minimalist look, to maximum effect. These comfy kicks add easy
                                    sophistication to your outings.
                                </p>
                            </div>
                        </div>

                        <div className="relative row-span-2 aspect-[1/2] overflow-hidden rounded-2xl bg-white">
                            <img
                                src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_TreeRunnerNZ-Men_PDPColorGrid-03_Lifestyle_Desktop_9x16_339c0979-a5ee-4e79-b763-6f24b9053796.jpg?v=1752085756&width=1024"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="relative row-span-2 aspect-[1/2] overflow-hidden rounded-2xl bg-white">
                            <img
                                src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_TreeRunnerNZ-Men_PDPColorGrid-04_Lifestyle_Desktop_9x16_08aa0039-ae5a-4072-80aa-1ee9b0935e85.jpg?v=1752085756&width=1024"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-black">
                                <p className="text-sm font-medium md:text-2xl">Travel Essentials</p>
                                <p className="text-sm md:text-base">
                                    When you packed a bunch of outfits and need one versatile pair of
                                    shoes to go with them: bring these.
                                </p>
                            </div>
                        </div>

                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-transparent">
                            <img
                                src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_TreeRunnerNZ-Men_PDPColorGrid-05_Lifestyle_Desktop_16x9_d49812ac-747e-407a-9892-73fbfef22c67.jpg?v=1752085757&width=1024"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto my-5 md:my-10 md:max-w-4xl">
                <div className="text-center">
                    <h1 className="font-serif text-3xl font-normal text-[#243b53] md:text-5xl">
                        Breathable By Nature
                    </h1>
                </div>
            </section>

            {/* Section 4: Material Hero Feature */}
            <section className="relative mx-2.5 my-10 h-[calc(175vw)] max-h-[98vh] overflow-hidden rounded-xl md:h-[calc(100vw*0.5625)] md:max-h-[90vh] md:rounded-3xl">
                {/* Desktop Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hidden h-[calc(100vw*0.5625)] max-h-[90vh] w-full rounded-3xl object-cover md:block"
                    poster="https://www.allbirds.com/cdn/shop/files/preview_images/99ea42d721a54ab7b128e5850984fda4.thumbnail.0000000000.jpg?v=1751420378&width=1920"
                >
                    <source
                        src="https://www.allbirds.com/cdn/shop/videos/c/vp/99ea42d721a54ab7b128e5850984fda4/99ea42d721a54ab7b128e5850984fda4.HD-1080p-3.3Mbps-50402257.mp4?v=0"
                        type="video/mp4"
                    />
                </video>

                {/* Mobile Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[calc(175vw)] w-full rounded-xl object-cover md:hidden"
                    poster="https://www.allbirds.com/cdn/shop/files/preview_images/dd9018c1ba3f41d7883cbd17351412c1.thumbnail.0000000000.jpg?v=1751420373&width=1080"
                >
                    <source
                        src="https://www.allbirds.com/cdn/shop/videos/c/vp/dd9018c1ba3f41d7883cbd17351412c1/dd9018c1ba3f41d7883cbd17351412c1.HD-1080p-3.3Mbps-50402258.mp4?v=0"
                        type="video/mp4"
                    />
                </video>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full md:w-[50%] md:max-w-[65vh]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 200 200"
                            className="w-full"
                        >
                            <circle cx="100" cy="100" r="70" fill="#212121" fillOpacity=".1" />

                            <circle
                                cx="100"
                                cy="100"
                                r="80"
                                stroke="#fff"
                                strokeWidth=".6"
                                strokeOpacity=".7"
                            />

                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                stroke="#fff"
                                strokeWidth=".6"
                                strokeOpacity=".4"
                            />

                            <circle cx="181.7" cy="137.8" r="1.8" fill="white" />
                            <circle cx="180.2" cy="59.1" r="1.8" fill="white" />
                            <circle cx="19.8" cy="59.1" r="1.8" fill="white" />
                            <circle cx="19.6" cy="140.5" r="1.8" fill="white" />
                        </svg>

                        <img
                            src={product.image}
                            alt={product.title}
                            className="absolute inset-0 m-auto w-[70%] object-contain"
                        />

                        <FeatureCallout
                            className="left-[-220px] top-[28%] text-right"
                            title="BREATHABLE"
                            text="Our Tree Knit is naturally airy and pleasantly cool."
                        />

                        <FeatureCallout
                            className="left-[-220px] top-[68%] text-right"
                            title="LIGHTWEIGHT"
                            text="Flexible, functional, and made to move."
                        />

                        <FeatureCallout
                            className="right-[-220px] top-[28%] text-left"
                            title="SUPPORTIVE"
                            text="Our proprietary sugarcane-based SweetFoam® midsole is both sturdy and super soft."
                        />

                        <FeatureCallout
                            className="right-[-220px] top-[68%] text-left"
                            title="RESPONSIBLY SOURCED"
                            text="Made with our TENCEL™ Lyocell (tree fiber) blend and recycled polyester upper and a Merino wool blend lining."
                        />
                    </div>
                </div>

                {/* Mobile callouts */}
                <div className="absolute bottom-10 left-0 right-0 px-6 md:hidden">
                    <div className="flex gap-4 overflow-x-auto">
                        {[
                            {
                                title: "BREATHABLE",
                                text: "Our Tree Knit is naturally airy and pleasantly cool.",
                            },
                            {
                                title: "LIGHTWEIGHT",
                                text: "Flexible, functional, and made to move.",
                            },
                            {
                                title: "SUPPORTIVE",
                                text: "Our proprietary sugarcane-based SweetFoam® midsole is both sturdy and super soft.",
                            },
                            {
                                title: "RESPONSIBLY SOURCED",
                                text: "Made with our TENCEL™ Lyocell (tree fiber) blend and recycled polyester upper and a Merino wool blend lining.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="min-w-[80%] text-left text-white">
                                <svg
                                    className="-ml-4"
                                    width="300%"
                                    height="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="5" cy="10" r="5" fill="#fff" />
                                    <line
                                        x1="10"
                                        y1="10"
                                        x2="100%"
                                        y2="10"
                                        stroke="#fff"
                                        strokeWidth="2"
                                    />
                                </svg>

                                <div className="mt-4 flex flex-col gap-1">
                                    <h3 className="font-mono text-xs leading-5 tracking-widest">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-5">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>

    );
}

function ThoughtfullyDesigned() {
    return (
        <div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#555]">
                Thoughtfully designed
            </h3>

            <ul className="mt-4 list-disc pl-5">
                <li className="mb-3 text-base leading-6 text-black">
                    <strong>Breathable TENCEL™ Lyocell (tree fiber)</strong> and recycled
                    polyester blend upper for a light, cool feel
                </li>
                <li className="mb-3 text-base leading-6 text-black">
                    Sugarcane-based <strong>SweetFoam® cushioning</strong> with responsive
                    energy return
                </li>
                <li className="mb-3 text-base leading-6 text-black">
                    <strong>Soft, Merino-wool</strong> blend lining
                </li>
                <li className="mb-3 text-base leading-6 text-black">
                    Plush <strong>Featherbed™ memory foam</strong> insole for extra comfort
                    and bounce
                </li>
            </ul>
        </div>
    );
}

function BestFor() {
    return (
        <div className="mt-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#555]">
                Best for
            </h3>

            <div className="mb-8 mt-4 flex flex-wrap gap-3">
                {["Traveling", "Walking", "Commuting", "Everyday"].map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-[#f3f1ec] px-2 py-1 text-sm text-black"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function TechnicalDetails() {
    return (
        <div>
            <button className="flex items-center gap-2 text-[#555]">
                <ArrowIcon />
                <span className="text-sm underline">View technical details</span>
            </button>

            <ul className="mt-4 list-disc pl-10">
                <li className="mb-3 text-base leading-6 text-black">
                    <strong>Weight:</strong> 8.9oz (M9), 7.1oz (W7)
                </li>
                <li className="mb-3 text-base leading-6 text-black">
                    <strong>Stack Height:</strong> Heel: 20mm Toe: 10.2mm
                </li>
                <li className="mb-3 text-base leading-6 text-black">
                    <strong>Heel/Toe Drop:</strong> 9.8mm
                </li>
                <li className="mb-3 text-base leading-6 text-black">
                    <strong>Country of Origin:</strong> Vietnam
                </li>
            </ul>
        </div>
    );
}

function MaterialsList() {
    const materials = [
        {
            label: "Upper",
            name: "Tree Knit",
            image:
                "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Tree_600x600_41d4fd06-223d-4bcd-8f95-f93fa6f6fa23.jpg?v=1772058463&width=1024",
            text: "Knit upper made from eucalyptus-derived TENCEL™ Lyocell (tree fiber) yarn and recycled polyester blend",
        },
        {
            label: "Midsole",
            name: "SweetFoam®",
            image:
                "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Sugarcane_600x600_cfb05fbd-72b3-4e38-82f1-a1b2f4769c8b.jpg?v=1772058166&width=1024",
            text: "SweetFoam® sugarcane-based EVA foam provides comfort and durability while being light on the planet",
        },
        {
            label: "Laces",
            name: "Recycled Polyester",
            image:
                "https://www.allbirds.com/cdn/shop/files/PDP_Materials_RecycledPlastic_600x600_93ac2398-4951-4eeb-9297-748c56da3bdb.jpg?v=1772059600&width=1024",
            text: "100% recycled polyester laces sourced from plastic bottles",
        },
    ];

    return (
        <>
            {materials.map((item) => (
                <div key={item.name} className="flex flex-1 items-start gap-4">
                    <div className="relative size-20 shrink-0">
                        <div className="absolute inset-0 rounded-full border border-[#ece9e2]" />
                        <img
                            src={item.image}
                            alt={item.name}
                            className="absolute inset-1 size-[72px] rounded-full object-cover"
                        />
                    </div>

                    <div className="flex max-w-[400px] flex-col gap-1">
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm text-[#555]">{item.label}</span>
                            <span className="text-base font-medium text-black">
                                {item.name}
                            </span>
                        </div>
                        <p className="text-sm leading-5 text-black">{item.text}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

function PlusIcon({ open = false }: { open?: boolean }) {
    return (
        <span className="relative size-4">
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
            <span
                className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current ${open ? "rotate-0" : "rotate-90"
                    }`}
            />
        </span>
    );
}

function ArrowIcon() {
    return (
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1464 7.52512C10.3417 7.32986 10.6583 7.32986 10.8536 7.52512L15.0962 11.7678C15.2915 11.963 15.2915 12.2796 15.0962 12.4749L10.8536 16.7175C10.6583 16.9128 10.3417 16.2057 10.1464 16.0104L14.0355 12.1213L10.1464 8.23223C9.95118 8.03697 9.95118 7.72039 10.1464 7.52512Z"
                fill="currentColor"
            />
        </svg>
    );
}

function FeatureCallout({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) {
  return (
    <div
      className={`absolute hidden w-52 flex-col gap-1 text-white md:flex ${className}`}
    >
      <h3 className="font-mono text-xs tracking-widest">{title}</h3>
      <p className="text-sm leading-5">{text}</p>
    </div>
  );
}