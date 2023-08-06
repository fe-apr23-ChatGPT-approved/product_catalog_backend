import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Product } from './models/Product.model';
import { initDB } from './db';
import { phoneControllers } from './controlers/phones.contorllers';
import { tabletControllers } from './controlers/tablets.controllers';
import { accessoryControllers } from './controlers/accessories.controllers';
import { productControllers} from './controlers/products.controllers';

dotenv.config();

export const Server = () => {
  const app = express();

  app.use(cors());

  const sequelize = initDB();
  sequelize.addModels([Product]);

  app.use(express.static('public'));
  
  app.get('/products', productControllers.getAndCountAllProductsController);
  
  app.get('/products/new', productControllers.getNewPhonesFromProductsController);

  app.get('/products/discount', productControllers.getDiscountPhonesFromProductsController);

  app.get('/products/:id', productControllers.getProductByIdController);

  app.get('/products/:id/recomended', productControllers.getRecomendedProductsController);

  app.get('/phones', phoneControllers.getAllPhonesFromProductsController);

  app.get('/phones/:id', phoneControllers.getPhoneByIdController);

  app.get('/tablets', tabletControllers.getAllTabletsFromProductsController);

  app.get('/tablets/:id', tabletControllers.getTabletByIdController);
  
  app.get('/accessories', accessoryControllers.getAllAccessoriesFromProductsController);

  app.get('/accessories/:id', accessoryControllers.getAccessoryByIdController);

  return app;
};
