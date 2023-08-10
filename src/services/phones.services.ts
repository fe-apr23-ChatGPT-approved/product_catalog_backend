import { Op } from 'sequelize';
import { Phone } from '../models/Phone.model';
import { Product } from '../models/Product.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
  query?: string,
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
          category: 'phones',
          [Op.and]: preparedSearch
        }
      });
    }

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
