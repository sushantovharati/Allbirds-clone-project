import ProductCard from "@/components/product/ProductCard";
import { ReactNode } from "react";

interface Product {
  slug: string;
  title: string;
  price: number;

  color: {
    name: string;
    group: string;
    code: string;
  };

  images: {
    url: string;
    filename: string;
  }[];

  badge?: string;
  sale?: boolean;

  productTypes: string[];
}

interface ProductGridProps {
  products: Product[];
  promoCard?: ReactNode;
}

export default function ProductGrid({ products, promoCard }: ProductGridProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="grid w-[1350px] grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">

        {promoCard}

        {products.map((product) => {

          return (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              title={product.title}
              color={product.color.name}
              price={product.price}
              image={
                product.images[0]?.url?.startsWith("http")
                  ? product.images[0].url
                  : `http://localhost:5000${product.images[0]?.url}`
              }
              badge={product.badge}
              productType={product.productTypes?.[0]}
              sale={product.sale}
            />
          );
        })}
      </div>
    </div>
  );
}