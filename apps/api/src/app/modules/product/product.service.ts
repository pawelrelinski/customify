import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './Product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>
  ) {
  }

  public async findAll(): Promise<Array<ProductEntity>> {
    return await this.productRepository.find();
  }

  public async findById(id: number | string): Promise<ProductEntity> {
    return await this.productRepository.findOne(id);
  }

  public async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.productRepository.save(product);
  }

  public async updateById(id: number, product: ProductEntity) {
    return await this.productRepository.update(id, product);
  }

  public async remove(id: number | string): Promise<void> {
    await this.productRepository.delete(id);
  }

}
