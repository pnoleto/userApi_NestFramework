import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottleSettings } from './consts/constants';
import { AppControllerModule } from './controllers';

@Module({
  imports: [
    AppControllerModule,
    ThrottlerModule.forRoot({
      ttl: ThrottleSettings.ttl,
      limit: ThrottleSettings.limit,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
