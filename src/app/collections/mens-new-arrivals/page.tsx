// import ProductToolbar from "@/components/mens-new-arrivals/ProductToolbar";
// import ValuePillars from "@/components/home/ValuePillars";
// import MensFAQ from "@/components/mens-new-arrivals/MensFAQ";
// import ProductGrid from "@/components/product/ProductGrid";
// import { mensNewArrivals } from "@/app/data/mensNewArrivals";
// import CollectionHero from "@/components/common/CollectionHero";

// export default function MensNewArrivalsPage() {
//     return (
//         <main className="bg-[#ece9e2] px-3 pt-[40px] pb-0">
//             <section className="mx-auto max-w-[1880px]">
//                 <CollectionHero
//                     image="https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_NA_Collections-Header_Desktop_16x9_M.jpg?v=1774909871&width=2048"
//                     title="New Arrivals"
//                     description="Start the season with comfort, style, and versatility."
//                     breadcrumbs={[
//                         { label: "Home", href: "/" },
//                         { label: "Mens", href: "/collections/mens" },
//                         { label: "New Arrivals", href: "/collections/mens-new-arrivals" },
//                     ]}
//                 />
//                 <ProductToolbar />
//                 <ProductGrid products={mensNewArrivals} />
//                 <MensFAQ />
//                 <ValuePillars />
//             </section>
//         </main>
//     );
// }

"use client";

import { useState } from "react";
import ValuePillars from "@/components/home/ValuePillars";
import MensFAQ from "@/components/mens-new-arrivals/MensFAQ";
import ProductGrid from "@/components/product/ProductGrid";
import { mensNewArrivals } from "@/app/data/mensNewArrivals";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, {
  AppliedFilters,
} from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";

export default function MensNewArrivalsPage() {
  const [filters, setFilters] = useState<AppliedFilters>({});

  const filteredProducts = filterProducts(mensNewArrivals, {
    filters,
  });

  return (
    <main className="bg-[#ece9e2] px-3 pb-0 pt-[40px]">
      <section className="mx-auto max-w-[1880px]">
        <CollectionHero
          image="https://www.allbirds.com/cdn/shop/files/26Q2_CanvasCruiser_NA_Collections-Header_Desktop_16x9_M.jpg?v=1774909871&width=2048"
          title="New Arrivals"
          description="Start the season with comfort, style, and versatility."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Mens", href: "/collections/mens" },
            { label: "New Arrivals", href: "/collections/mens-new-arrivals" },
          ]}
        />

        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          colors={["Black", "White", "Grey", "Beige", "Blue"]}
          productTypes={["Everyday Sneakers", "Slip Ons"]}
          gender="men"
          collectionType="new-arrivals"
        />

        <ProductGrid products={filteredProducts} />

        <MensFAQ />
        <ValuePillars />
      </section>
    </main>
  );
}