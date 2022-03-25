import { Injectable } from '@nestjs/common';
import { Role } from '../../enums/role.enum';

export class User {
  userId: number;
  username: string;
  password: string;
  roles: Role[];

  constructor(userId: number, username: string, password: string, roles: Role[]) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.roles = roles;
  }
};

@Injectable()
export class UsersService {
  private readonly users = [
    new User(1, 'admin', 'admin', [Role.Admin]),
    new User(2, 'maria', 'guess', [Role.Admin])
  ];

  public async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
