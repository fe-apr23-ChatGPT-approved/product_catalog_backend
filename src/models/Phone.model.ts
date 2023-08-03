import { Table } from 'sequelize-typescript';
import { Device } from './Device.model';

@Table({
  tableName: 'phones',
  createdAt: false,
  updatedAt: false,
})
export class Phone extends Device {}
