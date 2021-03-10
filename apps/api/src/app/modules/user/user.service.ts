import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {
  }

  public async findAll(): Promise<Array<UserEntity>> {
    return await this.userRepository.find();
  }

  public async findOneByUsername(username: string): Promise<UserEntity> {
    return await this.userRepository.findOne(username);
  }

  public async create(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

}
