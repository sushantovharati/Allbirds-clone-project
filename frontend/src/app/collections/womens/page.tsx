"use client";

import { useState } from "react";
import CollectionHero from "@/components/common/CollectionHero";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import { womens } from "@/app/data/womens";
import FAQSection from "@/components/common/FAQSection";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";


const womensFaqs = [
  {
    question: "Do Allbirds run true to size?",
    answer: "Yes, Allbirds shoes generally run true to size. For those who prefer a snugger fit or plan to wear the shoes without socks, we typically recommend sticking to your usual size. If you prefer a roomier fit or plan to wear thicker socks, consider sizing up for comfort. If you’d like more guidance, refer to the size guides found on every product’s page."
  },
  {
    question: "Are Allbirds considered All-Day Shoes?",
    answer: "Absolutely! Allbirds are designed to support your feet through long hours of wear, making them perfect for your daily routines. Features like supportive midsoles, lightweight construction, ample breathability, and soft materials ensure that you can stay on your feet longer without discomfort—ideal for all-day wear. Learn more about our favorite Allbirds for standing all day."
  },
  {
    question: "Can Allbirds be worn barefoot?",
    answer: "Although our shoes are incredibly soft and plush enough for sockless wear, they are not specifically designed for continuous use without socks. That said, for days when you really want to go sockless, our breathable ZQ Merino wool or eucalyptus tree fiber, paired with the odor-minimizing insoles made from castor bean oil, will keep your feet comfortable and fresh. Need some comfy socks to match with your Allbirds? Take a look at our Anytime sock collection to find the perfect pair that matches your style and color preferences."
  },
  {
    question: "Are Allbirds good for walking all day?",
    answer: "Yes! Allbirds shoes are crafted to provide unrivaled comfort throughout the day. Our daily wear favorites, including the Wool Mizzles, Tree Dashers, and Wool Pipers, utilize sustainable and ethically-sourced materials like our soft ZQ Merino wool, springy SweetFoam® sugarcane midsoles, and plush, odor-minimizing castor bean oil insoles.  Together, these elements result in a shoe that is lightweight, breathable, flexible, and extraordinarily comfortable. Strut in your Allbirds with a spring in your step, whether you're heading to work, running errands, traveling, or anything else on your agenda."
  },
];


export default function WomensPage() {
  const [filters, setFilters] = useState<AppliedFilters>({});

  const filteredProducts = filterProducts(womens, {
    filters,
  });
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
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "W4.5/M3", "W5.5/M4", "W6.5/M5", "W7.5/M6", "W8.5/M7", "W9.5/M8", "W10.5/M9", "W11.5/M10", "W12.5/M11", "W13.5/M12", "W14.5/M13", "W15.5/M14"]}
          colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"]}
          prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150"]}
          productTypes={["Everyday Sneakers", "Flats", "High Tops", "Hiking Shoes", "Running Shoes", "Slip Ons", "Slippers", "Water-Repellent Shoes"]}
          materials={["Canvas", "Corduroy", "Cotton", "Sugar", "Tree", "Wool"]}
          gender="women"
          collectionType="shop-all"
        />
        <ProductGrid products={filteredProducts} />
        <FAQSection
          title="Women's Shoes"
          description="Explore the sustainable fusion of style and all-day comfort with our women’s shoes collection. Whether you need some new flats for the office or a brisk pair of active shoes to log some miles in, we’ve got your perfect pair—but it’s up to you to pick them out."
          faqs={womensFaqs}
        />
        <ValuePillars />
      </section>
    </main>
  );
}