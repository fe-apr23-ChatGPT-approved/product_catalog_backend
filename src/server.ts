import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Product } from './models/Product.model';
import { initDB } from './db';
// eslint-disable-next-line max-len
import { getAllPhonesFromProductsController, getPhoneByIdController } from './controlers/phones.contorllers';
// eslint-disable-next-line max-len
import { getAllTabletsFromProductsController, getTabletByIdController } from './controlers/tablets.controllers';
// eslint-disable-next-line max-len
import { getAllAccessoriesFromProductsController, getAccessoryByIdController } from './controlers/accessories.controllers';
// eslint-disable-next-line max-len
import { getAndCountAllProductsController, getProducttByIdController } from './controlers/products.controllers';

dotenv.config();

export const Server = () => {
  const app = express();

  app.use(cors());

  const sequelize = initDB();
  sequelize.addModels([Product]);

  app.use(express.static('public'));
  
  app.get('/products', getAndCountAllProductsController);

  app.get('/products/:id', getProducttByIdController);

  app.get('/phones', getAllPhonesFromProductsController);

  app.get('/phones/:id', getPhoneByIdController);

  app.get('/tablets', getAllTabletsFromProductsController);

  app.get('/tablets/:id', getTabletByIdController);
  
  app.get('/accessories', getAllAccessoriesFromProductsController);

  app.get('/accessories/:id', getAccessoryByIdController);

  return app;
};
