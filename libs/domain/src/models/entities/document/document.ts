import { Column, DataType, Model } from 'sequelize-typescript';

export class Document<T> extends Model {
  @Column({
    type: DataType.JSONB,
    allowNull: false,
    unique: false,
    comment: '',
  })
  document: T;
}
