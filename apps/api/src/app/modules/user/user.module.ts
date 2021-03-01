import { Module } from '@nestjs/common';
import { UserEntity } from './User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [],
  exports: []
})
export class UserModule {}
