import { Accessory } from '../models/Accessory.modes';
import { Product } from '../models/Product.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
}

export class AccessoriesServices {
  findAndCountAll(options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'id',
    } = options;

    return Accessory.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']]
    });
  }
  getAllByCategory (options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'id',
    } = options;

    return Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']],
      where: {
        category: 'accessories',
      },
    });
  }
}
