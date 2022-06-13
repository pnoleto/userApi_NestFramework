import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { Role } from '../../enums';

@Table
export class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false, comment: 'user name' })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false, comment: 'password'})
  password: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false, comment:'roles' })
  roles: Role[];
}

export const usersProvider = {
  provide: 'USERS_REPOSITORY',
  useValue: User,
};
