import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  AuthServiceModule,
  JwtAuthModule,
  JwtRefreshTokenGuard,
  LocalAuthGuardModule,
  RolesGuardModule,
} from '../../services';

@Module({
  imports: [
    JwtAuthModule,
    JwtRefreshTokenGuard,
    RolesGuardModule,
    AuthServiceModule,
    LocalAuthGuardModule,
  ],
  controllers: [AppController],
})
export class AppControllerModule {}
