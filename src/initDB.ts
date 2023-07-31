/* eslint-disable max-len */
import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

const URI = process.env.DB_URI || '';

export const initDB = () => (
  new Sequelize( URI, {
    dialectOptions: {
      ssl: true
    }
  } )
);
