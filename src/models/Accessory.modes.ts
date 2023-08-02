import { Device } from './Device.model';
import {
  DataType,
  Table,
  Column,
  AllowNull,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'accessories',
})
export class Accessory extends Device {
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
    id: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
    camera: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
    zoom: string;
}
