import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDB } from './db';
import { Product } from './models/Product.model';
// eslint-disable-next-line max-len
import { getAllPhonesFromProductsController, getPhoneByIdController } from './controlers/phones.contorllers';
// eslint-disable-next-line max-len
import { getAllTabletsFromProductsController, getTabletByIdController } from './controlers/tablets.controllers';
// eslint-disable-next-line max-len
import { getAllAccessoriesFromProductsController, getAccessoryByIdController } from './controlers/accessories.controllers';
// eslint-disable-next-line max-len
import { getAndCountAllProductsController, getProducttByIdController } from './controlers/products.controllers';

dotenv.config();

export const Server = async () => {
  const app = express();

  const PORT = process.env.PORT || 5000;
  // eslint-disable-next-line prefer-destructuring
  const CLIENT_URL = process.env.CLIENT_URL;
  const API_URL = `${process.env.API_URL}:${PORT}`;

  app.use(cors({ origin: CLIENT_URL }));

  const sequelize = initDB();

  const res = await sequelize.authenticate();

  console.log(res);

  sequelize.addModels([Product]);

  app.get('/products', getAndCountAllProductsController);

  app.get('/products/:id', getProducttByIdController);

  app.get('/phones', getAllPhonesFromProductsController);

  app.get('/phones/:id', getPhoneByIdController);

  app.get('/tablets', getAllTabletsFromProductsController);

  app.get('/tablets/:id', getTabletByIdController);
  
  app.get('/accessories', getAllAccessoriesFromProductsController);

  app.get('/accessories/:id', getAccessoryByIdController);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀Server is running on ${API_URL} 🚀🚀🚀`);
  });
};
