import Hero from "@/components/mens-sneakers/Hero";
import ProductToolbar from "@/components/mens-sneakers/ProductToolbar";
import ProductGrid from "@/components/product/ProductGrid";
import MensFAQ from "@/components/mens-new-arrivals/MensFAQ";
import ValuePillars from "@/components/home/ValuePillars";
import { mens } from "@/app/data/mens";
import CollectionHero from "@/components/common/CollectionHero";

export default function MensSneakersPage() {
  return (
    <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
      <section className="mx-auto max-w-[1880px]">
        <CollectionHero
          image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Sneakers_Men_6c9a8f19-a87a-4820-8fb6-77a1683bd50b.jpg?v=1773874479&width=2048"
          title="Men's Sneakers"
          description="Lightweight, supportive, and wildly comfortable, our premium men’s sneakers make any outing feel effortless."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Mens", href: "/collections/mens" },
            { label: "Men's Sneakers", href: "/collections/mens-sneakers" },
          ]}
        />
        <ProductToolbar />
        <ProductGrid products={mens} />
        <MensFAQ />
        <ValuePillars />
      </section>
    </main>
  );
}