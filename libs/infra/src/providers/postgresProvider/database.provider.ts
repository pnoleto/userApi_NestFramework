import { DatabaseSettings, User } from '@userApi/domain';
import { POSTGRES_PROVIDER_TOKEN } from '../../consts';
import { Sequelize } from 'sequelize-typescript';

export function POSTGRES_PROVIDER(databaseSettings: DatabaseSettings): any[] {
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
          schema: databaseSettings.schema
        });

        postgresProvider.addModels([User]);
        await postgresProvider.sync();
        return postgresProvider;
      },
    },
  ];
}
