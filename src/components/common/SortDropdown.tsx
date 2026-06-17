"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const sortOptions = [
  "Featured",
  "Most Relevant",
  "Best Selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, Low to High",
  "Price, High to Low",
  "Date, Old to New",
  "Date, New to Old",
];

export default function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Featured");

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-[54px] min-w-[240px] items-center justify-between rounded-full border border-black px-5 text-[15px] font-bold uppercase ${
          open ? "bg-[#1f1f1f] text-white" : "text-black"
        }`}
      >
        {selected}

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
          <ChevronDown size={18} />
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-[55px] z-50 w-[240px] bg-[#1f1f1f] py-2 text-white shadow-lg">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="block w-full px-5 py-2 text-left text-[14px] font-semibold uppercase hover:bg-[#2d2d2d]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}