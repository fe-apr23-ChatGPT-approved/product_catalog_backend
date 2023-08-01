'use strict';

import accessories from '../src/api/accessories.json';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'accessories',
      accessories,
    );
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(
      'accessories',
      null,
      {},
    );
  }
};
