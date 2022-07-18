import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {
  AuthServiceModule,
  InfraModule,
  StrategiesModule,
} from '@userApi/infra';
import { UsersController } from './users.controller';
import { jwtSettings, jwtRefreshTokenSettings } from '../../consts';

@Module({
  imports: [
    InfraModule,
    JwtModule.register({}),
    AuthServiceModule.register(jwtSettings, jwtRefreshTokenSettings),
    StrategiesModule.register(jwtSettings, jwtRefreshTokenSettings),
  ],
  controllers: [UsersController],
})
export class UsersControllerModule {}
