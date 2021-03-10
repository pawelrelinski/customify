import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductEntity } from './Product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity])
  ],
  controllers: [
    ProductController
  ],
  providers: [
    ProductService
  ],
  exports: [
    TypeOrmModule
  ]
})
export class ProductModule {}
