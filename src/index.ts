'use strict';

import { Server } from './server';

const PORT = process.env.PORT || 5000;

Server().listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀Server is running on http://localhost:${PORT} 🚀🚀🚀`);
});
