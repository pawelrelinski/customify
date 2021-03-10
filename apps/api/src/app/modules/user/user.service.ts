import { Injectable } from '@nestjs/common';

export interface IUser {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UserService {
  private readonly users: Array<IUser> = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find(user => user.username === username);
  }
}
