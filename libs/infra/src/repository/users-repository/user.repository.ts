import { ProfileEntity, UserEntity } from '@userApi/domain';
import { Sequelize } from 'sequelize-typescript';
import {
  PROFILES_REPOSITORY_TOKEN,
  USERS_REPOSITORY_TOKEN,
} from '../../consts';

export async function defineModels(sequelize: Sequelize) {
  sequelize.addModels([UserEntity, ProfileEntity]);
}

export const USERS_REPOSITORY = {
  provide: USERS_REPOSITORY_TOKEN,
  useValue: UserEntity,
};

export const PROFILES_REPOSITORY = {
  provide: PROFILES_REPOSITORY_TOKEN,
  useValue: ProfileEntity,
};
