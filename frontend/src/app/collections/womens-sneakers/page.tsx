"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import CollectionHero from "@/components/common/CollectionHero";
import FAQSection from "@/components/common/FAQSection";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";


const womensFaqs = [
  {
    question: "How do I choose a daily shoe?",
    answer: "Everyday shoes should offer a perfect mix of versatile styling and all-day comfort. The sole of the shoe should grip all kinds of surfaces and allow a full range of comfy motion rather than being stiff. Breathability is also big—your shoes should offer plenty of ventilation to keep you comfortable no matter where your day takes you. Read more on everyday shoes you’ll never want to take off."
  },
  {
    question: "Should you always size up in sneakers?",
    answer: "Allbirds shoes fit true to size for most customers. If you’re shopping our whole-size shoes and you’re in between sizes or have wide feet, we suggest going a size up. For running shoes, if you have wide feet or prefer a roomier fit to get a bit more toe splay, we suggest going up a half size."
  },
  {
    question: "How often should you change sneakers?",
    answer: "Everyday sneakers should be replaced after walking 500 miles or when they start to lose their super-powered levels of comfort. How do you know when you approach 500 miles? If, between your errands and workouts, you spend 30 minutes every day walking, you’ll want to change your shoes every 9-12 months."
  },
];


export default function WomensSneakersPage() {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(
              "http://localhost:5000/products?gender=women&family=dasher-nz,cruiser,canvas-cruiser,terralux-cl,tree-dasher-relay,tree-runner-nz,trino-cozy-crew,women-varsity"
          )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const [filters, setFilters] = useState<AppliedFilters>({});

    const filteredProducts = filterProducts(products, {
        filters,
    });
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
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"]}
          colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Pink", "Orange", "Yellow", "Green", "Blue", "Purple"]}
          prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150"]}
          productTypes={["Everyday Sneakers", "High Tops", "Hiking Shoes", "Running Shoes", "Slip Ons", "Water-Repellent Shoes"]}
          materials={["Canvas", "Corduroy", "Cotton", "Tree", "Wool"]}
          gender="women"
          collectionType="sneakers"
        />
        <ProductGrid products={filteredProducts} />
        <FAQSection
          title="Women's Sneakers"
          description="So, what defines a women’s everyday shoe? It’s about finding that perfect pair you’d happily slip into day after day. Different for everyone, of course, but for us, an everyday shoe should meet some simple criteria. First up? Comfort. Your ideal shoe needs to embrace your foot all day, whether you’re getting stuff done around the home, taking a walk around the block, or spending the day out tackling that to-do list. Then, there’s the whole looks part. Your go-to pair shouldn’t just ace the comfort test; they should also score high on style. Everyday shoes should effortlessly blend a conscious sense of fashion and versatility, so you look sharp wherever you step. "
          faqs={womensFaqs}
        />
        <ValuePillars />
      </section>
    </main>
  );
}