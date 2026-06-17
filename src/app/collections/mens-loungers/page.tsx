import ProductToolbar from "@/components/mens-new-arrivals/ProductToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import MensFAQ from "@/components/mens-new-arrivals/MensFAQ";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionHero from "@/components/common/CollectionHero";
import { mensBestsellers } from "@/app/data/mensBestsellers";

export default function MensLoungersPage() {
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionHero
                    image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_SlipOns_Men_3cd7ee54-499e-4df6-84bf-817788f5a904.jpg?v=1773874480&width=2048"
                    title="Men's Slip Ons"
                    description="Easy to wear, easy to style, and comfortable enough for pretty much anywhere the day takes you."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Mens", href: "/collections/mens" },
                        { label: "Men's Slip Ons", href: "/collections/mens-loungers" },
                    ]}
                />
                <ProductToolbar />
                <ProductGrid products={mensBestsellers} />
                <MensFAQ />
                <ValuePillars />
            </section>
        </main>
    );
}




