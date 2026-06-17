import Hero from "@/components/mens-bestsellers/Hero";
import ProductToolbar from "@/components/mens-bestsellers/ProductToolbar";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import { mensBestsellers } from "@/app/data/mensBestsellers";

export default function MensBestsellersPage() {
  return (
    <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
      <section className="mx-auto max-w-[1880px]">
        <Hero />
        <ProductToolbar />
        <ProductGrid products={mensBestsellers} />
        <ValuePillars />
      </section>
    </main>
  );
}