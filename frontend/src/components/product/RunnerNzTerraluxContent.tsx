"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const styleItems = [
    {
        title: "LOOK GOOD",
        description:
            "All the polish of leather—none of the stiffness that usually comes with it.",
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_Terralux_PDP_Mens_RunnerNZ_HowToStyle_DesktopMobile_2x3_01_2420d4f4-487b-4736-abf5-ba77a23da86b.jpg?v=1769629271&width=1024",
    },
    {
        title: "FEEL GOOD",
        description: "Sneaker-level comfort built into every step.",
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_Terralux_PDP_Mens_RunnerNZ_HowToStyle_DesktopMobile_2x3_02_78e5cbf4-6ccb-41a8-a8bb-4079cb3bc721.jpg?v=1769629270&width=1024",
    },
    {
        title: "DO GOOD",
        description:
            "Looks and feels like leather. Made from plants and recycled tires—so choosing it is a little easier on the planet. A smarter choice all around.",
        image:
            "https://www.allbirds.com/cdn/shop/files/26Q1_Terralux_PDP_Mens_RunnerNZ_HowToStyle_DesktopMobile_2x3_03_d642f9fe-3327-4f4b-bed5-dae296971b3c.jpg?v=1769629271&width=1024",
    },
];

const materialFeatures = [
    {
        title: "UPCYCLED MATERIAL",
        description:
            "INNOVERA™ is made from post-consumer waste, plant-based proteins, and bio-polymers.",
        position: "top-[28%] -left-[260px] text-right",
    },
    {
        title: "RESPONSIBLY SOURCED",
        description:
            "Our wool lining meets high standards of animal welfare, environmental care, and social sustainability.",
        position: "top-[68%] -left-[260px] text-right",
    },
    {
        title: "PLUSH FEATHERBED™",
        description:
            "Dual-density memory foam insole adds extra softness and comfort that doesn’t quit.",
        position: "top-[28%] -right-[260px] text-left",
    },
    {
        title: "BUILT TO BOUNCE BACK",
        description:
            "SweetFoam® cushioning made from sugarcane delivers comfort and energy return.",
        position: "top-[68%] -right-[260px] text-left",
    },
];

