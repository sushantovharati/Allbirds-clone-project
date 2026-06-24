"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/filterProducts";
import CollectionHero from "@/components/common/CollectionHero";
import ProductGrid from "@/components/product/ProductGrid";
import ValuePillars from "@/components/home/ValuePillars";
import FAQSection from "@/components/common/FAQSection";
import CollectionToolbar, { AppliedFilters } from "@/components/common/CollectionToolbar";
import { filterProducts } from "@/lib/filterProducts";


const mensFaqs = [
  {
    question: "Do Allbirds run true to size? ",
    answer: "Yes, Allbirds shoes run true to size. If you’re looking at any of our shoes that come only in whole sizes and you’re in between, just know that Allbirds whole sizes fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all whole-size styles. For those shoes that do come in half sizes, like our Tree Gliders and Tree Dasher 2s, you can order your normal size, unless you plan on wearing thick socks for hiking or trail running. "
  },
  {
    question: "Are Allbirds shoes wide or narrow?",
    answer: "Allbirds shoes are designed to accommodate a range of foot shapes. While they aren't specifically categorized as wide or narrow, the flexible materials used in Allbirds shoes, like our ZQ Merino wool and eucalyptus tree fiber, allow them to adapt to both wider and narrower feet, offering a comfortable fit for most wearers. You’ll notice that Allbirds shoes come in whole and half sizes to ensure a perfect fit. If you’re not sure of your size or you’re in between sizes, refer to the customer reviews and the size guides found on any given shoe’s product pages."
  },
  {
    question: "Are Allbirds meant to be worn without socks?",
    answer: "While it’s true that our shoes are certainly soft and plush enough to go sockless, they’re not purposely designed to wear without socks all the time.  Still, for those days when you’re going au naturel, materials like our soft, moisture-wicking ZQ Merino wool and plush, odor-minimizing castor bean oil insoles will provide your feet with the breathability and comfort they need. However, for those days when you really need a comfy pair of socks, check out our Trino™ sock collection to find some in your style and colors of choice."
  },
  {
    question: "Are Allbirds washable?",
    answer: "Absolutely! Here’s how it's done: Begin by taking out the insoles and laces, then use a towel or soft brush to sweep off any loose dirt. Place the shoes in the washing machine on the wool/delicates cycle (use cold water). We highly recommend putting the shoes in a linen bag or a pillowcase for extra protection. Always use a mild detergent and steer clear of bleach entirely. Then air dry for at least a day; do not tumble dry.S"
  },
];


export default function MensPage() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(
      "http://localhost:5000/products?gender=men"
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
          image="https://www.allbirds.com/cdn/shop/files/26Q1_Collections-Header_Desktop_16x9_Shoes_Men_77be71ad-9ef5-4b32-a289-9644a65eda10.jpg?v=1773874480&width=2048"
          title="Men's Shoes"
          description="Sustainable, supportive, and wildly comfortable, our sneakers are always ready when you are."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Men's Shoes", href: "/collections/mens" },
          ]}
        />
        <CollectionToolbar
          count={filteredProducts.length}
          filters={filters}
          onFiltersChange={setFilters}
          sizes={["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15", "W4.5/M3", "W5.5/M4", "W6.5/M5", "W7.5/M6", "W8.5/M7", "W9.5/M8", "W10.5/M9", "W11.5/M10", "W12.5/M11", "W13.5/M12", "W14.5/M13", "W15.5/M14"]}
          colors={["Black", "Grey", "White", "Beige", "Brown", "Red", "Yellow", "Green", "Blue"]}
          prices={["Under $75", "$76 - $100", "$101 - $125", "$126 - $150", "Over $150"]}
          productTypes={["Everyday Sneakers", "High Tops", "Hiking Shoes", "Running Shoes", "Slip Ons", "Slippers", "Water-Repellent Shoes"]}
          materials={["Alternative-Leather", "Canvas", "Corduroy", "Cotton", "Sugar", "Tree", "Wool"]}
          gender="men"
          collectionType="shop-all"
        />
        <ProductGrid products={filteredProducts} />
        <FAQSection
          title="Men's Shoes"
          description="Find your perfect blend of style and comfort with our collection of men’s shoes for any occasion. From business casual days to meeting up with friends after work to taking on your favorite trail, our men’s shoes provide the ultimate in sustainable support for every step of your day—and look incredible while doing so. "
          faqs={mensFaqs}
        />
        <ValuePillars />
      </section>
    </main>
  );
}