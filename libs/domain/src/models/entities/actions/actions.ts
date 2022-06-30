import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'actions' })
export class Action extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
    comment: 'description',
  })
  description: string;
}
