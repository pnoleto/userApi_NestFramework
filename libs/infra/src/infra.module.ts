import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseSettings, DomainModule } from '@userApi/domain';
import { PostgresProvider as postgresProvider, USERS_REPOSITORY } from './providers';
import { InfraService } from './infra.service';

@Module({
  imports: [DomainModule],
  providers: [InfraService, USERS_REPOSITORY],
  exports: [InfraService, USERS_REPOSITORY],
})
export class InfraModule {
  public static register(options: DatabaseSettings): DynamicModule {
    return {
      module: InfraModule,
      providers: postgresProvider(options),
    };
  }
}
