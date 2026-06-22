export type Product = {
  id: string;
  name: string;
  price: number;
  tag?: string;
  colors: { name: string; hex: string; image: string; hoverImage?: string }[];
  category: "mens" | "womens";
  type: "sneakers" | "slip-ons";
};

export const products: Product[] = [
  {
    id: "womens-canvas-cruiser-warm-white",
    name: "Women's Canvas Cruiser Slip On",
    price: 125,
    tag: "NEW",
    category: "womens",
    type: "slip-ons",
    colors: [
      {
        name: "Warm White",
        hex: "#f5f0e8",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        hoverImage:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      },
      {
        name: "Sea Spray",
        hex: "#9bbfb0",
        image:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
      },
      {
        name: "Port",
        hex: "#7c3a3a",
        image:
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
      },
    ],
  },
  {
    id: "womens-tree-runner-nz-medium-grey",
    name: "Women's Tree Runner NZ",
    price: 135,
    category: "womens",
    type: "sneakers",
    colors: [
      {
        name: "Medium Grey",
        hex: "#8e8e8e",
        image:
          "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80",
      },
      {
        name: "Natural White",
        hex: "#f2ede6",
        image:
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80",
      },
    ],
  },
  {
    id: "womens-runner-nz-slip-on-mushroom",
    name: "Women's Runner NZ Slip On",
    price: 115,
    tag: "NEW",
    category: "womens",
    type: "slip-ons",
    colors: [
      {
        name: "Mushroom",
        hex: "#b5a99a",
        image:
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
      },
      {
        name: "Anthracite",
        hex: "#3d3d3d",
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
      },
      {
        name: "Dark Navy",
        hex: "#1b2a4a",
        image:
          "https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=600&q=80",
      },
    ],
  },
  {
    id: "mens-cruiser-medium-grey",
    name: "Men's Cruiser",
    price: 135,
    category: "mens",
    type: "sneakers",
    colors: [
      {
        name: "Medium Grey",
        hex: "#8e8e8e",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      },
      {
        name: "Dark Navy",
        hex: "#1b2a4a",
        image:
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
      },
    ],
  },
  {
    id: "mens-runner-nz-slip-on-mushroom",
    name: "Men's Runner NZ Slip On",
    price: 115,
    tag: "NEW",
    category: "mens",
    type: "slip-ons",
    colors: [
      {
        name: "Mushroom",
        hex: "#b5a99a",
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
      },
      {
        name: "Anthracite",
        hex: "#3d3d3d",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
      },
      {
        name: "Dark Navy",
        hex: "#1b2a4a",
        image:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
      },
    ],
  },
  {
    id: "mens-tree-runner-nz-medium-grey",
    name: "Men's Tree Runner NZ",
    price: 135,
    category: "mens",
    type: "sneakers",
    colors: [
      {
        name: "Medium Grey",
        hex: "#8e8e8e",
        image:
          "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80",
      },
      {
        name: "White",
        hex: "#f2ede6",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      },
    ],
  },
  {
    id: "womens-cruiser-slip-on-blizzard",
    name: "Women's Cruiser Slip On",
    price: 125,
    tag: "NEW",
    category: "womens",
    type: "slip-ons",
    colors: [
      {
        name: "Blizzard",
        hex: "#e8e8e8",
        image:
          "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80",
      },
      {
        name: "Port",
        hex: "#7c3a3a",
        image:
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
      },
    ],
  },
  {
    id: "mens-dasher-nz",
    name: "Men's Dasher NZ",
    price: 145,
    tag: "NEW",
    category: "mens",
    type: "sneakers",
    colors: [
      {
        name: "Natural Black",
        hex: "#2a2a2a",
        image:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
      },
      {
        name: "Sea Spray",
        hex: "#9bbfb0",
        image:
          "https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=600&q=80",
      },
    ],
  },
];

export const categories = [
  {
    id: "new-arrivals",
    label: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    menLink: "/collections/mens-new-arrivals",
    womenLink: "/collections/womens-new-arrivals",
  },
  {
    id: "mens",
    label: "Mens",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    menLink: "/collections/mens",
    womenLink: null,
  },
  {
    id: "womens",
    label: "Womens",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    menLink: null,
    womenLink: "/collections/womens",
  },
  {
    id: "bestsellers",
    label: "Best Sellers",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
    menLink: "/collections/mens-bestsellers",
    womenLink: "/collections/womens-bestsellers",
  },
];
