"use client";

import Link from "next/link";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ProductToolbar() {
    return (
        <div className="flex justify-center w-full h-[80px]">
            <div className="w-[1350px] mb-5 flex items-center justify-between rounded-full bg-[#ded8cc] px-5 py-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black">
                        <SlidersHorizontal size={19} />
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[16px] font-bold uppercase text-[#26364a]">
                            Filter
                        </span>
                        <span className="text-[16px] text-[#26364a]">(22 products)</span>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex rounded-full border border-black p-1">
                        <Link
                            href="/collections/mens-new-arrivals"
                            className="rounded-full bg-[#1f1f1f] px-7 py-2 text-[14px] font-bold uppercase text-white"
                        >
                            Men
                        </Link>

                        <Link
                            href="/collections/womens-new-arrivals"
                            className="rounded-full px-7 py-2 text-[14px] font-bold uppercase text-black"
                        >
                            Women
                        </Link>
                    </div>

                    <button className="flex items-center gap-20 rounded-full border border-black px-5 py-2 text-[14px] font-bold uppercase text-black">
                        Featured
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black">
                            <ChevronDown size={17} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}