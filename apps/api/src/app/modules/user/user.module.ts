import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  // imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
