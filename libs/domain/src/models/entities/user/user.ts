import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Role } from '../../../enums';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
    comment: 'username',
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
    comment: 'password',
  })
  password: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    unique: false,
    comment: 'roles',
  })
  roles: Role[];
}
