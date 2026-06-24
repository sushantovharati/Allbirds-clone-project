import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order } from "./schemas/order.schema";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Product } from "../products/schemas/product.schema";

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(dto: CreateOrderDto) {
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException("Order items are required");
    }

    const orderNumber = `ORD-${Date.now()}`;

    const order = await this.orderModel.create({
      ...dto,
      orderNumber,
      status: "pending",
    });

    for (const item of dto.items) {
      await this.productModel.updateOne(
        { slug: item.id },
        {
          $inc: {
            quantity: -item.quantity,
            soldCount: item.quantity,
          },
        },
      );
    }

    return order;
  }

  async findAll() {
    return this.orderModel.find().sort({ createdAt: -1 });
  }
}