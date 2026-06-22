"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const products = [
  {
    title: "Men's Runner NZ",
    category: "Men's Shoes",
    href: "/products/mens-runner-nz",
  },
  {
    title: "Women's Tree Runner NZ",
    category: "Women's Shoes",
    href: "/products/womens-tree-runner-nz",
  },
  {
    title: "Men's Sneakers",
    category: "Men's Shoes",
    href: "/collections/mens-sneakers",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#f5f2ea] px-5 pt-32 pb-20">
      <section className="mx-auto max-w-[1200px]">
        <h1 className="mb-8 text-center text-4xl font-semibold">Search</h1>

        <div className="mx-auto flex max-w-[760px] items-center gap-3 rounded-full bg-white px-6 py-4 shadow-sm">
          <Search size={22} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="w-full bg-transparent text-lg outline-none placeholder:text-gray-500"
            autoFocus
          />
        </div>

        {!query && (
          <div className="mx-auto mt-10 max-w-[760px]">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">
              Popular Searches
            </h2>

            <div className="flex flex-wrap gap-3">
              {["Sneakers", "Slip Ons", "Runner NZ", "Socks"].map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="rounded-full border border-black px-5 py-2 text-sm font-semibold"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {query && (
          <div className="mt-12">
            <p className="mb-6 text-sm text-gray-600">
              {filteredProducts.length} results for “{query}”
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}