'use strict';

import phones from '../src/api/phones.json';

export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'phones',
    phones,
  );
}
export async function down(queryInterface) {
  await queryInterface.bulkDelete(
    'phones',
    null,
    {},
  );
}
