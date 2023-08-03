'use strict';

import 'dotenv/config';
import { Server } from './server';

const PORT = process.env.PORT || 5000;
const API_URL = `${process.env.API_URL}:${PORT}`;

Server().listen(PORT, () => {
  console.log(`🚀Server is running on ${API_URL} 🚀🚀🚀`);
});
