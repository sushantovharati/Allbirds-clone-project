import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';

const COLOR_MAP: Record<string, { name: string; group: string; code: string }> = {
  Black: { name: 'Black', group: 'Black', code: '#000000' },
  White: { name: 'White', group: 'White', code: '#FFFFFF' },
  Grey: { name: 'Grey', group: 'Grey', code: '#808080' },
  Beige: { name: 'Beige', group: 'Beige', code: '#D6C6A8' },
  Brown: { name: 'Brown', group: 'Brown', code: '#8B4513' },
  Red: { name: 'Red', group: 'Red', code: '#FF0000' },
  Pink: { name: 'Pink', group: 'Pink', code: '#FFC0CB' },
  Orange: { name: 'Orange', group: 'Orange', code: '#FFA500' },
  Yellow: { name: 'Yellow', group: 'Yellow', code: '#FFFF00' },
  Green: { name: 'Green', group: 'Green', code: '#008000' },
  Blue: { name: 'Blue', group: 'Blue', code: '#0000FF' },
  Purple: { name: 'Purple', group: 'Purple', code: '#800080' },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/'/g, '') // apostrophe remove
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) { }

  async create(dto: CreateProductDto) {
    const color = COLOR_MAP[dto.colorName];

    if (!color) {
      throw new BadRequestException('Invalid color selected');
    }

    const slug = slugify(`${dto.title}-${dto.colorName}`);

    const productData = {
      ...dto,
      slug,
      color,
      sale: dto.sale ?? false,
      discountPercent: dto.sale ? dto.discountPercent ?? 0 : 0,
    };

    delete (productData as any).colorName;

    return this.productModel.create(productData);
  }


  async findAll(
    gender?: string,
    family?: string,
    badge?: string,
    category?: string,
    sale?: string,
  ) {
    const filter: any = {};

    if (gender) {
      filter.gender = {
        $in: gender.split(","),
      };
    }

    if (family) {
      filter.family = {
        $in: family.split(","),
      };
    }

    if (badge) {
      filter.badge = {
        $in: badge.split(","),
      };
    }

    if (category) {
      filter.category = {
        $in: category.split(","),
      };
    }

    if (sale !== undefined) {
      filter.sale = sale === 'true';
    }

    return this.productModel.find(filter).lean();
  }

  //for product[slug]
  async findBySlug(slug: string) {
    return this.productModel.findOne({ slug }).lean();
  }

  async findRelatedColors(title: string, gender: string) {
    return this.productModel
      .find({
        title,
        gender,
      })
      .lean();
  }

  async checkSlugExists(slug: string) {
    const product = await this.productModel
      .findOne({ slug })
      .select('slug')
      .lean();

    return {
      exists: !!product,
      slug: product?.slug ?? null,
    };
  }

  async findProduct(search?: string) {
    const filter: any = {};

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), "i");

      filter.$or = [
        { title: regex },
        { badge: regex },
        { category: regex },
        { "color.name": regex },
        { "color.group": regex },
      ];
    }

    return this.productModel.find(filter).lean();
  }

}