'use strict';

// import products from '../src/api/products.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const products = require('../src/api/products.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'products',
      products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      'products',
      null,
      {});
  },
};
