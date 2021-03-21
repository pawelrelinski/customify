import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductEntity } from './Product.entity';
import { ProductService } from './product.service';
import { ErrorResponse } from '../../models/ErrorResponse';
import { SuccessResponse } from '../../models/SuccessResponse';
import { UpdateResult } from 'typeorm';

type ProductResponse = ErrorResponse<ProductEntity> | SuccessResponse<ProductEntity>;
type ArrayOfProductsResponse = ErrorResponse<Array<ProductEntity>> | SuccessResponse<Array<ProductEntity>>;

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {
  }

  @Get()
  public async  getAll(): Promise<ArrayOfProductsResponse> {
    const products: Array<ProductEntity> = await this.productService.findAll();
    if (products.length === 0) {
      return new ErrorResponse<Array<ProductEntity>>(products);
    }

    return new SuccessResponse<Array<ProductEntity>>(products);
  }

  @Get(':id')
  public async getById(@Param('id') id: number | string): Promise<ProductResponse> {
    const product: ProductEntity  = await this.productService.findById(id);
    if (!product || product.isDeleted) {
      return new ErrorResponse(product);
    }

    return  new SuccessResponse(product);
  }

  @Post()
  public async create(@Body() productData: ProductEntity): Promise<ProductResponse> {
    const product: ProductEntity = await this.productService.create(productData);
    if (!product) {
      return new ErrorResponse(product);
    }

    return  new SuccessResponse(product);
  }

  @Put(':id')
  public async updateById(@Param('id') id: number, @Body() updateProduct: ProductEntity): Promise<SuccessResponse<UpdateResult>> {
    const updatedProduct: UpdateResult = await this.productService.updateById(id, updateProduct);
    return new SuccessResponse(updatedProduct);
  }

  @Delete(':id')
  public async deleteById(@Param('id') id: number | string): Promise<unknown> {
    const response = await this.productService.remove(id);
    return {
      success: true,
      data: {
        msg: 'Product has delete',
        response
      }
    }
  }

}


