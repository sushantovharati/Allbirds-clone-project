import ValuePillars from "@/components/home/ValuePillars";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Link from "next/link";

const splitSections = [
    {
        title: "Better Things",
        desc: "We make better things in a better way using premium natural materials like wool, tree fiber, and sugarcane.",
        link: "/pages/materials",
        linkText: "Learn More About Our Materials",
        image:
            "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_OurStoryLandingPage_SplitPage-Materials_Studio_Desktop_2x3_206ed6fe-da6b-431d-b634-2c719619ee82.png?v=1751420477&width=1920",
    },
    {
        title: "Better Ways",
        desc: "As a certified B Corp, we use a data-driven approach to invest in progress, sustainability, and positive impact.",
        link: "/pages/sustainability",
        linkText: "Learn More About Sustainability",
        image:
            "https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_OurStoryLandingPage_SplitPage-Sustainability_Studio_Desktop_2x3_34664fd2-0e8c-4737-858a-47fe96128c88.png?v=1751420476&width=1920",
    },
];

export default function OurStoryPage() {
    return (
        <main className="bg-[#f7f5f0] text-[#212121]">

            <AnnouncementBar />

            <section className="relative mx-2.5 mt-[40px] h-[80vh] overflow-hidden rounded-xl md:rounded-3x">
                <img
                    src="https://www.allbirds.com/cdn/shop/files/25Q2_BAU_Site_OurStoryLandingPage_Hero-ALT_Texture_Desktop_16x9_75551591-7a5e-4b25-8aa4-997acd32edf6.png?v=1751420477&width=2560"
                    alt="Allbirds community"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-x-0 top-[250px] mx-auto max-w-3xl px-5 text-center text-white">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
                        OUR STORY
                    </p>
                    <p className="mx-auto mt-5 max-w-xl text-[24px] leading-6">
                        Striving for better is in our nature
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
                <h2 className="font-serif text-4xl md:text-6xl">Comfort, Naturally</h2>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 md:text-base">
                    We believe every choice can be a step toward a world we feel better
                    about living in.
                </p>
            </section>

            <section className="space-y-2.5 px-2.5 pb-10">
                {splitSections.map((item, index) => (
                    <div
                        key={item.title}
                        className="grid overflow-hidden rounded-xl bg-white md:grid-cols-2 md:rounded-3xl"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`h-[420px] w-full object-cover md:h-[620px] ${index % 2 === 1 ? "md:order-2" : ""
                                }`}
                        />

                        <div className="flex flex-col items-center justify-center px-8 py-12 text-center md:px-14">
                            <h2 className="font-serif text-3xl md:text-5xl">{item.title}</h2>
                            <p className="mt-6 max-w-md text-sm leading-7">{item.desc}</p>
                            <Link
                                href={item.link}
                                className="mt-8 text-sm font-medium uppercase underline underline-offset-4"
                            >
                                {item.linkText}
                            </Link>
                        </div>
                    </div>
                ))}
            </section>

            <ValuePillars />
        </main>
    );
}