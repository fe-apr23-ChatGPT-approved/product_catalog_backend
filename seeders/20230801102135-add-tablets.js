'use strict';

// import tablets from '../src/api/tablets.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tablets = require('../src/api/tablets.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'tablets',
      tablets.map((tablet) => ({
        ...tablet,
        description: JSON.stringify(tablet.description),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('tablets', null, {});
  },
};
