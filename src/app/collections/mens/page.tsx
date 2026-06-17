import ProductToolbar from "@/components/mens/ProductToolbar";
import CollectionHero from "@/components/common/CollectionHero";
import ProductGrid from "@/components/product/ProductGrid";
import { mens } from "@/app/data/mens";
import MensFAQ from "@/components/mens-new-arrivals/MensFAQ";
import ValuePillars from "@/components/home/ValuePillars";

export default function MensPage() {
  return (
    <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
      <section className="mx-auto max-w-[1880px]">
        <CollectionHero
          image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Shoes_Men_77be71ad-9ef5-4b32-a289-9644a65eda10.jpg?v=1773874480&width=2048"
          title="Men's Shoes"
          description="Sustainable, supportive, and wildly comfortable, our sneakers are always ready when you are."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Men's Shoes", href: "/collections/mens" },
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