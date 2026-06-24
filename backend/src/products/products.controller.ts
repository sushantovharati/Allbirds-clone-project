import { Body, Controller, Post, UseInterceptors, UploadedFiles, } from '@nestjs/common';
import { Get, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
  ) { }

  @Post('upload-images')
  @UseInterceptors(FilesInterceptor('images'))
  uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    return {
      images: files.map((file) => ({
        url: `/uploads/products/${file.filename}`,
        filename: file.filename,
      })),
    };
  }

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.create(createProductDto);
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.productsService.findBySlug(slug);
  }

  @Get()
  findAll(
    @Query('gender') gender?: string,
    @Query('family') family?: string,
    @Query('badge') badge?: string,
    @Query('category') category?: string,
    @Query('sale') sale?: string,
  ) {
    return this.productsService.findAll(
      gender,
      family,
      badge,
      category,
      sale,
    );
  }

  //Product color filter in details page
  @Get('related-colors')
  findRelatedColors(
    @Query('title') title: string,
    @Query('gender') gender: string,
  ) {
    return this.productsService.findRelatedColors(title, gender);
  }

  //Men-wonmen size toggle
  @Get('slug-exists/:slug')
  checkSlugExists(@Param('slug') slug: string) {
    return this.productsService.checkSlugExists(slug);
  }
}