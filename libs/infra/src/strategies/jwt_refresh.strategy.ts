import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtRefreshTokenSettings, UserResourceActions } from '@userApi/domain';

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
  ): Promise<{ userId: number; username: string; resources: UserResourceActions[] }> {
    return {
      userId: playload.sub,
      username: playload.username,
      resources: playload.resources,
    };
  }
}

export function JwtRefreshStrategyOptions(
  jwtRefreshOptions: JwtRefreshTokenSettings,
): any {
  return {
    provide: JwtRefreshStrategy.name,
    useFactory: () => new JwtRefreshStrategy(jwtRefreshOptions),
  };
}
