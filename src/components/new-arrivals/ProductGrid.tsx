import Image from "next/image";

const products = [
  {
    title: "MEN'S RUNNER NZ SLIP ON",
    color: "Anthracite",
    price: "$105",
    image:
      "https://www.allbirds.com/cdn/shop/files/A12386_26Q1_Runner-NZ-Slip-On-Anthracite-Dark-Anthr-Sole_PDP_LEFT.png?v=1768951111&width=1280",
  },
  {
    title: "MEN'S RUNNER NZ SLIP ON",
    color: "Dark Navy",
    price: "$105",
    image:
      "https://www.allbirds.com/cdn/shop/files/A12488_26Q1_Runner-NZ-Slip-On-Dark-Navy-Dark-Navy_PDP_LEFT.png?v=1769559941&width=1280",
  },
  {
    title: "WOMEN'S RUNNER NZ SLIP ON",
    color: "Anthracite",
    price: "$105",
    image:
      "https:////www.allbirds.com/cdn/shop/files/A12386_26Q1_Runner-NZ-Slip-On-Anthracite-Dark-Anthr-Sole_PDP_LEFT_7ec4ff21-9ae4-4f0f-9a3c-e813a8404674.png?v=1768951351&width=1280",
  },
  {
    title: "MEN'S RUNNER NZ SLIP ON",
    color: "Mushroom",
    price: "$105",
    image:
      "https://www.allbirds.com/cdn/shop/files/A12622_26Q1_Runner-NZ-Slip-On-Mushroom-Mushroom_PDP_LEFT.png?v=1768951251&width=1280",
  },
];

export default function ProductGrid() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[1350px] grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.image}
          className="rounded-[24px] bg-white p-5"
        >
          <span className="rounded-full bg-[#d8d3c8] px-3 py-2 text-sm font-bold">
            NEW
          </span>

          <div className="relative mt-8 h-[170px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold">
              {product.title}
            </h3>

            <p className="mt-2 text-lg">{product.color}</p>

            <p className="mt-2 font-bold">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}