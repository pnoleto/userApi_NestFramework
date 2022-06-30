import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthServiceModule, StrategiesModule } from '@userApi/infra';
import { jwtRefreshTokenSettings, jwtSettings } from '../../consts/constants';
import { AppController } from './app.controller';

@Module({
  imports: [
    ThrottlerModule,
    JwtModule.register({}),
    AuthServiceModule.register(jwtSettings, jwtRefreshTokenSettings),
    StrategiesModule.register(jwtSettings, jwtRefreshTokenSettings),
  ],
  providers: [],
  controllers: [AppController],
})
export class AppControllerModule {}
