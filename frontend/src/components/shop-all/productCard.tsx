import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  title: string;
  color: string;
  price: string;
  image: string;
  badge?: string;
}

export default function ProductCard({
  slug,
  title,
  color,
  price,
  image,
  badge,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-[24px] bg-white transition hover:shadow-md"
    >
      <div className="relative h-[320px]">
        {badge && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-[#d8d3c8] px-3 py-2 text-sm font-bold">
            {badge}
          </span>
        )}

        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-8 transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold">{title}</h3>

        <p className="mt-1 text-gray-600">{color}</p>

        <p className="mt-2 font-bold">{price}</p>
      </div>
    </Link>
  );
}