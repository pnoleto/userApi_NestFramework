import { UserResourceActions } from '../../../enums/role.enum';

export class Resource {
  name: string;
  description: string;
  actions: UserResourceActions[];
  active: boolean;
}
