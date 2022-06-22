import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthServiceModule } from '../../services';
import {
  JwtAuthModule,
  LocalAuthGuardModule,
  RolesGuardModule,
} from '@userApi/domain';

@Module({
  imports: [
    JwtAuthModule,
    RolesGuardModule,
    AuthServiceModule,
    LocalAuthGuardModule,
  ],
  controllers: [AppController],
})
export class AppControllerModule {}
