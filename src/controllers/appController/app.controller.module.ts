import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../../services';
import { AppController } from './app.controller';

@Module({
    providers: [
        AppController,
        { provide: APP_GUARD, useClass: RolesGuard }
    ],
    exports: [AppController]
})
export class AppControllerModule { }
