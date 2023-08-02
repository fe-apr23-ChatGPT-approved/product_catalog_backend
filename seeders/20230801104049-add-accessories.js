'use strict';

// import accessories from '../src/api/accessories.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const accessories = require('../src/api/accessories.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'accessories',
      accessories.map(accessory => (
        {...accessory, description: JSON.stringify(accessory.description)})));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      'accessories',
      null,
      {});
  },
};
