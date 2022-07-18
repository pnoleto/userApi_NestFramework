import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {
  AuthServiceModule,
  InfraModule,
  StrategiesModule,
  ProfilesServiceModule,
} from '@userApi/infra';
import { ProfilesController } from './profiles.controller';
import { jwtSettings, jwtRefreshTokenSettings } from '../../consts';

@Module({
  imports: [
    InfraModule,
    JwtModule.register({}),
    AuthServiceModule.register(jwtSettings, jwtRefreshTokenSettings),
    StrategiesModule.register(jwtSettings, jwtRefreshTokenSettings),
    ProfilesServiceModule
  ],
  controllers: [ProfilesController],
})
export class ProfilesControllerModule {}
