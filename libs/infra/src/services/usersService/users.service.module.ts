import { Module } from '@nestjs/common';
import { USERS_REPOSITORY } from '../../repository';
import { UsersService } from './users.service';

@Module({
  imports: [],
  exports: [UsersService, USERS_REPOSITORY],
  providers: [UsersService, USERS_REPOSITORY],
})
export class UsersServiceModule {}
