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
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
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
