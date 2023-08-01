import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDB } from './initDB';

//its for test i will remove it later
const phones = [
  {id: 1, name: 'iphone 11'},
  {id: 2, name: 'iphone 12'},
];

export const Server = async () => {
  
  const app = express();
  dotenv.config();
  
  const PORT = process.env.PORT || 5000;
  const CLIENT_URL = process.env.CLIENT_URL;
  const API_URL = `${process.env.API_URL}:${PORT}`;
  
  app.use(cors({origin: CLIENT_URL}));

  const sequelize = initDB();

  const res = await sequelize.authenticate();

  console.log(res);

  //its for test i will remove it later
  app.get('/phones', (request, response) => {
    response.send(phones);
  });

  app.use((request, response) => {
    response.send('🚀🚀🚀Hello everyone!🚀');
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀Server is running on ${API_URL} 🚀🚀🚀`);
  });
};
