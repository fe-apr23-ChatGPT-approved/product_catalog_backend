import { Controller } from '../types/Controller';
import { ProductsServices } from '../services/products.services';
import { Product } from '../models/Product.model';

const avaliableSortBy = ['id', 'fullPrice', 'name'];

export const getAndCountAllProductsController: Controller = async (req, res) => {
  const productsServices = new ProductsServices();

  const {
    limit = 1000,
    offset = 0,
    sortBy = 'id',
  } = req.query;

  const isSortByValid = typeof sortBy === 'string' && avaliableSortBy.includes(sortBy);
  const isLimitValid = !Number.isNaN(Number(limit));
  const isOffsetValid = !Number.isNaN(Number(offset));

  if (!isSortByValid || !isLimitValid || !isOffsetValid) {
    res.sendStatus(400);
  }

  console.log(limit, offset, sortBy);
  
  try {
    const products = await productsServices.findAndCountAll({
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as string,
    });
    res.send(products);

  } catch (error) {
    console.error('Error: ', error);
    res.sendStatus(500);
  }
};

export const getProductByIdController: Controller = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await Product.findByPk(id);

    if (!products) {
      res.status(404).send({ message: 'No found prdoduct with this id' });

      return;
    }

    res.send(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }

};
