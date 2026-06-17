import ProductToolbar from "@/components/mens-new-arrivals/ProductToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import { mensNewArrivals } from "@/app/data/mensNewArrivals"; import MensSocksHero from "@/components/mens-socks/MensSocksHero";
;

export default function MensSocksPage() {
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <MensSocksHero />
                <ProductToolbar />
                <ProductGrid products={mensNewArrivals} />
                <ValuePillars />
            </section>
        </main>
    );
}




