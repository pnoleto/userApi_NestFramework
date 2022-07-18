import { Profile } from '../profile/profile';
import { Document } from '../document/document';
import { Table } from 'sequelize-typescript';

export class User {
  username: string;
  password: string;
  profile: Profile;
}

@Table({ tableName: 'users' })
export class UserEntity extends Document<User> {}
