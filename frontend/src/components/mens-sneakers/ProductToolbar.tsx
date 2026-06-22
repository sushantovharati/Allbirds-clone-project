"use client";

import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ProductToolbar() {
  return (
    <section className="px-6 pb-8">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full bg-[#d8d3c8] px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black">
            <SlidersHorizontal size={18} />
          </button>

          <div className="flex items-center gap-2">
            <span className="font-bold uppercase">Filter</span>
            <span className="text-gray-600">(12 products)</span>
          </div>
        </div>

        <button className="flex items-center gap-5 rounded-full border border-black px-5 py-2 font-bold uppercase">
          Featured

          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black">
            <ChevronDown size={16} />
          </span>
        </button>
      </div>
    </section>
  );
}