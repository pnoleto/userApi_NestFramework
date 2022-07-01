import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

@Module({
  providers: [DomainService],
  exports: [],
  imports: [],
})
export class DomainModule {}
