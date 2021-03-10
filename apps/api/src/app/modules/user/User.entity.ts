import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IUser } from '@customify/api-interfaces';

@Entity('user')
export class UserEntity implements IUser {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  password: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false
  })
  email: string;

  // @BeforeInsert()  async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
}
