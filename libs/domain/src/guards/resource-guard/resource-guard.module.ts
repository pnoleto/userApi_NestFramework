import { Module } from '@nestjs/common';
import { ResourceGuard } from './resource.guard';

@Module({
  providers: [ResourceGuard],
})
export class ResourceGuardModule {}
