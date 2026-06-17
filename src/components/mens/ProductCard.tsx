type Product = {
  name: string;
  color: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-[28px] bg-white">
      <div className="relative flex h-[360px] items-center justify-center bg-[#e8e4da] p-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        <button className="absolute bottom-4 left-4 right-4 rounded-full bg-white py-4 text-sm font-extrabold uppercase opacity-0 shadow transition group-hover:opacity-100">
          Select Size
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{product.color}</p>
          </div>
          <p className="font-bold">{product.price}</p>
        </div>

        <button className="mt-5 w-full rounded-full bg-black py-3 text-sm font-extrabold uppercase text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}