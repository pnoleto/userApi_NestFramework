import { jwtRefreshTokenConstants } from '../../../consts/constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Role } from '../../../enums/role.enum';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: false,
      secretOrKey: jwtRefreshTokenConstants.secret,
    });     
  }

  public async validate(payload: any): Promise<{ userId: number; username: string; roles: Role[]; }> {
    return {
      userId: payload.sub,
      username: payload.username,
      roles: payload.roles
    };
  }
}
