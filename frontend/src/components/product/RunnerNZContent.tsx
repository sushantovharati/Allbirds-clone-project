import Link from "next/link";
import RelatedProductsContent from "./details-page-content/RelatedProductsContent";

type productprop={
    gender?:string;
}
export default function RunnerNZContent({gender}:productprop) {
    return (
        <>
            <section className="m-2.5 my-10 min-h-[166px] rounded-xl bg-white p-5 md:rounded-3xl md:p-6">
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <img
                            src="https://www.allbirds.com/cdn/shop/files/26Q1_FebruaryBAU_PDP_NZSlipOn_ProductDetails-SingleCard_Desktop-Mobile_2x3_96d8dd82-c425-42d8-8f19-6bb936888b86.jpg?v=1769557816&width=1024"
                            alt="Runner NZ Slip On product details"
                            className="aspect-[3/2] h-full w-full rounded-xl object-cover md:rounded-3xl"
                        />
                    </div>

                    <div className="flex flex-col justify-around gap-[30px] py-2.5">
                        <ContentBlock title="THE DETAILS">
                            No laces. No slowdown. Runner NZ Slip On delivers the lightweight
                            comfort you know from our Runner collection—now in a clean slip-on
                            with a breezy feel, a sleek profile, and subtle texture that adds
                            movement and dimension. Easy to wear. Easy to notice.
                        </ContentBlock>

                        <ContentBlock title="MATERIALLY BETTER">
                            A blend of TENCEL™ Lyocell &#40;tree fiber&#41; and recycled
                            polyester keeps things breathable and fresh. Underfoot, our
                            dual-density Featherbed® insole uses plush memory foam for comfort
                            that lasts all day—no compromises, no break-in. Read more about{" "}
                            <Link
                                href="/pages/our-materials"
                                className="underline underline-offset-2"
                            >
                                our materials
                            </Link>
                            .
                        </ContentBlock>

                        <ContentBlock title="WASH & CARE">
                            Yep, you can toss them in the wash. Remove the insoles and hand wash
                            those separately. Let everything air dry, and you’re back in
                            business.
                        </ContentBlock>
                    </div>
                </div>
            </section>

            <section className="relative mx-2.5 my-10 h-[calc(175vw)] max-h-[98vh] overflow-hidden rounded-xl md:h-[calc(100vw*0.5625)] md:max-h-[90vh] md:rounded-3xl">
                {/* Background */}
                <img
                    src="https://www.allbirds.com/cdn/shop/files/26Q1_FebruaryBAU_MaterialsHero-Background_AssetName_Desktop-Mobile_16x9_86799edd-0dc0-419c-8bfa-bb2d8145d7e6.jpg?v=1769557205&width=1024"
                    alt=""
                    className="h-full w-full rounded-xl object-cover md:rounded-3xl"
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full md:w-[50%] md:max-w-[65vh]">
                        {/* SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 200 200"
                            className="w-full"
                        >
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                fill="#212121"
                                fillOpacity=".1"
                            />

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

                        {/* Shoe */}
                        <img
                            src="https://www.allbirds.com/cdn/shop/files/A12373_26Q1_Runner-NZ-Slip-On-Warm-White-Warm-White_PDP_LEFT_470bc752-c897-4ca0-b4f5-1958e35bf21c.png?v=1768951523&width=1024"
                            alt=""
                            className="absolute inset-0 m-auto w-[70%]"
                        />

                        {/* Left Top */}
                        <div className="absolute left-[-220px] top-[28%] hidden w-52 text-right text-white md:flex md:flex-col">
                            <h3 className="font-mono text-xs tracking-[2px]">
                                BREATHE EASY
                            </h3>
                            <p className="mt-1 text-sm leading-5">
                                Made from TENCEL™ Lyocell (tree fiber) and recycled polyester to stay
                                breathable, moisture-wicking, and cool.
                            </p>
                        </div>

                        {/* Left Bottom */}
                        <div className="absolute left-[-220px] top-[68%] hidden w-52 text-right text-white md:flex md:flex-col">
                            <h3 className="font-mono text-xs tracking-[2px]">
                                PLUSH FEATHERBED™
                            </h3>
                            <p className="mt-1 text-sm leading-5">
                                Dual-density memory foam insole adds extra softness and comfort that
                                doesn’t quit.
                            </p>
                        </div>

                        {/* Right Top */}
                        <div className="absolute right-[-220px] top-[28%] hidden w-52 text-left text-white md:flex md:flex-col">
                            <h3 className="font-mono text-xs tracking-[2px]">
                                MADE TO MOVE
                            </h3>
                            <p className="mt-1 text-sm leading-5">
                                Flexible, functional construction designed to move naturally with you.
                            </p>
                        </div>

                        {/* Right Bottom */}
                        <div className="absolute right-[-220px] top-[68%] hidden w-52 text-left text-white md:flex md:flex-col">
                            <h3 className="font-mono text-xs tracking-[2px]">
                                BUILT TO BOUNCE BACK
                            </h3>
                            <p className="mt-1 text-sm leading-5">
                                SweetFoam® cushioning made from sugarcane delivers comfort and energy
                                return.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProductsContent 
            gender={gender}
            productCount={6}/>
        </>
    );
}

function ContentBlock({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h3 className="text-xs font-semibold uppercase leading-4 md:text-sm">
                {title}
            </h3>

            <div className="mt-3.5 text-xs leading-5 tracking-wide text-[#243b53] md:text-sm md:leading-6">
                <p>{children}</p>
            </div>
        </div>
    );
}