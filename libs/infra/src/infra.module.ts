import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseSettings, DomainModule } from '@userApi/domain';
import { POSTGRES_PROVIDER, USERS_REPOSITORY } from './providers';
import { InfraService } from './infra.service';

@Module({
  imports: [DomainModule],
  providers: [InfraService, USERS_REPOSITORY],
  exports: [InfraService, USERS_REPOSITORY],
})
export class InfraModule {
  public static Register(options: DatabaseSettings): DynamicModule {
    return {
      module: InfraModule,
      providers: POSTGRES_PROVIDER(options),
    };
  }
}
