import { Module } from '@nestjs/common';
//import { ConfigModule } from '@nestjs/config';
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
    /*ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`${__dirname}/configs/${process.env.NODE_ENV}.env`],
    }),*/
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
