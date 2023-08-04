import { Controller } from '../types/Controller';
import { TabletsServices } from '../services/tablets.services';
import { Tablet } from '../models/Tablet.model';

export const getAndCountAllTabletsController: Controller = async (req, res) => {
  const avaliableSortBy = ['id', 'priceRegular', 'name'];
  const tabletsServices = new TabletsServices();

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
    const tablets = await tabletsServices.findAndCountAll({
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as string,
    });
    res.send(tablets);

  } catch (error) {
    console.error('Error: ', error);
    res.sendStatus(500);
  }
};

export const getAllTabletsFromProductsController:Controller = async (req, res) => {
  const avaliableSortBy = ['id', 'fullPrice', 'name', 'year'];
  // const productServices = new ProductsServices();
  const tabletsServices = new TabletsServices();

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
    const phones = await tabletsServices.getAllByCategory({
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as string,
    });

    res.send(phones);
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).send('Internal Server Error');
  }
};

export const getTabletByIdController: Controller = async (req, res) => {
  const { id } = req.params;

  try {
    const tablets = await Tablet.findByPk(id);

    if (!tablets) {
      res.status(404).send({ message: 'No found tablet with this id' });

      return;
    }

    res.send(tablets);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }

};
