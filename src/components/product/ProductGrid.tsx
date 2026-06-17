import ProductCard from "@/components/product/ProductCard";

interface Product {
  slug: string;
  title: string;
  color: string;
  price: string;
  images: string[];
  badge?: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="grid w-[1350px] grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            slug={product.slug}
            title={product.title}
            color={product.color}
            price={product.price}
            image={product.images[0]}
            badge={product.badge}
          />
        ))}
      </div>
    </div>
  );
}