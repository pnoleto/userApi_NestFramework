import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { PostgresSettings } from 'src/consts/constants';
import { User } from 'src/models';

@Injectable()
export class PostgresProvider {}

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: PostgresSettings.host,
        port: PostgresSettings.port,
        username: PostgresSettings.username,
        password: PostgresSettings.password,
        database: PostgresSettings.database,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
