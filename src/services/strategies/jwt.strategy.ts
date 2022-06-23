import { jwtSettings } from '../../consts/constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Role } from '@userApi/domain';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSettings.secret,
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
