import { Table } from 'sequelize-typescript';
import { Resource } from '../resource/resource';
import { Document } from '../document/document';

export class Profile {
  name: string;
  description: string;
  resources: Resource[];
}

@Table({ tableName: 'profiles' })
export class ProfileEntity extends Document<Profile> {}
