import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './User.entity';
import { ErrorResponse } from '../../models/ErrorResponse';
import { SuccessResponse } from '../../models/SuccessResponse';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get()
  public async getAll(): Promise<any> {
    const users: Array<UserEntity> = await this.userService.findAll();
    if (!users || users.length === 0) {
      return new ErrorResponse<Array<UserEntity>>(users);
    }

    return new SuccessResponse<Array<UserEntity>>(users);
  }

  @Get(':username')
  public async getByUsername(@Param('username') username: string): Promise<any> {
    const user: UserEntity = await this.userService.findOneByUsername(username);
    if (!user) {
      return new ErrorResponse<UserEntity>(user);
    }
    return new SuccessResponse<UserEntity>(user);
  }

  @Post()
  public async create(@Body() userData: UserEntity): Promise<any> {
    const user: UserEntity = await this.userService.create(userData);
    if (!user) {
      return new ErrorResponse(user);
    }
    return new SuccessResponse(user);
  }

}
