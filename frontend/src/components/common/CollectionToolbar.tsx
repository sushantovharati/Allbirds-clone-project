"use client";

import Link from "next/link";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import SortDropdown from "@/components/common/SortDropdown";
import FilterPanel from "@/components/common/FilterPanel";

export type AppliedFilters = {
  size?: string;
  color?: string;
  price?: string;
  type?: string;
  material?: string;
};

type Gender = "men" | "women" | "n/a";

type CollectionType =
  | "shop-all"
  | "new-arrivals"
  | "bestsellers"
  | "dasher-nz-cl"
  | "varsity-collection"
  | "sandals"
  | "slippers"
  | "mizzles"
  | "active-shoes"
  | "loungers"
  | "sneakers"
  | "socks"
  | "apparel";

type Props = {
  count: number;
  filters?: AppliedFilters;
  onFiltersChange?: (filters: AppliedFilters) => void;

  sizes?: string[];
  colors?: string[];
  prices?: string[];
  productTypes?: string[];
  materials?: string[];

  gender?: Gender;
  collectionType?: CollectionType;
};

function getGenderHref(gender: "men" | "women", collectionType: CollectionType) {
  if (collectionType === "new-arrivals") {
    return gender === "men"
      ? "/collections/mens-new-arrivals"
      : "/collections/womens-new-arrivals";
  }

  if (collectionType === "bestsellers") {
    return gender === "men"
      ? "/collections/mens-bestsellers"
      : "/collections/womens-bestsellers";
  }

  if (collectionType === "dasher-nz-cl") {
    return gender === "men"
      ? "/collections/mens-dasher-nz-cl"
      : "/collections/womens-dasher-nz-cl";
  }

  if (collectionType === "varsity-collection") {
    return gender === "men"
      ? "/collections/mens-varsity-collection"
      : "/collections/womens-varsity-collection";
  }

  if (collectionType === "sandals") {
    return gender === "men"
      ? "/collections/mens-sandals"
      : "/collections/womens-sandals";
  }

  if (collectionType === "slippers") {
    return gender === "men"
      ? "/collections/mens-slippers"
      : "/collections/womens-slippers";
  }

  if (collectionType === "mizzles") {
    return gender === "men"
      ? "/collections/mens-mizzles"
      : "/collections/womens-mizzles";
  }

  if (collectionType === "active-shoes") {
    return gender === "men"
      ? "/collections/mens-active-shoes"
      : "/collections/womens-active-shoes";
  }

  if (collectionType === "loungers") {
    return gender === "men"
      ? "/collections/mens-loungers"
      : "/collections/womens-loungers";
  }

  if (collectionType === "sneakers") {
    return gender === "men"
      ? "/collections/mens-sneakers"
      : "/collections/womens-sneakers";
  }

  if (collectionType === "socks") {
    return gender === "men"
      ? "/collections/mens-socks"
      : "/collections/womens-socks";
  }

  if (collectionType === "apparel") {
    return gender === "men"
      ? "/collections/mens-apparel"
      : "/collections/womens-apparel";
  }

  return gender === "men" ? "/collections/mens" : "/collections/womens";
}

export default function CollectionToolbar({
  count,
  filters = {},
  onFiltersChange = () => { },

  sizes = [],
  colors = [],
  prices = [],
  productTypes = [],
  materials = [],

  gender = "n/a",
  collectionType = "shop-all",
}: Props) {
  const [filterOpen, setFilterOpen] = useState(false);

  const activeFilters = Object.entries(filters).filter(([, value]) =>
    Boolean(value)
  );

  const showGenderToggle = gender !== "n/a";

  return (
    <>
      <div className="mx-auto mb-4 flex h-[65px] w-[91%] items-center justify-between rounded-full bg-[#ded8cd] px-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black"
          >
            <SlidersHorizontal size={18} />
          </button>

          <span className="font-bold uppercase text-[#24385c]">Filter</span>

          <span className="text-[#24385c]">
            ({count} {count === 1 ? "product" : "products"})
          </span>

          {activeFilters.map(([key, value]) => (
            <button
              type="button"
              key={key}
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  [key]: undefined,
                })
              }
              className="ml-2 flex items-center gap-3 rounded-full bg-white px-5 py-3 font-semibold"
            >
              {value}
              <X size={18} />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {showGenderToggle && (
            <div className="flex h-[50px] items-center rounded-full border border-black p-1">
              <Link
                href={getGenderHref("men", collectionType)}
                className={`flex h-10 items-center rounded-full px-6 text-sm font-bold uppercase transition ${gender === "men" ? "bg-[#202020] text-white" : "text-black"
                  }`}
              >
                Men
              </Link>

              <Link
                href={getGenderHref("women", collectionType)}
                className={`flex h-10 items-center rounded-full px-6 text-sm font-bold uppercase transition ${gender === "women" ? "bg-[#202020] text-white" : "text-black"
                  }`}
              >
                Women
              </Link>
            </div>
          )}

          <SortDropdown />
        </div>
      </div>

      <FilterPanel
        count={count}
        open={filterOpen}
        initialFilters={filters}
        onClose={() => setFilterOpen(false)}
        onApply={(newFilters) => {
          onFiltersChange(newFilters);
          setFilterOpen(false);
        }}
        sizes={sizes}
        colors={colors}
        prices={prices}
        productTypes={productTypes}
        materials={materials}
      />
    </>
  );
}