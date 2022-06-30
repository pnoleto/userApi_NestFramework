import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtRefreshTokenSettings, Role } from '@userApi/domain';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(jwtRefreshTokenSettings: JwtRefreshTokenSettings) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: false,
      secretOrKey: jwtRefreshTokenSettings.secret,
    });
  }

  public async validate(
    playload: any,
  ): Promise<{ userId: number; username: string; roles: Role[] }> {
    return {
      userId: playload.sub,
      username: playload.username,
      roles: playload.roles,
    };
  }
}

export function JwtRefreshStrategyOptions(
  jwtOptions: JwtRefreshTokenSettings,
): any {
  return {
    provide: JwtRefreshStrategy.name,
    useFactory: () => new JwtRefreshStrategy(jwtOptions),
  };
}
