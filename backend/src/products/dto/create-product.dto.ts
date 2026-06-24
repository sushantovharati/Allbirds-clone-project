export class CreateProductDto {
  title!: string;
  price!: number;

  category!: string;
  gender!: string;

  productTypes!: string[];
  materials!: string[];

  colorName!: string;

  edition?: string;
  family!: string;

  badge?: string;

  sale?: boolean;
  discountPercent?: number;

  sizes!: string[];

  quantity!: number;

  images!: {
    url: string;
    filename: string;
  }[];

}