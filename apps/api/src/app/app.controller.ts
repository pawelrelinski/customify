import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';

@Controller()
export class AppController {

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

}
