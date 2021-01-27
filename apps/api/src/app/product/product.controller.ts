import { Controller, Get } from '@nestjs/common';
import { IProduct } from '@customify/api-interfaces';

@Controller('product')
export class ProductController {

  @Get()
  getAll(): Array<IProduct> {
    return [];
  }

}
