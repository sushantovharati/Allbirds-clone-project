import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: "1",
    name: "Men's Tree Runner",
    colors: ["Jet Black"],
    category: "sneakers",
    price: "$98",
    image:
      "https://www.allbirds.com/cdn/shop/files/25Q1_Site_PDP_TR3_Blizzard_3Q_Desktop_1.jpg?v=1741215304&width=900",
  },
  {
    id: "2",
    name: "Men's Tree Dasher 2",
    colors: ["Thunder Green"],
    category: "sneakers",
    price: "$135",
    image:
      "https://www.allbirds.com/cdn/shop/files/24Q3_Site_PDP_TD2_Blizzard_3Q_Desktop_1.jpg?v=1725897547&width=900",
  },
  {
    id: "3",
    name: "Men's Wool Runner NZ",
    colors: ["Dark Jungle"],
    category: "sneakers",
    price: "$110",
    image:
      "https://www.allbirds.com/cdn/shop/files/25Q1_Site_PDP_WRNZ_DarkJungle_3Q.jpg?v=1741215304&width=900",
  },
  {
    id: "4",
    name: "Men's Cruiser",
    colors: ["Natural Black"],
    category: "sneakers",
    price: "$120",
    image:
      "https://www.allbirds.com/cdn/shop/files/25Q1_Site_PDP_Cruiser_Black_3Q.jpg?v=1741215304&width=900",
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