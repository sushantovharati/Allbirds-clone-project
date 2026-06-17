import Hero from "@/components/mens-bestsellers/Hero";
import ProductToolbar from "@/components/mens-bestsellers/ProductToolbar";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import { womensBestsellers } from "@/app/data/womensBestsellers";
import CollectionHero from "@/components/common/CollectionHero";

export default function WomensBestsellersPage() {
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionHero
                    image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Bestsellers_Women_v2.jpg?v=1774031085&width=2048"
                    title=" Women's Bestsellers"
                    description="Iconic comfort, exceptional style. Shop our most popular women’s shoes."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Womens", href: "/collections/womens" },
                        { label: " Women's Bestsellers", href: "/collections/womens-bestsellers" },
                    ]}
                />
                <ProductToolbar />
                <ProductGrid products={womensBestsellers} />
                <ValuePillars />
            </section>
        </main>
    );
}
