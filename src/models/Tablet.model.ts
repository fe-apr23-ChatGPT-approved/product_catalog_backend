import { Table } from 'sequelize-typescript';
import { Device } from './Device.model';

@Table({
  tableName: 'tablets',
})
export class Tablet extends Device {}
