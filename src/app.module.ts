import { Module } from '@nestjs/common';
import { InfraModule } from '@userApi/infra';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppControllerModule } from './controllers';
import { databaseSettings, throttleSettings } from './consts/constants';

@Module({
  imports: [
    AppControllerModule,
    ThrottlerModule.forRoot({
      ttl: throttleSettings.ttl,
      limit: throttleSettings.limit,
    }),
    InfraModule.Register({
      host: databaseSettings.host,
      port: databaseSettings.port,
      database: databaseSettings.database,
      username: databaseSettings.username,
      password: databaseSettings.password,
      schema: databaseSettings.schema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
