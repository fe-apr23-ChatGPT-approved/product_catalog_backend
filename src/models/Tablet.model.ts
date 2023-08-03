import { Table } from 'sequelize-typescript';
import { Device } from './Device.model';

@Table({
  tableName: 'tablets',
  createdAt: false,
  updatedAt: false,
})
export class Tablet extends Device {}
