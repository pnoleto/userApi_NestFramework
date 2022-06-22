import { Module } from '@nestjs/common';
import { InfraModule, USERS_REPOSITORY } from '@userApi/infra';
import { UsersService } from './users.service';

@Module({
  imports: [InfraModule],
  exports: [UsersService, USERS_REPOSITORY],
  providers: [UsersService, USERS_REPOSITORY],
})
export class UsersServiceModule {}
