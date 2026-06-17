"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Product = {
  title: string;
  badge?: string;
  images: string[];
};

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="relative">
        {product.badge && (
          <div className="absolute left-6 top-8 z-10 rounded-full bg-white px-4 py-2 text-[14px] font-bold uppercase">
            {product.badge}
          </div>
        )}

        <button
          onClick={() => setActiveImage(product.images[0])}
          className="relative h-[650px] w-full"
        >
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            priority
            className="object-contain"
          />
        </button>

        <div className="mt-10 grid grid-cols-2 gap-8">
          {product.images.slice(1).map((image, index) => (
            <button
              key={image}
              onClick={() => setActiveImage(image)}
              className="relative h-[360px] w-full"
            >
              <Image
                src={image}
                alt={`${product.title} ${index + 2}`}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[9999] bg-[#ece9e2]">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute right-8 top-8 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white"
          >
            
            <X size={26} />
          </button>

          <Image
            src={activeImage}
            alt={product.title}
            fill
            className="object-contain p-20"
          />
        </div>
      )}
    </>
  );
}