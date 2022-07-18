import { Module } from '@nestjs/common';
import { InfraModule } from '@userApi/infra/infra.module';
import { UsersService } from './users.service';

@Module({
  imports: [InfraModule],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersServiceModule {}
