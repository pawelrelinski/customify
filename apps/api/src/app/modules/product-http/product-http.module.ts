import { Module } from '@nestjs/common';
import { ProductModule } from '../product/product.module';
import { ProductService } from '../product/product.service';
import { ProductController } from '../product/product.controller';

@Module({
  imports: [ProductModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductHttpModule {}
