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
  sizes?: string[];
  colors?: string[];
  prices?: string[];
  productTypes?: string[];
  materials?: string[];
};

const colorMap: Record<string, string> = {
  Black: "#1f1f1f",
  White: "#ffffff",
  Red: "#ff2f3d",
  Green: "#00a84f",
  Grey: "#6b7280",
  Gray: "#6b7280",
  Beige: "#f7e7b4",
  Yellow: "#ffc400",
  Blue: "#2f80ed",
  Brown: "#8b5a2b",
  Navy: "#172554",
  Pink: "#ec4899",
  Purple: "#9333ea",
  Orange: "#f97316",
};

export default function FilterPanel({
  count,
  open,
  initialFilters,
  onClose,
  onApply,
  sizes = [],
  colors = [],
  prices = [],
  productTypes = [],
  materials = [],
}: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(initialFilters.size ?? null);
  const [selectedColor, setSelectedColor] = useState<string | null>(initialFilters.color ?? null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(initialFilters.price ?? null);
  const [selectedType, setSelectedType] = useState<string | null>(initialFilters.type ?? null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(initialFilters.material ?? null);

  if (!open) return null;

  const showSize = sizes.length > 0;
  const showColor = colors.length > 0;
  const showPrice = prices.length > 0;
  const showType = productTypes.length > 0;
  const showMaterial = materials.length > 0;

  const columnCount = [showSize, showColor, showPrice, showType, showMaterial].filter(Boolean).length;

  const selectedItems = [selectedSize, selectedColor, selectedPrice, selectedType, selectedMaterial].filter(Boolean);
  const hasFilter = selectedItems.length > 0;

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/25 backdrop-blur-sm pt-[130px]">
      <div className="mx-auto my-[40px] max-h-[calc(100vh-80px)] w-[91%] overflow-y-auto rounded-[22px] bg-white px-6 py-7 shadow-2xl">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={onClose} className="flex items-center gap-4 text-[#4b5565]">
              <X size={26} className="text-black" />
              <span className="text-[16px] font-bold uppercase">Collapse Filters</span>
              <span className="text-[16px]">({count} {count === 1 ? "product" : "products"})</span>
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

        {columnCount > 0 && (
          <div className="grid gap-12" style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}>
            {showSize && (
              <div className="max-w-[280px]">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-base font-medium uppercase">Size {selectedSize ? "(1)" : ""}</h3>
                  {selectedSize && <button onClick={() => setSelectedSize(null)} className="text-sm text-gray-500 underline">Reset</button>}
                </div>

                <p className="mb-4 max-w-[260px] text-sm leading-6 text-[#4b5565]">
                  Most of our shoes only come in full sizes. If you're a half size, select your nearest whole size too.
                </p>

                <div className="grid grid-cols-5 gap-1">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`flex min-h-[3rem] cursor-pointer items-center justify-center border px-1 py-2 hover:border-black ${selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                        }`}
                    >
                      <span className="text-center text-[11px] leading-tight">
                        {size.includes("/") ? (
                          <>
                            {size.split("/")[0]}
                            <br />
                            {size.split("/")[1]}
                          </>
                        ) : (
                          size
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showColor && (
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <h3 className="text-base font-medium uppercase">Color {selectedColor ? "(1)" : ""}</h3>
                  {selectedColor && <button onClick={() => setSelectedColor(null)} className="text-sm text-gray-500 underline">Reset</button>}
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                  {colors.map((color) => (
                    <button key={color} onClick={() => setSelectedColor(selectedColor === color ? null : color)} className="flex items-center gap-3">
                      <span
                        className={`h-6 w-6 rounded-full border ${selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""}`}
                        style={{ backgroundColor: colorMap[color] ?? color.toLowerCase() }}
                      />
                      <span className="text-sm capitalize">{color}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showPrice && (
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <h3 className="text-base font-medium uppercase">Price {selectedPrice ? "(1)" : ""}</h3>
                  {selectedPrice && <button onClick={() => setSelectedPrice(null)} className="text-sm text-gray-500 underline">Reset</button>}
                </div>

                <div className="space-y-5">
                  {prices.map((price) => (
                    <label key={price} className="flex cursor-pointer items-center gap-3 text-sm">
                      <input type="checkbox" checked={selectedPrice === price} onChange={() => setSelectedPrice(selectedPrice === price ? null : price)} className="h-4 w-4" />
                      {price}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {showType && (
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <h3 className="text-base font-medium uppercase">Product Type {selectedType ? "(1)" : ""}</h3>
                  {selectedType && <button onClick={() => setSelectedType(null)} className="text-sm text-gray-500 underline">Reset</button>}
                </div>

                <div className="space-y-5">
                  {productTypes.map((type) => (
                    <label key={type} className="flex cursor-pointer items-center gap-3 text-sm">
                      <input type="checkbox" checked={selectedType === type} onChange={() => setSelectedType(selectedType === type ? null : type)} className="h-4 w-4" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {showMaterial && (
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <h3 className="text-base font-medium uppercase">Material {selectedMaterial ? "(1)" : ""}</h3>
                  {selectedMaterial && <button onClick={() => setSelectedMaterial(null)} className="text-sm text-gray-500 underline">Reset</button>}
                </div>

                <div className="space-y-5">
                  {materials.map((material) => (
                    <label key={material} className="flex cursor-pointer items-center gap-3 text-sm">
                      <input type="checkbox" checked={selectedMaterial === material} onChange={() => setSelectedMaterial(selectedMaterial === material ? null : material)} className="h-4 w-4" />
                      {material}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}