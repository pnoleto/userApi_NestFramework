import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthServiceModule, JwtAuthModule, LocalAuthGuardModule, RolesGuardModule } from '../../services';

@Module({
    imports: [
        JwtAuthModule,
        RolesGuardModule,
        AuthServiceModule,
        LocalAuthGuardModule
    ],
    controllers: [AppController],
})
export class AppControllerModule { }
