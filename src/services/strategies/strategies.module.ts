import { Module } from '@nestjs/common';
import { InfraModule, UsersServiceModule } from '@userApi/infra';
import { JwtStrategy } from './jwt.strategy';
import { JwtRefreshStrategy } from './jwt_refresh.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [InfraModule, UsersServiceModule],
  providers: [LocalStrategy, JwtStrategy, JwtRefreshStrategy],
  exports: [],
})
export class StrategiesModule {}
