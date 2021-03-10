import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from '@customify/api-interfaces';

@Entity('product')
export class ProductEntity implements IProduct {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false
  })
  price: number;

  @Column({
    type: 'varchar',
    nullable: false
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  brand: string;

  @Column()
  imgUrl: string;

  @Column()
  imgAlt: string;

}
