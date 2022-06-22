import { User } from '@userApi/domain';
import { Sequelize } from 'sequelize-typescript';
import { USERS_REPOSITORY_TOKEN } from '../../consts';

export async function defineModels(sequelize: Sequelize) {
  sequelize.addModels([User]);
}

export const USERS_REPOSITORY = {
  provide: USERS_REPOSITORY_TOKEN,
  useValue: User,
};
