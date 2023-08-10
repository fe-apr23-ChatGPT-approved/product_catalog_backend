import { Op } from 'sequelize';
import { Product } from '../models/Product.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
  productType?: string[],
  query?: string,
}

export class ProductsServices {
  findAndCountAll(options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'year',
      productType,
      query,
    } = options;

    const orderBy = sortBy === 'year' ? 'DESC' : 'ASC';

    if (query) {
      const preparedSearch = query.split('-').map(word => (
        { itemId: {[Op.like]: `%${word}%`} }
      ));

      return Product.findAndCountAll({
        limit,
        offset,
        order: [[sortBy, orderBy]],
        where: {
          category: { [Op.in]: productType },
          [Op.and]: preparedSearch
        }
      });
    }

    return Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, orderBy]],
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
      order: [['year', 'DESC']]
    });
  }

  findOne(itemId : string) {

    return Product.findOne({
      where: { itemId, },
    });
  }
}
