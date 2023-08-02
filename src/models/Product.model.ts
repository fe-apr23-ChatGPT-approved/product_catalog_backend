import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
})
export class Product extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    category: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'item_id',
  })
    itemId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'full_price,',
  })
    fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    year: number;

  @Column({
    type: DataType.STRING,
  })
    image: string;
}
