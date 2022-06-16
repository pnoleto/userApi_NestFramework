import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';
import { User } from './models';

@Module({
  providers: [DomainService],
  exports: [DomainService],
  imports:[User]
})
export class DomainModule {}
