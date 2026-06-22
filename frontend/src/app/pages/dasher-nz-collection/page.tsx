import DasherHero from "@/components/dasher-nz-collection/DasherHero";
import LargeProductCarousel from "@/components/dasher-nz-collection/LargeProductCarousel";
import PictureGrid from "@/components/dasher-nz-collection/PictureGrid";
import ProductDetails from "@/components/dasher-nz-collection/ProductDetails";
import ValuePillars from "@/components/home/ValuePillars";

export default function HelpPage() {
    return (
        <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
            <section className="mx-auto max-w-[1880px]">
                <DasherHero />
                <LargeProductCarousel />
                <ProductDetails />
                <PictureGrid />
                <ValuePillars />
            </section>
        </main>
    );
}