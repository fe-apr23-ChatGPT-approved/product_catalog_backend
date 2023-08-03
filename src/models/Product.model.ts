import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
})
export class Product extends Model {

  // @PrimaryKey
  // @AllowNull(false)
  // @AutoIncrement
  // @Column({
  //   type: DataType.INTEGER,
  // })
  //   id: number;

  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    category: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    // field: 'item_id',
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
    // field: 'full_price,',
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
