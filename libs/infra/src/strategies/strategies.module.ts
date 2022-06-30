import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtRefreshTokenSettings, JwtSettings } from '@userApi/domain';
import { InfraModule, UsersServiceModule } from '@userApi/infra';
import { JwtStrategy, JwtStrategyOptions } from './jwt.strategy';
import {
  JwtRefreshStrategy,
  JwtRefreshStrategyOptions,
} from './jwt_refresh.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [InfraModule, UsersServiceModule],
  providers: [LocalStrategy, JwtStrategy, JwtRefreshStrategy],
  exports: [],
})
export class StrategiesModule {
  public static register(
    jwtOptions: JwtSettings,
    jwtRefreshOptions: JwtRefreshTokenSettings,
  ): DynamicModule {
    return {
      module: InfraModule,
      imports: [JwtModule.register({}), UsersServiceModule],
      providers: [
        LocalStrategy,
        JwtStrategyOptions(jwtOptions),
        JwtRefreshStrategyOptions(jwtRefreshOptions),
      ],
    };
  }
}
