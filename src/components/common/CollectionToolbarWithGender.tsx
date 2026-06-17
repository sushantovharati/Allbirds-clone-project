"use client";

import { SlidersHorizontal, ChevronDown } from "lucide-react";

type Props = {
  count: number;
  activeGender?: "men" | "women";
};

export default function CollectionToolbarWithGender({
  count,
  activeGender = "men",
}: Props) {
  return (
    <div className="mx-auto mb-8 flex h-[80px] w-[91%] items-center justify-between rounded-full bg-[#ded8cd] px-5">
      <div className="flex items-center gap-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black">
          <SlidersHorizontal size={18} />
        </button>

        <div className="flex items-center gap-2 text-[#24385c]">
          <span className="font-bold uppercase tracking-wide">Filter</span>
          <span>({count} products)</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex rounded-full border border-black p-1">
          <button
            className={`rounded-full px-6 py-2 text-sm font-bold uppercase ${
              activeGender === "men"
                ? "bg-[#111111] text-white"
                : "text-black"
            }`}
          >
            Men
          </button>

          <button
            className={`rounded-full px-6 py-2 text-sm font-bold uppercase ${
              activeGender === "women"
                ? "bg-[#111111] text-white"
                : "text-black"
            }`}
          >
            Women
          </button>
        </div>

        <button className="flex items-center gap-14 rounded-full border border-black px-6 py-3 text-sm font-bold uppercase">
          Featured
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black">
            <ChevronDown size={16} />
          </span>
        </button>
      </div>
    </div>
  );
}