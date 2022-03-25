import { Module } from '@nestjs/common';
import { AppController } from './controllers';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthServiceModule } from './services/authService/auth.service.module';

@Module({
  imports: [
    AuthServiceModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
