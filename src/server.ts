'use strict';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const CLIENT_URL = process.env.CLIENT_URL;

export const Server = () => {
  const app = express();
  dotenv.config();

  app.use(cors({ origin: CLIENT_URL }));

  app.use(express.static('public'));

  app.use((request, response) => {
    response.send('🚀🚀🚀Hello everyone!🚀');
  });

  return app;
};
