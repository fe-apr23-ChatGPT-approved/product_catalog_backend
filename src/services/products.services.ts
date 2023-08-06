import { Op } from 'sequelize';
import { Product } from '../models/Product.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
  productType?: string[],
}

export class ProductsServices {
  findAndCountAll(options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'id',
      productType,
    } = options;

    return Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']],
      where: {
        category: { [Op.in]: productType },
      }
    });
  }

  getAllByCategory (category: string) {
    return Product.findAndCountAll({
      where: {
        category,
      },
    });
  }

  findRecomended(category : string = 'phones') {

    return Product.findAll({
      limit: 10,
      where: { category, },
      order: [['year', 'ASC']]
    });
  }
}
