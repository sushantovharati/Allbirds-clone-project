"use client";

import { useState } from "react";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";
import { mensNewArrivals } from "@/app/data/mensNewArrivals";
import CollectionHero from "@/components/common/CollectionHero";
import CollectionToolbar, { AppliedFilters, } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import FAQSection from "@/components/common/FAQSection";

const faqs = [
  {
    question: "What is a sustainable shoe?",
    answer: `A sustainable shoe is one made from natural, renewable materials with a low carbon footprint, using ethical and eco-friendly agricultural and manufacturing processes. At Allbirds, reducing our environmental impact has been our priority since day one. Renewable materials: We believe we can do better than synthetic materials. Allbirds replaces petroleum-based materials with natural, renewable ones and invents alternatives when a replacement doesn’t yet exist. Regenerative agriculture: For us, the future of fashion is inextricably linked to the future of regenerative agriculture. Not only does it represent a huge opportunity to reverse climate change, it also provides benefits to local communities, biodiversity, ecology, the long-term viability of the land, and more. Low carbon footprint: We’re holding ourselves accountable to lowering our carbon footprint and putting it on display next to each product.`,
  },
  {
    question: "What is the advantage of a sustainable shoe?",
    answer: `There are three main advantages to sustainable shoes like Allbirds: they’re lightweight, breathable, and make less of an impact on the planet than synthetic shoes. Lightweight: All of our shoes are made to be lightweight. But our SuperLight collection is especially light-as-air, clocking in at 4 to 5 ounces each. These everyday sneakers are made with our innovative SuperLight Foam, with carbon-negative, sugarcane-derived green EVA, for a midsole that is approximately 70% bio-based content. (Compare that with usual industry foams that are often 100% plastics made from petroleum.) Breathability: Natural materials like breezy eucalyptus fiber let your feet breathe and keep you comfortable. Environmental Impact: Our current reliance on fossil fuels is accelerating climate change, creating negative impacts on waste, biodiversity, and more. Transitioning back to renewable, natural materials and working toward the lowest carbon footprint in the industry is how sustainable shoes can make a difference.`,
  },
  {
    question: "What are eco-friendly sneaker materials?",
    answer: `Eco-friendly sneaker materials are materials that are renewable and natural, with low carbon footprints. Allbirds uses eco-friendly renewable materials like eucalyptus tree fiber, sugarcane, post-consumer recycled polyester (to make our laces), and soft merino wool. Right now, 57% of footwear and 64% of apparel is made from synthetic materials, which are made from plastics. Plastics come from oil, a fossil fuel that’s accelerating climate change. Making the switch to renewable materials and sustainable footwear is a step in the right direction to reverse climate change.`,
  },
  {
    question: "How can I reduce my carbon footprint on my shoes?",
    answer: `The carbon footprint of a shoe comes down to five factors: materials, manufacturing, transportation, product use, and end-of-life. (Learn more about how these are measured and minimized.) Because Allbirds is so committed to our mission to lower our carbon footprint, we measure all of these factors and report back to our customers on our progress. You’ll also find the carbon footprint of every Allbirds product on that product’s page so that you can compare and choose the low-carbon shoes that you love.`,
  },
];

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
          sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15"]}
          colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Yellow", "Green", "Blue"]}
          prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150", "Over $150"]}
          productTypes={["Everyday Sneakers", "High Tops", "Long Sleeve Tees", "Running Shoes", "Shirts", "Slip Ons", "Slippers", "Socks", "Sweatpants", "Tees", "Water-Repellent Shoes"]}
          materials={["Alternative-Leather", "Canvas", "Cotton", "Sugar", "Tree", "Wool"]}
          gender="men"
          collectionType="new-arrivals"
        />

        <ProductGrid products={filteredProducts} />
        <FAQSection
          title="Mens New Arrivals"
          description="Discover the latest men’s new arrivals at Allbirds—fresh, innovative styles crafted with comfort, versatility, and sustainability in mind. Explore new shoes, apparel, and accessories made from eco-friendly materials like merino wool, tree fiber, and sugarcane. Each design combines lightweight comfort with timeless style, making it easy to look and feel your best every day. Check back often for new colors, limited-edition drops, and updated takes on fan favorites, all created with the planet in mind."
          faqs={faqs}
        />
        <ValuePillars />
      </section>
    </main>
  );
}