import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService, AuthServiceOptions } from './auth.service';
import { JwtRefreshTokenSettings, JwtSettings } from '@userApi/domain';

@Module({
  imports: [],
  providers: [],
  exports: [],
})
export class AuthServiceModule {
  public static register(
    jwtOptions: JwtSettings,
    jwtRefreshOptions: JwtRefreshTokenSettings,
  ): DynamicModule {
    return {
      module: AuthServiceModule,
      imports: [JwtModule.register({})],
      providers: [...AuthServiceOptions(jwtOptions, jwtRefreshOptions)],
      exports: [AuthService],
    };
  }
}