export default function RunnerNzTerraluxContent() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [products, setProducts] = useState<any[]>([]);
    useEffect(() => {
        fetch("http://localhost:5000/products?badge=NEW")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 6)));
    }, []);
    return (
        <>
            <section className="m-2.5 my-10 min-h-[166px] select-none rounded-xl bg-white p-5 md:rounded-3xl md:p-6">
                <div className="max-md:-ml-5 max-md:w-[calc(100vw-20px)] max-md:pl-5 md:w-full">
                    <ul className="flex justify-around gap-5 max-md:flex-col md:gap-3">
                        <li className="h-fit md:w-1/3">
                            <h3 className="self-start pr-8 text-xs/4 font-medium md:text-sm/4">
                                THE DETAILS
                            </h3>

                            <div className="mt-3.5 self-start text-xs/5 tracking-wide text-[#2d2d2d] md:text-sm/5.5">
                                <p>
                                    This elevated take on our bestselling sneaker features our new
                                    Terralux™ upper, a bio-fabricated leather alternative that looks
                                    and feels just like the real thing. Built to move, but ready for
                                    work, this is the Runner NZ you’ve been waiting for.
                                </p>
                            </div>
                        </li>

                        <li className="h-fit md:w-1/3">
                            <h3 className="self-start pr-8 text-xs/4 font-medium md:text-sm/4">
                                MATERIALLY BETTER
                            </h3>

                            <div className="mt-3.5 self-start text-xs/5 tracking-wide text-[#2d2d2d] md:text-sm/5.5">
                                <p>
                                    We partnered with Modern Meadow—a pioneer in synthetic biology
                                    and material science—to bring INNOVERA™ to footwear for the
                                    first time. It’s crafted from plant-based proteins, biopolymers,
                                    and post-consumer waste for the look and feel of leather with a
                                    lighter footprint.
                                </p>
                            </div>
                        </li>

                        <li className="h-fit md:w-1/3">
                            <h3 className="self-start pr-8 text-xs/4 font-medium md:text-sm/4">
                                WASH &amp; CARE
                            </h3>

                            <div className="mt-3.5 self-start text-xs/5 tracking-wide text-[#2d2d2d] md:text-sm/5.5">
                                <p>
                                    We recommend spot cleaning with warm water and a gentle soap
                                    whenever your shoes need a brush up.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="px-2.5">
                <div className="mx-auto my-5 md:my-10 md:max-w-4xl">
                    <h2 className="text-center font-serif text-[40px] text-[#4a4a4a] md:text-[40px]">
                        You Won&apos;t Believe It&apos;s Not Leather.
                    </h2>
                </div>
            </section>

            <section className="mx-2.5 my-10">
                <div className="flex gap-2.5 max-md:flex-col">
                    <div className="relative aspect-[10/7] w-full overflow-hidden rounded-xl md:min-w-[55vw] md:max-w-[55vw]">
                        <Image
                            src="https://www.allbirds.com/cdn/shop/files/26Q1-Terralux_Pdp_RunnerNZ_Split-Text_Desktop-Mobile_2x3_2879c18c-96ef-418d-a6f5-7c77dfc63ec3.jpg?v=1769734437&width=1920"
                            alt="Runner NZ Terralux"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex grow flex-col items-center justify-center gap-6 rounded-xl bg-white px-5 py-6 text-center text-[#212121] md:px-10 md:py-0 lg:gap-8">
                        <h2 className="mb-4 text-2xl leading-8">
                            Soft, strong, and <br />
                            seriously comfortable.
                        </h2>

                        <p className="px-4 text-sm">
                            The INNOVERA™ upper looks and feels supple like leather—but it’s
                            lighter, stronger, and made from plant protein and post-consumer
                            waste, with over 80% renewable carbon content. So you can dress up
                            in sneaker-level comfort. Made from plants, not compromises.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto my-5 md:my-10 md:max-w-4xl">
                <h2 className="text-center font-serif text-sm text-[#4a4a4a] md:text-[40px]">
                    Look Buttoned-Up. Feel Out-of-Office.
                </h2>
            </section>

            <section className="my-10 md:mx-2.5">
                <div className="grid gap-8 md:grid-cols-3 md:gap-2.5">
                    {styleItems.map((item) => (
                        <div key={item.title}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="aspect-[2/3] w-full rounded-3xl object-cover"
                            />

                            <h3 className="mt-6 text-center font-mono text-sm uppercase tracking-[1.2px] text-black md:mt-8 md:text-base">
                                {item.title}
                            </h3>

                            <p className="mt-2 px-[10%] text-center text-sm tracking-wide text-[#555] lg:px-[15%]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto my-5 md:my-10 md:max-w-4xl">
                <h2 className="text-center font-serif text-2xl font-normal text-[#4a4a4a] md:text-[40px]">
                    Better Materials, Done Right.
                </h2>
            </section>

            <section className="relative mx-2.5 my-10 h-[175vw] max-h-[98vh] overflow-hidden rounded-xl md:h-[56.25vw] md:max-h-[90vh] md:rounded-3xl">
                <img
                    src="https://www.allbirds.com/cdn/shop/files/26Q1_terralux_PDP_MaterialsHero-Background_TerraluxAnthracite_Desktop-Mobile_16x9_314ce1b4-c8be-4861-9627-d31d96fca493.jpg?v=1769629506&width=1024"
                    alt="Terralux material background"
                    className="h-full w-full rounded-xl object-cover md:rounded-3xl"
                />

                <div className="absolute top-[10%] w-full md:inset-0 md:m-auto md:h-fit md:w-[50%] md:max-w-[65vh]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="70" fill="#212121" fillOpacity=".1" />
                        <circle cx="100" cy="100" r="80" stroke="#fff" strokeWidth=".6" strokeOpacity=".7" />
                        <circle cx="100" cy="100" r="90" stroke="#fff" strokeWidth=".6" strokeOpacity=".4" />
                        <circle className="hidden md:block" cx="181" cy="138" r="1.5" fill="#fff" />
                        <circle className="hidden md:block" cx="180" cy="59" r="1.5" fill="#fff" />
                        <circle className="hidden md:block" cx="20" cy="59" r="1.5" fill="#fff" />
                        <circle className="hidden md:block" cx="20" cy="141" r="1.5" fill="#fff" />
                    </svg>

                    <img
                        src="https://www.allbirds.com/cdn/shop/files/A12422_26Q1_Runner-NZ-Terralux-Anthracite-Dark-Anthr_PDP_LEFT.png?v=1768955022&width=1024"
                        alt="Runner NZ Terralux shoe"
                        className="absolute inset-0 m-auto w-full"
                    />

                    {materialFeatures.map((item) => (
                        <div
                            key={item.title}
                            className={`absolute hidden w-[230px] cursor-default select-none flex-col gap-2 text-white md:flex ${item.position}`}
                        >
                            <h2 className="font-mono text-xs/5 tracking-widest">
                                {item.title}
                            </h2>
                            <p className="text-sm/5">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-10 left-5 right-5 md:hidden">
                    <div className="flex gap-4 overflow-x-auto">
                        {materialFeatures.map((item) => (
                            <div key={item.title} className="min-w-[85%] text-white">
                                <svg className="-ml-4" width="300%" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="10" r="5" fill="#fff" />
                                    <line x1="10" y1="10" x2="100%" y2="10" stroke="#fff" strokeWidth="2" />
                                </svg>

                                <div className="mt-4 flex w-[80%] flex-col gap-1 text-left">
                                    <h2 className="font-mono text-xs/5 tracking-widest">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm/5">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-2.5 mb-2.5 px-2.5 md:mb-2.5 md:px-2.5">
                <div className="relative w-full rounded-2xl bg-[#704f32]">
                    <div className="relative z-10 flex flex-col items-center justify-center px-5 py-6 text-center md:px-10 md:py-8 lg:px-15 lg:py-12">
                        <div className="font-mono text-xs uppercase tracking-widest text-white">
                            <p>THE TERRALUX™ COLLECTION</p>
                        </div>

                        <div className="pb-2 pt-1 select-none font-serif text-2xl leading-tight text-white sm:text-3xl md:pb-4 md:pt-2 lg:text-2xl xl:text-[2.5rem]">
                            <p>No More Business As Usual</p>
                        </div>

                        <div className="text-xs font-normal leading-relaxed tracking-wide text-white md:text-sm md:leading-normal">
                            <p>Made from plants and recycled waste, not compromises.</p>
                        </div>

                        <div className="grid grid-flow-row gap-2 pt-4 md:pt-6">
                            <a
                                href="/pages/terralux-collection"
                                className="h-fit rounded-full border border-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md transition hover:bg-white hover:text-[#704f32]"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-3 py-3">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="border-b border-black text-[14px] font-medium uppercase tracking-[0.25em]">
                        You May Also Like:
                    </h2>
                </div>

                <div
                    ref={sliderRef}
                    className=" flex gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden " >
                    {products.map((product, index) => (
                        <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="group min-w-[360px] flex-1 overflow-hidden rounded-[18px] bg-white"
                        >
                            <div className="relative h-[320px] overflow-hidden">
                                {product.badge && (
                                    <span className="absolute left-6 top-6 z-10 rounded-full bg-[#e7e4dd] px-3 py-2 text-xs font-bold tracking-wider">
                                        {product.badge}
                                    </span>
                                )}

                                <img
                                    src={
                                        product.images[0]?.url?.startsWith("http")
                                            ? product.images[0].url
                                            : `http://localhost:5000${product.images[0]?.url}`
                                    }
                                    alt={product.title}
                                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="px-5 pb-6">
                                <h3 className="text-[18px] font-bold uppercase tracking-wide">
                                    {product.title}
                                </h3>

                                <p className="mt-2 text-[17px]">{product.color.name}</p>

                                <div className="mt-4 flex items-center justify-between">

                                    <p className="text-[18px] font-bold">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}