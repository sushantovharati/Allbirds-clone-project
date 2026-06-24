export class CreateOrderDto {
  email!: string;
  firstName!: string;
  lastName!: string;
  phone!: string;
  country!: string;
  address!: string;
  apartment?: string;
  city!: string;
  state!: string;
  zipCode!: string;
  paymentMethod!: string;
  subtotal!: number;
  shipping!: number;
  total!: number;
  items!: any[];
}