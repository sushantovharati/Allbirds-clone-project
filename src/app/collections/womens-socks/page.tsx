import ProductToolbar from "@/components/mens-new-arrivals/ProductToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import WomensSocksHero from "@/components/womens-socks/WomensSocksHero";
import { womensNewArrivals } from "@/app/data/womensNewArrivals";
;

export default function WomensSocksPage() {
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <WomensSocksHero />
                <ProductToolbar />
                <ProductGrid products={womensNewArrivals} />
                <ValuePillars />
            </section>
        </main>
    );
}




