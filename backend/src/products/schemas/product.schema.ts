import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true, unique: true })
    slug!: string;

    @Prop({ required: true })
    title!: string;

    @Prop({ required: true })
    price!: number;

    @Prop({ required: true })
    quantity!: number;

    @Prop({ required: true })
    category!: string;

    @Prop({ required: true })
    gender!: string;

    @Prop([String])
    productTypes!: string[];

    @Prop([String])
    materials!: string[];

    @Prop({
        required: true,
        type: {
            name: { type: String, required: true },
            group: { type: String, required: true },
            code: { type: String, required: true },
        },
        _id: false,
    })
    color!: {
        name: string;
        group: string;
        code: string;
    };

    @Prop()
    edition?: string;

    @Prop()
    family!: string;

    @Prop()
    badge?: string;

    @Prop({ default: false })
    sale!: boolean;

    @Prop({ default: 0 })
    discountPercent!: number;

    @Prop([String])
    sizes!: string[];

    @Prop({ default: 0 })
    soldCount?: number;

    @Prop({
        default: [],
        type: [
            {
                url: String,
                filename: String,
            },
        ],
    })
    images!: {
        url: string;
        filename: string;
    }[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);