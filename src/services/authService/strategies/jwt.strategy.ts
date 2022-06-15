import { jwtConstants } from '../../../consts/constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Role } from '../../../enums/role.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
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
