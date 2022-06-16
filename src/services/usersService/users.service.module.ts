import { Module } from '@nestjs/common';
import { InfraModule } from '@userApi/infra';
import { databaseSettings } from 'src/consts/constants';
import { UsersService } from './users.service';

@Module({
  imports: [
    InfraModule.Register({
      host: databaseSettings.host,
      port: databaseSettings.port,
      database: databaseSettings.database,
      username: databaseSettings.username,
      password: databaseSettings.password,
      schema: databaseSettings.schema
    }),
  ],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersServiceModule {}
