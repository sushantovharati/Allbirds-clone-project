"use client";

import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ProductToolbar() {
  return (

    <div className="flex justify-center w-full">
      <div className="w-[1350px] mb-8 flex items-center justify-between rounded-full bg-[#d8d3c8] px-6 py-3">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-12 items-center justify-center rounded-full border border-black">
          <SlidersHorizontal size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold uppercase">Filter</span>
          <span className="text-gray-600">(4 products)</span>
        </div>
      </div>

      <button className="flex items-center gap-8 rounded-full border border-black px-6 py-2 font-bold uppercase">
        Featured
        <div className="flex h-6 w-8 items-center justify-center rounded-full border border-black">
          <ChevronDown size={18} />
        </div>
      </button>
    </div>
    </div>
  );
}