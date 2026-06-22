"use client";

import { useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionHero from "@/components/common/CollectionHero";
import FAQSection from "@/components/common/FAQSection";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";
import { mensSneakers } from "@/app/data/mensSneakers";


const mensFaqs = [
  {
    question: "How long should everyday shoes last?",
    answer: "As a general rule of thumb, everyday shoes should be replaced every 9-12 months or when they start showing signs of wear and tear. Because we want you to wear your Allbirds for a long time and reduce the waste that comes with replacing shoes needlessly, replacing the insoles can extend the life of the shoe and keep them feeling cushy and comfortable. Try Allbirds’ premium, high-cushion insoles, lined with our Merino wool. If your laces are giving out on you, you can also pick up new replacement laces, which are made with post-consumer plastic bottles. (One pair of shoelaces equals 1 recycled water bottle!)"
  },
  {
    question: "How often should you buy new walking shoes?",
    answer: "If you spend 30 minutes a day walking — which averages to around 3-4 hours weekly — it's advisable to replace your shoes every 9-12 months. On the other hand, if you walk for 60 minutes daily or roughly 7 hours per week, it's recommended to change your shoes more often."
  },
  {
    question: "Is it better to buy shoes bigger or smaller?",
    answer: "There should be roughly half an inch of space between your longest toe and the shoe's front. Going for a shoe that is slightly bigger than your foot allows for improved circulation and reduces swelling. Plus, no one wants that pinched feeling on their toes! If one foot is somewhat larger than the other, go with the larger size, and always take into account the type of socks you intend to wear with your shoes."
  },

];


export default function MensSneakersPage() {

  const [filters, setFilters] = useState<AppliedFilters>({});

  const filteredProducts = filterProducts(mensSneakers, {
    filters,
  });

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
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15"]}
          colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Yellow", "Green", "Blue"]}
          prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150"]}
          productTypes={["Everyday Sneakers", "High Tops", "Running Shoes", "Slip Ons", "Water-Repellent Shoes"]}
          materials={["Alternative-Leather", "Canvas", "Corduroy", "Cotton", "Tree", "Wool"]}
          gender="men"
          collectionType="sneakers"
        />
        <ProductGrid products={filteredProducts} />
        <FAQSection
          title="Men's Sneakers"
          description="What in the world is an everyday shoe? Well, the answer is in the question, to an extent, but let’s really break it down for a moment. An everyday shoe is one you’re perfectly content wearing, well, every day. That can mean different things to some, but to us, there are a few things we’re looking for in an everyday shoe. First, there’s the comfortability. You want a shoe that feels good on your foot all day long, whether you’re walking the dog, running a quick errand or two, or logging some hours at your desk during work hours. This makes breathability an essential factor in the everyday equation—you don’t want your feet to spend hours in a stuffy, humid shoe."
          faqs={mensFaqs}
        />
        <ValuePillars />
      </section>
    </main>
  );
}