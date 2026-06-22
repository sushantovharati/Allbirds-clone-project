"use client";

import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ProductToolbar() {
  return (
    <div className="mb-8 flex h-[64px] items-center justify-between rounded-full bg-[#d8d3c8] px-5">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black">
          <SlidersHorizontal size={18} />
        </div>

        <div className="flex items-center gap-2">
          <span className="font-extrabold uppercase">Filter</span>
          <span className="text-sm text-gray-600">(12 products)</span>
        </div>
      </div>

      <button className="flex h-11 items-center gap-6 rounded-full border border-black px-5 text-sm font-extrabold uppercase">
        Featured
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black">
          <ChevronDown size={16} />
        </span>
      </button>
    </div>
  );
}