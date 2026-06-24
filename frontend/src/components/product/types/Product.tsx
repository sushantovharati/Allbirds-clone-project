// types/product.ts
export type Product = {
  slug: string;
  family: string;
  gender: string;
  title: string;
  price: number;
  color: {
    name: string;
    group: string;
    code: string;
  };
  edition?: string;
  productTypes: string[];
  materials: string[];
  sizes: string[];
  badge?: string;
  images: {
    url: string;
    filename: string;
  }[];
};