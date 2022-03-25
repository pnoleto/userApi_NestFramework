import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User, UsersService } from '../usersService/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  public async validateUser(username: string, pass: string): Promise<any> {
    const user: User = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  public async login(user: any): Promise<{ access_token: string; }> {
    const payload = {
      sub: user.userId,
      username: user.username,
      roles: user.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
