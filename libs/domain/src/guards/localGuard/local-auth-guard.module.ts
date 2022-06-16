import { Module } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Module({
    providers:[LocalAuthGuard]
})
export class LocalAuthGuardModule {}
