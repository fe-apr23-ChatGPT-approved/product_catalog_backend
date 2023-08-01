import { Table } from 'sequelize-typescript';
import { Device } from './Device.model';

@Table({
  tableName: 'phones',
})
export class Phone extends Device {}
