import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '@customify/api-interfaces';

export interface IAccessToken {
  access_token: string;
}

@Injectable()
export class AuthService {

  constructor(private usersService: UserService,
              private jwtService: JwtService) {}

  public async validateUser(username: string, pass: string): Promise<IUser | null> {
    const user: IUser = await this.usersService.findOneByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: IUser): Promise<IAccessToken> {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
