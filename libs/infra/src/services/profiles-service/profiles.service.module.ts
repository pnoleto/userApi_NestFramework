import { Module } from '@nestjs/common';
import { InfraModule } from '@userApi/infra';
import { ProfilesService } from './profiles.service.service';

@Module({
  imports: [InfraModule],
  providers: [ProfilesService],
  exports: [ProfilesService],
})
export class ProfilesServiceModule {}
