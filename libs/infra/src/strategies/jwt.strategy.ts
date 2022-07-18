import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtSettings, UserResourceActions } from '@userApi/domain';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(jwtSettings: JwtSettings) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSettings.secret,
    });
  }

  public async validate(
    playload: any,
  ): Promise<{ userId: number; username: string; resources: UserResourceActions[] }> {
    return {
      userId: playload.sub,
      username: playload.username,
      resources: playload.resources,
    };
  }
}

export function JwtStrategyOptions(jwtOptions: JwtSettings): any {
  return {
    provide: JwtStrategy,
    useFactory: () => new JwtStrategy(jwtOptions),
  };
}
