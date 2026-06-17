import ProductToolbar from "@/components/mens-new-arrivals/ProductToolbar";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import CollectionHero from "@/components/common/CollectionHero";
import { womensBestsellers } from "@/app/data/womensBestsellers";
import WomensFAQ from "@/components/womens-new-arrivals/WomensFAQ";

export default function WomensLoungersPage() {
    return (
        <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
            <section className="mx-auto max-w-[1880px]">
                <CollectionHero
                    image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_SlipOns_Women_1b301277-1e4c-4c8d-84c0-7a91da1de1cc.jpg?v=1773874481&width=2048"
                    title="Women's Slip Ons"
                    description="No laces, no problem. Our sleek, breezy slip-ons are easy to wear, and even easier to notice."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Womens", href: "/collections/womens" },
                        { label: "Women's Slip Ons", href: "/collections/womens-loungers" },
                    ]}
                />
                <ProductToolbar />
                <ProductGrid products={womensBestsellers} />
                <WomensFAQ />
                <ValuePillars />
            </section>
        </main>
    );
}




