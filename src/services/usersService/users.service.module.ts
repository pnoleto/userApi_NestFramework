import { Module } from '@nestjs/common';
import { User } from 'src/models';
import { DatabaseModule } from '../../infra';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    UsersService,
    {
      provide: 'usersRepository',
      useValue: User,
    },
  ],
  exports: [UsersService],
})
export class UsersServiceModule {}
