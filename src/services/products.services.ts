import { Product } from '../models/Product.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
}

export class ProductsServices {
  findAndCountAll(options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'id',
    } = options;

    return Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']]
    });
  }

  getAllByCategory (category: string) {
    return Product.findAndCountAll({
      where: {
        category,
      },
    });
  }
}
