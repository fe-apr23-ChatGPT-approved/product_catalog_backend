/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_HOSTNAME = process.env.DB_HOSTNAME;
const DB_PORT = process.env.DB_PORT;

const dbCredantials = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOSTNAME,
  port: DB_PORT
};

const dialectConfig = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  }
};

module.exports = {
  development: {
    ...dbCredantials,
    ...dialectConfig,
  },
  test: {
    ...dbCredantials,
    ...dialectConfig,
  },
  production: {
    ...dbCredantials,
    ...dialectConfig,
  }
};
