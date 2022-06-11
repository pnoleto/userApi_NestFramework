import { Module } from '@nestjs/common';
import { usersProvider } from '../../models';
import { DatabaseModule } from '../../infra';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule,],
  providers: [UsersService, usersProvider],
  exports: [UsersService],
})
export class UsersServiceModule {}
