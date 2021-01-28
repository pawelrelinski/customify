import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {

  @Get()
  getAll(): object {
    return {
      success: true,
      data: {
        msg: 'Im msg from product controller :)'
      }
    };
  }

}
