import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from '@customify/api-interfaces';

@Entity()
export class Product implements IProduct {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  brand: string;

  @Column()
  imgUrl: string;

  @Column()
  imgAlt: string;

}
