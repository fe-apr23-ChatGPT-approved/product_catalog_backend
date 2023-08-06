import { Controller } from '../types/Controller';
import { AccessoriesServices } from '../services/accessories.services';
import { Accessory } from '../models/Accessory.modes';

const getAndCountAllAccessoriesController: Controller = async (req, res) => {
  const avaliableSortBy = ['id', 'priceRegular', 'name'];
  const accessoriesServices = new AccessoriesServices();

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
    const accessories = await accessoriesServices.findAndCountAll({
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as string,
    });
    res.send(accessories);

  } catch (error) {
    res.sendStatus(500);
  }
};

const getAllAccessoriesFromProductsController:Controller = async (req, res) => {
  const avaliableSortBy = ['id', 'fullPrice', 'name', 'year'];
  const accessoriesServices = new AccessoriesServices();

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
    const phones = await accessoriesServices.getAllByCategory({
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

const getAccessoryByIdController: Controller = async (req, res) => {
  const { id } = req.params;

  try {
    const accessories = await Accessory.findByPk(id);

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

export const accessoryControllers = {
  getAccessoryByIdController,
  getAllAccessoriesFromProductsController,
  getAndCountAllAccessoriesController,
};
