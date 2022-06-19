import { DatabaseSettings } from '@userApi/domain';
import { POSTGRES_PROVIDER_TOKEN } from '../../consts';
import { Sequelize } from 'sequelize-typescript';
import { defineModels } from '../../repository';

export function PostgresProvider(databaseSettings: DatabaseSettings): any[] {
  return [
    {
      provide: POSTGRES_PROVIDER_TOKEN,
      useFactory: async () => {
        const postgresProvider = new Sequelize({
          dialect: 'postgres',
          host: databaseSettings.host,
          port: databaseSettings.port,
          username: databaseSettings.username,
          password: databaseSettings.password,
          database: databaseSettings.database,
          schema: databaseSettings.schema,
        });

        defineModels(postgresProvider);

        await postgresProvider.sync();

        return postgresProvider;
      },
    },
  ];
}
