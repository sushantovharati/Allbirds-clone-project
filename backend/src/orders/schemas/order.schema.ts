import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ required: true })
  orderNumber!: string;

  @Prop({ required: true })
  email!: string;

  @Prop({ required: true })
  firstName!: string;

  @Prop({ required: true })
  lastName!: string;

  @Prop()
  phone!: string;

  @Prop({ required: true })
  country!: string;

  @Prop({ required: true })
  address!: string;

  @Prop()
  apartment?: string;

  @Prop({ required: true })
  city!: string;

  @Prop({ required: true })
  state!: string;

  @Prop({ required: true })
  zipCode!: string;

  @Prop({ required: true })
  paymentMethod!: string;

  @Prop({ default: "pending" })
  status!: string;

  @Prop({ required: true })
  subtotal!: number;

  @Prop({ required: true })
  shipping!: number;

  @Prop({ required: true })
  total!: number;

  @Prop({ type: Array, required: true })
  items!: any[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);