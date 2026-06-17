import ProductToolbar from "@/components/mens-new-arrivals/ProductToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionHero from "@/components/common/CollectionHero";
import { womensNewArrivals } from "@/app/data/womensNewArrivals";
import WomensFAQ from "@/components/womens-new-arrivals/WomensFAQ";

export default function WomensNewArrivalsPage() {
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionHero
                    image="https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_NA_Collections-Header_Desktop_16x9_W.jpg?v=1774909863&width=2048"
                    title="New Arrivals"
                    description="Start the season with comfort, style, and versatility."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Womens", href: "/collections/womens" },
                        { label: "New Arrivals", href: "/collections/womens-new-arrivals" },
                    ]}
                />
                <ProductToolbar />
                {/* <ProductGrid products={womensNewArrivals} /> */}
                <ProductGrid products={womensNewArrivals} />
                <WomensFAQ />
                <ValuePillars />
            </section>
        </main>
    );
}




