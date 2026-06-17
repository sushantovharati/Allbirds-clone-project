import ProductToolbar from "@/components/mens-sneakers/ProductToolbar";
import ProductGrid from "@/components/product/ProductGrid";
import MensFAQ from "@/components/mens-new-arrivals/MensFAQ";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionHero from "@/components/common/CollectionHero";
import { womens } from "@/app/data/womens";
import WomensFAQ from "@/components/womens-new-arrivals/WomensFAQ";

export default function WomensSneakersPage() {
  return (
    <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
      <section className="mx-auto max-w-[1880px]">
        <CollectionHero
          image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Sneakers_Women_v2.jpg?v=1774031085&width=2048"
          title="Women's Sneakers"
          description="Lightweight, supportive, and wildly comfortable, our premium women’s sneakers make any outing feel effortless."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Womens", href: "/collections/womens" },
            { label: "Women's Sneakers", href: "/collections/womens-sneakers" },
          ]}
        />
        <ProductToolbar />
        <ProductGrid products={womens} />
        <WomensFAQ />
        <ValuePillars />
      </section>
    </main>
  );
}