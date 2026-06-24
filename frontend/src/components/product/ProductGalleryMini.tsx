"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Product = {
  title: string;
  badge?: string;
  images: {
    url: string;
    filename: string;
  }[];
};

type Props = {
  product: Product;
};

function getImageUrl(url?: string) {
  if (!url) return "/placeholder.png";
  return url.startsWith("http") ? url : `http://localhost:5000${url}`;
}

export default function ProductGalleryMini({ product }: Props) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="pt-[40px] relative grid grid-cols-1 gap-2 md:grid-cols-2">
        {product.badge && (
          <div className="absolute left-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-[14px] font-bold uppercase">
            {product.badge}
          </div>
        )}

        {product.images.map((image, index) => {
          const imageUrl = getImageUrl(image.url);

          return (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setActiveImage(imageUrl)}
              className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#f7f5f0]"
            >
              <Image
                src={imageUrl}
                alt={product.title}
                fill
                priority={index === 0}
                className="object-contain md:object-cover"
              />
            </button>
          );
        })}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[9999] bg-[#ece9e2]">
          <button
            type="button"
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