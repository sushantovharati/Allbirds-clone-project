import ProductToolbar from "@/components/new-arrivals/ProductToolbar";
import ProductGrid from "@/components/shop-all/ProductGrid";
import CollectionCards from "@/components/new-arrivals/CollectionCards";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionToolbar from "@/components/common/CollectionToolbar";
import { newArrivals } from "@/app/data/newArrivals";

export default function NewArrivalsPage() {
  return (
    <main className="bg-[#ece9e2] px-6 pb-10 pt-32">
      <div className="mx-auto max-w-[1800px]">
        {/* <ProductToolbar /> */}
        {/* <CollectionToolbar
          count={4}
          colors={["Grey", "Blue"]}
          productTypes={["Everyday Sneakers", "Slip Ons"]}
        /> */}
        {/* <ProductGrid /> */}
        {/* <CollectionToolbar count={filteredProducts.length} gender="n/a" /> */}
        <ProductGrid products={newArrivals} />
        <CollectionCards />
        <ValuePillars />
      </div>
    </main>
  );
}