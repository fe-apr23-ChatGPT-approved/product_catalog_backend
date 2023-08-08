import { Controller } from '../types/Controller';
import { ProductsServices } from '../services/products.services';
import { Product } from '../models/Product.model';

const avaliableSortBy = ['id', 'fullPrice', 'name', 'year'];
const avaliableProductType = ['phones', 'accessories', 'tablets'];

const getAndCountAllProductsController: Controller = async (req, res) => {
  const productsServices = new ProductsServices();

  const {
    limit = 1000,
    offset = 0,
    sortBy = 'year',
    productType,
  } = req.query;

  // eslint-disable-next-line max-len
  const isSortByValid = typeof sortBy === 'string' && avaliableSortBy.includes(sortBy);
  const isLimitValid = !Number.isNaN(Number(limit));
  const isOffsetValid = !Number.isNaN(Number(offset));

  // eslint-disable-next-line max-len
  if (productType && typeof productType === 'string' && !avaliableProductType.includes(productType)) {
    res.send([]);

    return;
  }

  if (!isSortByValid || !isLimitValid || !isOffsetValid) {
    res.sendStatus(400);

    return;
  }

  const normalizeProductType = productType ? [productType] : avaliableProductType;
  
  try {
    const products = await productsServices.findAndCountAll({
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as string,
      productType: normalizeProductType as [string],
    });
    res.send(products);

  } catch (error) {
    console.error('Error: ', error);
    res.sendStatus(500);
  }
};

const getProductByIdController: Controller = async (req, res) => {
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

const getRecomendedProductsController: Controller = async (req, res) => {
  const productsServices = new ProductsServices();
  const { id } = req.params;

  console.log(id);

  try {
    const products = await Product.findByPk(id);

    if (!products) {
      res.status(404).send({ message: 'No found prdoduct with this id' });

      return;
    }

    const { category } = products;

    console.log(category);

    const recomendedProducts = await productsServices.findRecomended(category);

    res.send(recomendedProducts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }

};

const getDiscountPhonesFromProductsController:Controller = async (req, res) => {

  try {
    const newPhones = await Product.findAll({
      where: {category: 'phones'},
      limit: 10,
      order: [['fullPrice', 'DESC']],
    });

    res.send(newPhones);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
};

const getNewPhonesFromProductsController:Controller = async (req, res) => {

  try {
    const newPhones = await Product.findAll({
      where: {category: 'phones'},
      limit: 10,
      order: [['year', 'DESC']],
    });

    res.send(newPhones);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
};

export const productControllers = {
  getDiscountPhonesFromProductsController,
  getAndCountAllProductsController,
  getProductByIdController,
  getRecomendedProductsController,
  getNewPhonesFromProductsController
};
