import { initDB } from './initDB';
import { Accessory } from './models/Accessory.modes';
import { Phone } from './models/Phone.model';
import { Tablet } from './models/Tablet.model';

export const syncTables = async () => {
  initDB();

  await Accessory.sync();
  await Phone.sync();
  await Tablet.sync();

  console.log('tables created');

};

syncTables();
