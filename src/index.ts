'use strict';

import express from 'express';
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors());

app.use((request, response) => {
  response.send('Hello!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀Server is running on http://localhost:${PORT} 🚀🚀🚀`);
});
