"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import PlusIcon from "./PlusIcon";

type TechnicalDetail = {
  label: string;
  value: string;
};

type MaterialItem = {
  type: string;
  name: string;
  desc: string;
  img: string;
};

type ProductInfoAccordionProps = {
  title: string;
  desc: string;
  bestFor: string[];
  productImage: string;
  imageAlt: string;
  designedTitle: string;
  designedItems: string[];
  technicalDetails: TechnicalDetail[];

  materialsTitle: string;
  materials: MaterialItem[];

  careTitle: string;
  careDesc: string;
};

export default function ProductInfoAccordion({
  title,
  desc,
  bestFor,
  productImage,
  imageAlt,
  designedTitle,
  designedItems,
  technicalDetails,
  materialsTitle,
  materials,
  careTitle,
  careDesc,
}: ProductInfoAccordionProps) {
  const [openSection, setOpenSection] = useState<string>("love");
  const [showDetails, setShowDetails] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="mx-2.5 my-2.5 space-y-2.5">
      <div className="rounded-3xl bg-white px-7 shadow-sm">
        <button
          type="button"
          onClick={() => toggleSection("love")}
          className="flex w-full items-center justify-between py-6"
        >
          <span className="font-mono text-base uppercase tracking-[0.25em]">
            {title}
          </span>
          <PlusIcon open={openSection === "love"} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${openSection === "love"
            ? "max-h-[1000px] opacity-100 pb-2"
            : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex h-[560px] items-center justify-center gap-10">
            <div className="w-1/3 max-w-[400px]">
              <div
                className={`overflow-hidden transition-all duration-500 ${showDetails ? "h-0 mb-0" : "h-auto mb-10"
                  }`}
              >
                <p className="text-lg leading-7 text-black">{desc}</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-neutral-600">
                  Best For
                </h3>

                <div className="mb-8 flex flex-wrap gap-3">
                  {bestFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#ebe7e1] px-3 py-1 text-sm text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="mb-8 flex items-center gap-2 text-sm text-neutral-600"
              >
                <ChevronRight
                  size={22}
                  className={`transition-transform duration-500 ${showDetails ? "rotate-90" : "rotate-0"
                    }`}
                />
                <span className="underline">
                  {showDetails ? "Hide technical details" : "View technical details"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${showDetails ? "h-auto" : "h-0"
                  }`}
              >
                <ul className="list-disc space-y-4 pl-8 text-base leading-6 text-black">
                  {technicalDetails.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative w-1/3 max-w-[560px]">
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full border border-neutral-200 opacity-60" />
                <div className="absolute inset-4 rounded-full border border-neutral-200 opacity-60" />
                <div className="absolute inset-8 rounded-full bg-[#ebe7e1]" />

                <img
                  src={productImage}
                  alt={imageAlt}
                  className="absolute inset-8 h-[calc(100%-64px)] w-[calc(100%-64px)] object-contain"
                />
              </div>
            </div>

            <div className="w-1/3 max-w-[400px]">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-neutral-600">
                {designedTitle}
              </h3>

              <ul className="list-disc space-y-3 pl-5 text-base leading-6 text-black">
                {designedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white px-7 shadow-sm">
        <button
          type="button"
          onClick={() => toggleSection("materials")}
          className="flex w-full items-center justify-between py-6"
        >
          <span className="font-mono text-base uppercase tracking-[0.25em]">
            {materialsTitle}
          </span>
          <PlusIcon open={openSection === "materials"} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${openSection === "materials"
            ? "max-h-[260px] opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >

          <div
            className={`grid gap-x-12 pb-8 ${materials.length === 3
              ? "grid-cols-3"
              : materials.length === 4
                ? "grid-cols-4"
                : "grid-cols-2"
              }`}
          >
            {materials.map((item) => (
              <div key={item.name} className="flex items-start gap-4">
                <div className="relative h-20 w-20 shrink-0">
                  <div className="absolute inset-0 rounded-full border border-neutral-200" />
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute inset-1 h-[72px] w-[72px] rounded-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-neutral-500">{item.type}</span>
                    <span className="text-base font-medium text-black">
                      {item.name}
                    </span>
                  </div>

                  <p className="text-sm leading-5 text-black">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-white px-7 shadow-sm">
        <button
          type="button"
          onClick={() => toggleSection("care")}
          className="flex w-full items-center justify-between py-6"
        >
          <span className="font-mono text-base uppercase tracking-[0.25em]">
            {careTitle}
          </span>
          <PlusIcon open={openSection === "care"} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${openSection === "care"
            ? "max-h-[120px] opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <div className="pb-8">
            <p className="text-sm leading-5 text-black">{careDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}