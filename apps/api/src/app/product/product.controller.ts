import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from './Product.entity';
import { ProductService } from './product.service';
import { ErrorResponse } from '../models/ErrorResponse';
import { SuccessResponse } from '../models/SuccessResponse';

type ProductResponse = ErrorResponse<Product> | SuccessResponse<Product>;
type ArrayOfProductsResponse = ErrorResponse<Array<Product>> | SuccessResponse<Array<Product>>;

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {
  }

  @Get()
  public async  getAll(): Promise<ArrayOfProductsResponse> {
    const products: Array<Product> = await this.productService.findAll();
    if (products.length === 0) {
      return new ErrorResponse<Array<Product>>(products);
    }

    return new SuccessResponse<Array<Product>>(products);
  }

  @Get(':id')
  public async getById(@Param('id') id: number | string): Promise<ProductResponse> {
    const product: Product  = await this.productService.findById(id);
    if (!product) {
      return new ErrorResponse(product);
    }

    return  new SuccessResponse(product);
  }

  @Post()
  public async create(@Body() productData: Product): Promise<ProductResponse> {
    const product: Product = await this.productService.create(productData);
    if (!product) {
      return new ErrorResponse(product);
    }

    return  new SuccessResponse(product);
  }

}


