import { Op } from 'sequelize';
import { Accessory } from '../models/Accessory.modes';
import { Product } from '../models/Product.model';

interface Options {
  limit?: number,
  offset?: number,
  sortBy?: string,
  query?: string,
  
}

export class AccessoriesServices {
  findAndCountAll(options: Options = {} ) {

    const {
      limit = 1000,
      offset = 0,
      sortBy = 'year',
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
          category: 'accessories',
          [Op.and]: preparedSearch
        }
      });
    }

    return Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, orderBy]],
      where: {
        category: 'accessories',
      },
    });
  }
}
