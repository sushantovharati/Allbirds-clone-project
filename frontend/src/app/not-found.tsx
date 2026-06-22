import FeatureBanners from "@/components/common/FeatureBanners";
import ValuePillars from "@/components/home/ValuePillars";
import Link from "next/link";

const banners = [
    {
        image: "https://www.allbirds.com/cdn/shop/files/d8f26e61eaed819193fdaba565de7d87e63dbfca_1.jpg?v=1751418221&width=1024",
        buttons: [
            { label: "SHOP WOMEN", href: "/collections/womens" },
        ],
    },
    {
        image:
            "https://www.allbirds.com/cdn/shop/files/094575bd91307bd55dce75b5fe67ae8dc21b3ef0.jpg?v=1751418221&width=1024",
        buttons: [
            { label: "SHOP MEN", href: "/collections/mens" },
        ],
    },
    {
        image: "https://www.allbirds.com/cdn/shop/files/24Q4_A11067_A11070_TreeGlider_NaturalWhite_OnBody_11213.png?v=1751418221&width=1024",
        buttons: [
            { label: "SHOP SOCKS", href: "/collections/socks" },
        ],
    },
];

export default function NotFound() {
    return (
        <>
            <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
                <section className="mx-auto max-w-[1880px]">
                    <div className="mt-[80px] mb-0 mx-auto flex min-h-[10vh] max-w-4xl flex-col items-center justify-center gap-4 px-2 text-center">
                        <h1 className="text-3xl md:text-4xl">
                            Uh-Oh, Nothing To See Here!
                        </h1>

                        <p className="max-w-md text-[14px] leading-8 text-[#555]">
                            The page you requested doesn’t exist. Let’s try a different direction.
                        </p>
                    </div>
                    <FeatureBanners banners={banners} />
                    <ValuePillars />
                </section>
            </main>
        </>
    );
}