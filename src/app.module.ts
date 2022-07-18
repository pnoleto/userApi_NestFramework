import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { InfraModule } from '@userApi/infra';
import { UsersControllerModule, ProfilesControllerModule } from './controllers';
import { databaseSettings, throttleSettings } from './consts';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    UsersControllerModule,
    ProfilesControllerModule,
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
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  controllers: [],
})
export class AppModule {}
