import ProductCard from "@/components/mens-bestsellers/ProductCard";

const products = [
  {
    name: "Men's Tree Runner",
    color: "Natural Black",
    price: "$98",
    image:
      "https://www.allbirds.com/cdn/shop/files/25Q1_Site_PDP_TR3_Blizzard_3Q_Desktop_1.jpg?v=1741215304&width=900",
  },
  {
    name: "Men's Wool Runner",
    color: "Natural Grey",
    price: "$110",
    image:
      "https://www.allbirds.com/cdn/shop/files/24Q3_Site_PDP_WR2_DarkGrey_3Q_Desktop_1.jpg?v=1725897655&width=900",
  },
  {
    name: "Men's Tree Dasher 2",
    color: "Blizzard",
    price: "$135",
    image:
      "https://www.allbirds.com/cdn/shop/files/24Q3_Site_PDP_TD2_Blizzard_3Q_Desktop_1.jpg?v=1725897547&width=900",
  },
  {
    name: "Men's Couriers",
    color: "Hazy Indigo",
    price: "$120",
    image:
      "https://www.allbirds.com/cdn/shop/files/25Q1_Site_PDP_Courier_HazyIndigo_3Q_Desktop_1.jpg?v=1741215304&width=900",
  },
];

export default function ProductGrid() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}