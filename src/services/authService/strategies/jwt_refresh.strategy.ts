import { jwtRefreshTokenSettings } from '../../../consts/constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Role } from '@userApi/domain';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: true,
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
