import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseSettings, DomainModule } from '@userApi/domain';
import {
  postgresProvider,
  PROFILES_REPOSITORY,
  USERS_REPOSITORY,
} from './providers';
import { InfraService } from './infra.service';

@Module({
  imports: [DomainModule],
  providers: [
    InfraService,
    USERS_REPOSITORY,
    PROFILES_REPOSITORY,
  ],
  exports: [
    USERS_REPOSITORY,
    PROFILES_REPOSITORY
  ],
})
export class InfraModule {
  public static register(options: DatabaseSettings): DynamicModule {
    return {
      module: InfraModule,
      providers: [...postgresProvider(options)],
    };
  }
}
