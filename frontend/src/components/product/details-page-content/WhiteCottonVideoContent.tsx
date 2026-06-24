"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type MaterialFeature = {
    title: string;
    description: string;
    position: string;
};

type ProductMaterialHeroProps = {
    desktopVideo: string;
    mobileVideo: string;
    productImage: string;
    productAlt?: string;
    features: MaterialFeature[];
};

export default function WhiteCottonVideoContent({

    desktopVideo,
    mobileVideo,
    productImage,
    productAlt = "Product image",
    features,
}: ProductMaterialHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [520, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative mx-2.5 my-10 h-[175vw] max-h-[98vh] overflow-hidden rounded-xl md:h-[56.25vw] md:max-h-[90vh] md:rounded-3xl">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="hidden h-full w-full object-cover md:block"
            >
                <source src={desktopVideo} type="video/mp4" />
            </video>

            <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover md:hidden"
            >
                <source src={mobileVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 m-auto flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 200 200"
                    className="w-full max-w-[650px]"
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

                <motion.img
                    src={productImage}
                    alt={productAlt}
                    style={{ y }}
                    className="absolute inset-0 m-auto w-[62%] max-w-[520px] object-contain"
                />

                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute hidden w-[230px] select-none flex-col gap-2 text-white md:flex ${item.position}`}
                    >
                        <h3 className="font-mono text-xs tracking-[0.25em]">
                            {item.title}
                        </h3>

                        <p className="text-sm leading-5">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-10 left-5 right-5 md:hidden">
                {features.slice(0, 1).map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 text-left text-white">
                        <h3 className="font-mono text-xs tracking-[0.25em]">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-5">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}