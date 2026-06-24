"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import ValuePillars from "@/components/home/ValuePillars";
import ProductGrid from "@/components/product/ProductGrid";

interface Product {
  slug: string;
  title: string;
  price: number;
  color: {
    name: string;
    group: string;
    code: string;
  };
  images: {
    url: string;
    filename: string;
  }[];
  badge?: string;
  sale?: boolean;
  productTypes: string[];
}

export default function SearchBox() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products?badge=NEW")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data.slice(0, 8)))
      .catch(() => setNewArrivals([]));
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setProducts([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);

      fetch(
        `http://localhost:5000/products/search?search=${encodeURIComponent(
          search
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(Array.isArray(data) ? data : []);
        })
        .catch(() => {
          setProducts([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2 px-8 py-6 pt-[130px]">
          <div className="flex items-center border-b border-black">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What are you looking for?"
              className="h-10 flex-1 bg-transparent text-[20px] text-[#6b5f57] outline-none placeholder:text-[#6b5f57]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mr-3 text-[#6b5f57]"
              >
                <X size={20} />
              </button>
            )}

            <button type="button" className="pb-2">
              <Search size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      {search.trim() ? (
        <div className="px-8 pb-12">
          {loading ? (
            <p className="py-10 text-center">Loading...</p>
          ) : products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <p className="py-10 text-center">No products found.</p>
          )}
        </div>
      ) : (
        <>
          <section className="mt-12">
            <ProductGrid products={newArrivals} />
          </section>

          <ValuePillars />
        </>
      )}
    </>
  );
}