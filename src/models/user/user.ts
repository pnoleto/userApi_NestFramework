import { Table, Column, DataType, Model } from 'sequelize-typescript';
import { Role } from '../../enums';

@Table
export class User extends Model {
  constructor(username?: string, password?: string, roles?: Role[]) {
    super();

    this.username = username;
    this.password = password;
    this.roles = roles;
  }

  @Column({ type: DataType.STRING, allowNull: false, comment: 'user name' })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false, comment: 'password' })
  password: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false, comment: 'roles' })
  roles: Role[];
}
