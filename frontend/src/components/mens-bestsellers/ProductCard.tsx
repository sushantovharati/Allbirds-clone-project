type Product = {
  name: string;
  color: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-[24px] bg-white">
      <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-[#eeece5]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{product.color}</p>
        <p className="mt-3 font-bold">{product.price}</p>
      </div>
    </div>
  );
}