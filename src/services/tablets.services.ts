import { Product } from '../models/Product.model';
import { Tablet } from '../models/Tablet.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
}

export class TabletsServices {
  findAndCountAll(options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'id',
    } = options;

    return Tablet.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']]
    });
  }
  
  getAllByCategory (options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'year',
    } = options;

    const orderBy = sortBy === 'year' ? 'DESC' : 'ASC';

    return Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, orderBy]],
      where: {
        category: 'tablets',
      },
    });
  }
}
