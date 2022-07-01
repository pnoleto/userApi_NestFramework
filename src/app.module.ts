
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { InfraModule } from '@userApi/infra';
import { AppControllerModule } from './controllers';
import { databaseSettings, throttleSettings } from './consts';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    AppControllerModule,
    ThrottlerModule.forRoot({
      ttl: throttleSettings.ttl,
      limit: throttleSettings.limit,
    }),
    InfraModule.register({
      host: databaseSettings.host,
      port: databaseSettings.port,
      database: databaseSettings.database,
      username: databaseSettings.username,
      password: databaseSettings.password,
      schema: databaseSettings.schema,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
