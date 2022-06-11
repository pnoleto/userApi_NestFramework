import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Role } from '../../enums';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column(DataType.ENUM(Object.values(Role).toString()))
  roles: Role[];
}

export const usersProvider = {
  provide: 'USERS_REPOSITORY',
  useValue: User,
};
