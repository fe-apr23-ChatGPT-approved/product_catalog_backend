import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Product } from './models/Product.model';
import { Tablet } from './models/Tablet.model';
import { Phone } from './models/Phone.model';
import { Accessory } from './models/Accessory.modes';
import { initDB } from './db';

dotenv.config();

export const Server = () => {
  const app = express();

  app.use(cors());

  const sequelize = initDB();
  sequelize.addModels([Product]);

  app.use(express.static('public'));
  app.get('/products', async(req, res) => {
    
    try {
      const products = await Product.findAll();
      res.send(products);
  
    } catch (error) {
      res.sendStatus(500);
    }
  });

  app.get('/products/:id', async(req, res) => {
    const { id } = req.params;

    try {
      const phones = await Product.findByPk(id);

      if (!phones) {
        res.status(404).send({ message: 'No found product with this id' });

        return;
      }

      res.send(phones);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }

  });

  app.get('/phones', async(req, res) => {
    
    try {
      const phones = await Phone.findAll();
      res.send(phones);
  
    } catch (error) {
      res.sendStatus(500);
    }
  });

  app.get('/phones/:id', async(req, res) => {
    const { id } = req.params;

    try {
      const phones = await Phone.findByPk(id);

      if (!phones) {
        res.status(404).send({ message: 'No found phone with this id' });

        return;
      }

      res.send(phones);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }

  });

  app.get('/tablets', async (req, res) => {
    try {
      const tablets = await Tablet.findAll();
      res.send(tablets);
  
    } catch (error) {
      res.sendStatus(500);
    }
  });

  app.get('/tablets/:id', async(req, res) => {
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

  });
  
  app.get('/accessories', async (req, res) => {
    try {
      const accessories = await Accessory.findAll();
      res.send(accessories);
  
    } catch (error) {
      res.sendStatus(500);
    }
  });

  app.get('/accessories/:id', async(req, res) => {
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

  });

  return app;
};
