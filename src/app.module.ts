import { Module } from '@nestjs/common';
import { AppController } from './controllers';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './services/authService/auth.module';

@Module({
  imports: [
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
