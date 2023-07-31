import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

export const Server = () => {
  const app = express();
  dotenv.config();
  app.use(cors());

  app.use((request, response) => {
    response.send('🚀🚀🚀Hello everyone!🚀');
  });

  return app;
};
