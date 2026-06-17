"use client";

import { X } from "lucide-react";
import { useState } from "react";
import type { AppliedFilters } from "./CollectionToolbar";

type Props = {
  count: number;
  open: boolean;
  initialFilters: AppliedFilters;
  onClose: () => void;
  onApply: (filters: AppliedFilters) => void;

  colors?: string[];
  productTypes?: string[];
  materials?: string[];
  showMaterial?: boolean;
};

const sizes = [
  "S",
  "M",
  "L",
  "XL",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
  "13.5",
  "14",
  "15",
];

const prices = [
  "Under $75",
  "$76 - $100",
  "$101 - $125",
  "$126 - $150",
  "Over $150",
];

const colorMap: Record<string, string> = {
  Black: "#1f1f1f",
  White: "#ffffff",
  Red: "#ff2f3d",
  Green: "#00a84f",
  Grey: "#6b7280",
  Beige: "#f7e7b4",
  Yellow: "#ffc400",
  Blue: "#2f80ed",
};

export default function FilterPanel({
  count,
  open,
  initialFilters,
  onClose,
  onApply,
  colors = ["Grey", "Blue"],
  productTypes = ["Everyday Sneakers", "Slip Ons"],
  materials = [],
  showMaterial = false,
}: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(
    initialFilters.size ?? null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    initialFilters.color ?? null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(
    initialFilters.price ?? null
  );
  const [selectedType, setSelectedType] = useState<string | null>(
    initialFilters.type ?? null
  );
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(
    initialFilters.material ?? null
  );

  if (!open) return null;

  const selectedItems = [
    selectedSize,
    selectedColor,
    selectedPrice,
    selectedType,
    selectedMaterial,
  ].filter(Boolean);

  const hasFilter = selectedItems.length > 0;

  return (
    <div className="fixed inset-0 z-[999] bg-black/25 backdrop-blur-sm">
      <div className="mx-auto mt-[90px] min-h-[470px] w-[91%] rounded-[22px] bg-white px-8 py-7 shadow-2xl">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={onClose}
              className="flex items-center gap-4 text-[#4b5565]"
            >
              <X size={26} className="text-black" />
              <span className="text-[16px] font-bold uppercase">
                Collapse Filters
              </span>
              <span className="text-[16px]">
                ({hasFilter ? 1 : count} {hasFilter ? "product" : "products"})
              </span>
            </button>

            {selectedItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === selectedSize) setSelectedSize(null);
                  if (item === selectedColor) setSelectedColor(null);
                  if (item === selectedPrice) setSelectedPrice(null);
                  if (item === selectedType) setSelectedType(null);
                  if (item === selectedMaterial) setSelectedMaterial(null);
                }}
                className="flex items-center gap-2 text-[16px] font-semibold"
              >
                {item}
                <X size={18} />
              </button>
            ))}
          </div>

          {hasFilter && (
            <button
              onClick={() =>
                onApply({
                  size: selectedSize || undefined,
                  color: selectedColor || undefined,
                  price: selectedPrice || undefined,
                  type: selectedType || undefined,
                  material: selectedMaterial || undefined,
                })
              }
              className="rounded-full bg-[#1f1f1f] px-8 py-3 text-[14px] font-bold uppercase text-white"
            >
              Apply Filters
            </button>
          )}
        </div>

        <div
          className={`grid gap-16 ${
            showMaterial ? "grid-cols-5" : "grid-cols-4"
          }`}
        >
          {/* Size */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-[18px] font-bold uppercase">
                Size {selectedSize ? "(1)" : ""}
              </h3>

              {selectedSize && (
                <button
                  onClick={() => setSelectedSize(null)}
                  className="text-[15px] text-gray-500 underline"
                >
                  Reset
                </button>
              )}
            </div>

            <p className="mb-5 max-w-[260px] text-[15px] leading-6 text-[#4b5565]">
              Most of our shoes only come in full sizes. If you're a half size,
              select your nearest whole size too.
            </p>

            <div className="grid grid-cols-5 gap-1.5">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(selectedSize === size ? null : size)
                  }
                  className={`h-[54px] border text-[14px] ${
                    selectedSize === size
                      ? "border-black bg-[#1f1f1f] text-white"
                      : "border-[#d1d5db] hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[18px] font-bold uppercase">
                Color {selectedColor ? "(1)" : ""}
              </h3>

              {selectedColor && (
                <button
                  onClick={() => setSelectedColor(null)}
                  className="text-[15px] text-gray-500 underline"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    setSelectedColor(selectedColor === color ? null : color)
                  }
                  className="flex items-center gap-3"
                >
                  <span
                    className={`h-8 w-8 rounded-full border ${
                      selectedColor === color
                        ? "ring-2 ring-black ring-offset-2"
                        : ""
                    }`}
                    style={{ backgroundColor: colorMap[color] }}
                  />
                  <span className="text-[16px]">{color}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[18px] font-bold uppercase">
                Price {selectedPrice ? "(1)" : ""}
              </h3>

              {selectedPrice && (
                <button
                  onClick={() => setSelectedPrice(null)}
                  className="text-[15px] text-gray-500 underline"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="space-y-5">
              {prices.map((price) => (
                <label
                  key={price}
                  className="flex cursor-pointer items-center gap-3 text-[16px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedPrice === price}
                    onChange={() =>
                      setSelectedPrice(selectedPrice === price ? null : price)
                    }
                    className="h-5 w-5"
                  />
                  {price}
                </label>
              ))}
            </div>
          </div>

          {/* Product Type */}
          <div>
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[18px] font-bold uppercase">
                Product Type {selectedType ? "(1)" : ""}
              </h3>

              {selectedType && (
                <button
                  onClick={() => setSelectedType(null)}
                  className="text-[15px] text-gray-500 underline"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="space-y-5">
              {productTypes.map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center gap-3 text-[16px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedType === type}
                    onChange={() =>
                      setSelectedType(selectedType === type ? null : type)
                    }
                    className="h-5 w-5"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Material */}
          {showMaterial && (
            <div>
              <div className="mb-7 flex items-center justify-between">
                <h3 className="text-[18px] font-bold uppercase">
                  Material {selectedMaterial ? "(1)" : ""}
                </h3>

                {selectedMaterial && (
                  <button
                    onClick={() => setSelectedMaterial(null)}
                    className="text-[15px] text-gray-500 underline"
                  >
                    Reset
                  </button>
                )}
              </div>

              <div className="space-y-5">
                {materials.map((material) => (
                  <label
                    key={material}
                    className="flex cursor-pointer items-center gap-3 text-[16px]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMaterial === material}
                      onChange={() =>
                        setSelectedMaterial(
                          selectedMaterial === material ? null : material
                        )
                      }
                      className="h-5 w-5"
                    />
                    {material}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}