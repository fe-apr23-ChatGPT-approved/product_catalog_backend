import { Sequelize } from 'sequelize-typescript';
import { models } from './models';
import dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.DB_URI || '';

export const initDB = () => (
  new Sequelize(DB_URI, {
    models,
    dialectOptions: {
      ssl: true,
    },
  })
);
