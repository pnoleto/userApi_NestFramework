import { User } from '@userApi/domain';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { jwtRefreshTokenSettings, jwtSettings } from '../../consts/constants';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

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
