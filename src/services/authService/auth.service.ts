import { User } from '@userApi/domain';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../usersService/users.service';
import { jwtRefreshTokenSettings, jwtSettings } from '../../consts/constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  public login(user: User): { access_token: string; refresh_token: string } {
    const playload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
    };

    return {
      access_token: this.jwtService.sign(playload, jwtSettings),
      refresh_token: this.jwtService.sign(playload, jwtRefreshTokenSettings),
    };
  }

  public generateTokenFromRefreshToken(user: any): { access_token: string } {
    const playload = user;

    return {
      access_token: this.jwtService.sign(playload, jwtSettings),
    };
  }
}
