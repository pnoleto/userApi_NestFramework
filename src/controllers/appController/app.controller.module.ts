import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthServiceModule, JwtAuthModule, LocalAuthGuardModule, RolesGuardModule } from '../../services';

@Module({
    imports: [
        AuthServiceModule, 
        JwtAuthModule, 
        LocalAuthGuardModule,
        RolesGuardModule
    ],
    providers: [
        AppController
    ],
    exports: [AppController]
})
export class AppControllerModule { }
