'use strict';

const PORT = process.env.PORT || 5000;

import 'dotenv/config';
import { Server } from './server';

Server().listen(PORT, () => {
  console.log(`🚀Server is running on http://localhost:${PORT} 🚀🚀🚀`);
});
