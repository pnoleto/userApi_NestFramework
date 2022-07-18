import { SetMetadata } from '@nestjs/common';
import { UserResourceActions } from '../../enums';

export const ACTIONS_KEY = 'actions';
export const Actions = (...actions: UserResourceActions[]) =>
  SetMetadata(ACTIONS_KEY, actions);
