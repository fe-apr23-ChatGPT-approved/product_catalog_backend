
import { Controller } from '../types/Controller';
import { PhonesServices } from '../services/phones.services';
import { Phone } from '../models/Phone.model';
// import { ProductsServices } from '../services/products.services';

export const getAndCountAllPhonesController: Controller = async (req, res) => {
  const phonesServices = new PhonesServices();
  const avaliableSortBy = ['id', 'priceRegular', 'name'];

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
    const phones = await phonesServices.findAndCountAll({
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as string,
    });
    res.send(phones);

  } catch (error) {
    res.sendStatus(500);
  }
};

export const getAllPhonesFromProductsController:Controller = async (req, res) => {
  // const productServices = new ProductsServices();
  const avaliableSortBy = ['id', 'fullPrice', 'name', 'year'];
  const phonesServices = new PhonesServices();

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
    const phones = await phonesServices.getAllByCategory({
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as string,
    });

    res.send(phones);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const getPhoneByIdController: Controller = async (req, res) => {
  const { id } = req.params;

  try {
    const accessories = await Phone.findByPk(id);

    if (!accessories) {
      res.status(404).send({ message: 'No found accesory with this id' });

      return;
    }

    res.send(accessories);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }

};
