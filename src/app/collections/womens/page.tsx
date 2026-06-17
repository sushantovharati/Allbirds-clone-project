import ProductToolbar from "@/components/mens/ProductToolbar";
import CollectionHero from "@/components/common/CollectionHero";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import WomensFAQ from "@/components/womens-new-arrivals/WomensFAQ";
import { womens } from "@/app/data/womens";

export default function WomensPage() {
  return (
    <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
      <section className="mx-auto max-w-[1880px]">
        <CollectionHero
          image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Shoes_Women_f555dc23-2387-4f32-8b84-46c9e9ba63b3.jpg?v=1773874479&width=2048"
          title="Women's Shoes"
          description="Lightweight, supportive, and wildly comfortable, our premium women’s shoes make any outing feel effortless."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Women's Shoes", href: "/collections/womens" },
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