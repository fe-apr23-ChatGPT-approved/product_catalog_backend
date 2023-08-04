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
      sortBy = 'id',
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
      sortBy = 'id',
    } = options;

    return Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']],
      where: {
        category: 'phones',
      },
    });
  }
}
