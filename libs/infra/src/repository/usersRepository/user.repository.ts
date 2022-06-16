import { User } from '@userApi/domain';
import { USERS_REPOSITORY_TOKEN } from '@userApi/infra/consts';

export const USERS_REPOSITORY = {
  provide: USERS_REPOSITORY_TOKEN,
  useValue: User,
};
