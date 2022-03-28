import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppControllerModule } from './controllers/appController/app.controller.module';

@Module({
  imports: [
    AppControllerModule,
    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`${__dirname}/configs/${process.env.NODE_ENV}.env`],
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
