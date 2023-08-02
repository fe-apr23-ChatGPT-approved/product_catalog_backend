'use strict';

// import phones from '../src/api/phones.json';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const phones = require('../src/api/phones.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'phones',
      phones.map((phone) => ({
        ...phone,
        description: JSON.stringify(phone.description),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
