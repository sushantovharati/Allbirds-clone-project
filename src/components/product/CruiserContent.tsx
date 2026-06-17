type Props = {
    product: {
        image: string;
        title: string;
    };
};

export default function CruiserContent({ product }: Props) {
    return (
        <>
            <section className="m-2.5 my-10 rounded-lg bg-white shadow-sm lg:rounded-none lg:bg-transparent lg:shadow-none">
                {/* Mobile */}
                <div className="lg:hidden">
                    <MobileSection title="Why we made this" open>
                        <p className="text-base text-black">
                            Minimal and modern, our signature classic court shoe delivers the
                            right balance of style and urban comfort. Lightweight, breathable,
                            and made to move, this is your new go-to for life on the go.
                        </p>

                        <ThoughtfullyDesigned />

                        <BestFor />

                        <TechnicalDetails />
                    </MobileSection>

                    <MobileSection title="Materials & Sustainability">
                        <MaterialsList />
                    </MobileSection>

                    <MobileSection title="Care instructions">
                        <p className="text-sm leading-5 text-black">
                            Yes, they’re machine washable. Remove the insoles, hand wash those
                            separately, and let everything air dry. Fresh again.
                        </p>
                    </MobileSection>
                </div>

                {/* Desktop */}
                <div className="hidden lg:block">
                    <div className="rounded-3xl bg-white px-7 shadow-sm">
                        <Header title="Why we made this" open />

                        <div className="relative flex items-center justify-center gap-8 pb-4">
                            <div className="w-1/3 max-w-[400px]">
                                <p className="text-lg leading-7 text-black">
                                    Minimal and modern, our signature classic court shoe delivers
                                    the right balance of style and urban comfort. Lightweight,
                                    breathable, and made to move, this is your new go-to for life on
                                    the go.
                                </p>

                                <BestFor />

                                <TechnicalDetails />
                            </div>

                            <div className="relative aspect-square w-1/3 max-w-[600px] grow">
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute inset-0 m-auto aspect-square w-[87%]">
                                        <div className="absolute inset-0 rounded-full border border-[#ece9e2] opacity-70" />
                                        <div className="absolute inset-4 rounded-full border border-[#ece9e2] opacity-70" />
                                        <div className="absolute inset-8 rounded-full bg-[#f3f1ec]" />
                                    </div>

                                    {/* <img
                  src="https://www.allbirds.com/cdn/shop/files/A11559_25Q3_Cruiser_Dark_Navy_Blizzard_PDP_PAIR_3Q-2000x2000_d12d9e49-f5a3-4269-a922-a6aa4be23434.png?v=1751900466&width=1024"
                  alt="Cruiser shoe"
                  className="absolute inset-8 h-[calc(100%-64px)] w-[calc(100%-64px)] object-contain"
                /> */}

                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="absolute inset-8 h-[calc(100%-64px)] w-[calc(100%-64px)] object-contain"
                                    />
                                </div>
                            </div>

                            <div className="w-1/3 max-w-[400px]">
                                <ThoughtfullyDesigned />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2.5 rounded-3xl bg-white px-7 shadow-sm">
                        <Header title="Materials & Sustainability" />

                        <div className="flex gap-x-6 pb-8 lg:gap-x-12">
                            <MaterialsList desktop />
                        </div>
                    </div>

                    <div className="mt-2.5 rounded-3xl bg-white px-7 shadow-sm">
                        <Header title="Care instructions" />

                        <div className="pb-8">
                            <p className="mt-3 text-sm leading-5 text-black">
                                Yes, they’re machine washable. Remove the insoles, hand wash those
                                separately, and let everything air dry. Fresh again.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-2.5 my-10">
                <div className="grid gap-5 md:grid-cols-2">
                    <StylePanelCard
                        image="https://www.allbirds.com/cdn/shop/files/25Q2_TreeCollection_Site_Cruiser-Men_PDPStyling-01_Lifestyle_Desktop_2x3_ef410e0c-8187-4c70-a0d5-f09a37bf2294.jpg?v=1752085833&width=1024"
                        title="TRAVEL ESSENTIALS"
                        description="When you packed a bunch of outfits and need one versatile pair of shoes to go with them: bring these."
                    />

                    <StylePanelCard
                        image="https://www.allbirds.com/cdn/shop/files/25Q2_TreeCollection_Site_Cruiser-Men_PDPStyling-02_Lifestyle_Desktop_2x3_e77772e8-d0a3-4bd9-a8cc-8df66704bda8.jpg?v=1752085833&width=1024"
                        title="OFFICE READY"
                        description="Sleek trainers for workday looks, taking you effortlessly from rush hour to happy hour."
                    />
                </div>
            </section>

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
                        {/* SVG */}
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

                        {/* Dynamic Shoe */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="absolute inset-0 m-auto w-[70%] object-contain"
                        />

                        {/* Left Top */}
                        <Callout
                            className="left-[-220px] top-[28%] text-right"
                            title="BREATHE EASY"
                            text="Made from TENCEL™ Lyocell (tree fiber) to stay breathable, moisture-wicking, and cool."
                        />

                        {/* Left Bottom */}
                        <Callout
                            className="left-[-220px] top-[68%] text-right"
                            title="MADE TO MOVE"
                            text="Lightweight construction flexes easily with every step."
                        />

                        {/* Right Top */}
                        <Callout
                            className="right-[-220px] top-[28%] text-left"
                            title="PLUSH FEATHERBED™"
                            text="Dual-density memory foam insole adds extra softness and comfort that doesn’t quit."
                        />

                        {/* Right Bottom */}
                        <Callout
                            className="right-[-220px] top-[68%] text-left"
                            title="BUILT TO BOUNCE BACK"
                            text="SweetFoam® cushioning made from sugarcane delivers comfort and energy return."
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

function Header({ title, open = false }: { title: string; open?: boolean }) {
    return (
        <button
            className="flex w-full items-center justify-between py-6"
            type="button"
        >
            <span className="font-mono text-base uppercase tracking-widest">
                {title}
            </span>

            <PlusIcon open={open} />
        </button>
    );
}

function MobileSection({
    title,
    children,
    open = false,
}: {
    title: string;
    children: React.ReactNode;
    open?: boolean;
}) {
    return (
        <div className="border-t border-[#ece9e2] first:border-t-0">
            <button
                className="flex w-full items-center justify-between px-4 py-4"
                type="button"
            >
                <span className="font-mono text-sm uppercase tracking-widest text-black">
                    {title}
                </span>

                <PlusIcon open={open} />
            </button>

            {open && <div className="px-4 pb-8">{children}</div>}
        </div>
    );
}

function PlusIcon({ open = false }: { open?: boolean }) {
    return (
        <span className="relative size-4 cursor-pointer">
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
            <span
                className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-transform duration-300 ${open ? "rotate-0" : "rotate-90"
                    }`}
            />
        </span>
    );
}

function ThoughtfullyDesigned() {
    return (
        <div className="mt-8 lg:mt-0">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#555]">
                Thoughtfully designed
            </h3>

            <ul className="mt-4 list-disc pl-5">
                <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
                    <strong>Breathable TENCEL™ Lyocell (tree fiber)</strong> blend upper
                    for a light, cool feel
                </li>

                <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
                    <strong>Merino wool-blend lining</strong> for softness, socks optional
                </li>

                <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
                    Plush <strong>Featherbed™ memory foam</strong> insole for extra
                    comfort and bounce
                </li>

                <li className="mb-3 text-sm leading-[21px] text-black lg:text-base lg:leading-6">
                    Sugarcane-based <strong>SweetFoam® cushioning</strong> with responsive
                    energy return
                </li>
            </ul>
        </div>
    );
}

function BestFor() {
    const tags = ["Everyday", "Walks", "Vacation", "Happy Hour"];

    return (
        <div className="mt-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[#555]">
                Best for
            </h3>

            <div className="mb-8 mt-4 flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="select-none rounded-full bg-[#f3f1ec] px-2 py-1 text-sm text-black"
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
            <button className="flex items-center gap-2 text-[#555]" type="button">
                <ArrowIcon />

                <span className="cursor-pointer text-sm underline">
                    View technical details
                </span>
            </button>

            <ul className="mt-4 list-disc pl-10">
                <li className="mb-3 text-sm leading-6 text-black lg:text-base">
                    <strong>Weight:</strong> 8.7oz (M9), 6.7oz (W7)
                </li>

                <li className="mb-3 text-sm leading-6 text-black lg:text-base">
                    <strong>Stack Height:</strong> Heel: 14mm Toe: 8mm
                </li>

                <li className="mb-3 text-sm leading-6 text-black lg:text-base">
                    <strong>Heel/Toe Drop:</strong> 6mm
                </li>

                <li className="mb-3 text-sm leading-6 text-black lg:text-base">
                    <strong>Country of Origin:</strong> Vietnam
                </li>
            </ul>
        </div>
    );
}

function ArrowIcon() {
    return (
        <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1464 7.52512C10.3417 7.32986 10.6583 7.32986 10.8536 7.52512L15.0962 11.7678C15.2915 11.963 15.2915 12.2796 15.0962 12.4749L10.8536 16.7175C10.6583 16.9128 10.3417 16.9128 10.1464 16.7175C9.95118 16.5222 9.95118 16.2057 10.1464 16.0104L14.0355 12.1213L10.1464 8.23223C9.95118 8.03697 9.95118 7.72039 10.1464 7.52512Z"
                fill="currentColor"
            />
        </svg>
    );
}

function MaterialsList({ desktop = false }: { desktop?: boolean }) {
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
            label: "Lining",
            name: "Wool",
            image:
                "https://www.allbirds.com/cdn/shop/files/PDP_Materials_Wool_600x600_6745c3bd-d0e0-4768-ae9d-4e619e1a81f6.jpg?v=1772058481&width=1024",
            text: "Merino wool blend lining for uncompromising comfort and softness",
        },
    ];

    return (
        <>
            {materials.map((item) => (
                <div
                    key={item.name}
                    className={
                        desktop
                            ? "flex flex-1 items-start gap-4"
                            : "mb-6 flex items-center gap-5 pr-2 last:mb-0"
                    }
                >
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

function StylePanelCard({
    image,
    title,
    description,
}: {
    image: string;
    title: string;
    description: string;
}) {
    return (
        <div>
            <div className="relative mx-auto w-fit overflow-hidden rounded-3xl">
                <img
                    src={image}
                    alt={title}
                    className="aspect-[4/5] w-full rounded-3xl object-cover"
                />
            </div>

            <h3 className="mt-6 px-[5%] text-center font-mono text-sm uppercase leading-5 tracking-[1.2px] text-black md:mt-8 md:text-base">
                {title}
            </h3>

            <p className="mt-2 px-[10%] text-center text-sm leading-5 tracking-wide text-[#555] lg:px-[15%]">
                {description}
            </p>
        </div>
    );
}

function Callout({
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
            <h3 className="font-mono text-xs tracking-widest">
                {title}
            </h3>

            <p className="text-sm leading-5">
                {text}
            </p>
        </div>
    );
}