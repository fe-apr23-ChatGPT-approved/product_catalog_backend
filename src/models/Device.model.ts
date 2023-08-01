import {
  Model,
  DataType,
  Column,
  AllowNull,
} from 'sequelize-typescript';

export class Device extends Model {
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: 'namespace_id',
  })
    namespaceId: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
    field: 'capacity_available',
  })
    capacityAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'price_regular,',
  })
    priceRegular: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'price_discount',
  })
    priceDiscount: number;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
    field: 'colors_available',
  })
    colorsAvailable: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    color: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
    images: string[];

  @AllowNull(false)
  @Column({
    type: DataType.JSON,
  })
    description: {
    title: string;
    text: string[];
  }[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    resolution: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    processor: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    camera: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    zoom: string;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
    cell: string[];
}
