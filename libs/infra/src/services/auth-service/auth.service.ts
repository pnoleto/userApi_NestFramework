import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtRefreshTokenSettings, JwtSettings, User } from '@userApi/domain';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private jwtSettings: JwtSettings,
    private jwtRefreshTokenSettings: JwtRefreshTokenSettings,
  ) {}

  public login(user: User): { access_token: string; refresh_token: string } {
    const playload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
    };

    return {
      access_token: this.jwtService.sign(playload, this.jwtSettings),
      refresh_token: this.jwtService.sign(
        playload,
        this.jwtRefreshTokenSettings,
      ),
    };
  }

  public generateTokenFromRefreshToken(user: any): { access_token: string } {
    const playload = user;

    return {
      access_token: this.jwtService.sign(playload, this.jwtSettings),
    };
  }
}

export function AuthServiceOptions(
  jwtOptions: JwtSettings,
  jwtRefreshOptions: JwtRefreshTokenSettings,
): any[] {
  return [
    {
      provide: JwtSettings,
      useValue: jwtOptions,
    },
    {
      provide: JwtRefreshTokenSettings,
      useValue: jwtRefreshOptions,
    },
    {
      provide: AuthService,
      useFactory: (
        jwtService: JwtService,
        jwtOptions: JwtSettings,
        jwtRefreshOptions: JwtRefreshTokenSettings,
      ) => {
        return new AuthService(jwtService, jwtOptions, jwtRefreshOptions);
      },
      inject: [JwtService, JwtSettings, JwtRefreshTokenSettings],
    },
  ];
}
