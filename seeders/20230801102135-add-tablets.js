'use strict';

import tablets from '../src/api/tablets.json';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'tablets',
      tablets,
    );
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete(
      'tablets',
      null,
      {},
    );
  }
};
