'use strict';

const PORT = process.env.PORT || 5000;

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
// import { InitAppRoutes } from './initAppRoutes';
import { initDB } from './initDB';

export const Server = () => {
  const app = express();
  app.use(cors( { origin: process.env.CLIENT_URL }));

  initDB();

  // InitAppRoutes(app);

  app.use((request, response) => {
    response.send('🚀🚀🚀Hello everyone!🚀');
  });

  return app;
};

Server().listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀Server is running on http://localhost:${PORT} 🚀🚀🚀`);
});
