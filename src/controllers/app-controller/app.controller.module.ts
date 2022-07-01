import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthServiceModule, StrategiesModule } from '@userApi/infra';
import { jwtRefreshTokenSettings, jwtSettings } from '../../consts';
import { AppController } from './app.controller';

@Module({
  imports: [
    JwtModule.register({}),
    AuthServiceModule.register(jwtSettings, jwtRefreshTokenSettings),
    StrategiesModule.register(jwtSettings, jwtRefreshTokenSettings),
  ],
  providers: [],
  controllers: [AppController],
})
export class AppControllerModule {}
