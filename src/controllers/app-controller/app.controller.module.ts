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
  controllers: [AppController],
  providers: [],
})
export class AppControllerModule {}
