import { Phone } from '../models/Phone.model';
import { Product } from '../models/Product.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
}

export class PhonesServices {
  findAndCountAll(options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'year',
    } = options;

    return Phone.findAndCountAll({
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
        category: 'phones',
      },
    });
  }
}
