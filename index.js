'use strict';

const express = require('express');
const _ = require('lodash');

const routes = require('./routes');

const app = express();

_.each(routes, (router, path) => {
  app.use(`/${path}`, router);
});

const PORT = 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
