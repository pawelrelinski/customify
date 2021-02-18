import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './Product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ) {
  }

  public async findAll(): Promise<Array<Product>> {
    return await this.productRepository.find();
  }

  public async findById(id: number | string): Promise<Product> {
    return await this.productRepository.findOne(id);
  }

  public async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  public async updateById(id: number, product: Product) {
    return await this.productRepository.update(id, product);
  }

  public async remove(id: number | string): Promise<void> {
    await this.productRepository.delete(id);
  }

}
