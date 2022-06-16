import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { throttleSettings } from './consts/constants';
import { AppControllerModule } from './controllers';

@Module({
  imports: [
    AppControllerModule,
    ThrottlerModule.forRoot({
      ttl: throttleSettings.ttl,
      limit: throttleSettings.limit,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
