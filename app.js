'use strict';

const express = require('express');
const _ = require('lodash');

const routes = require('./routes');

const app = express();

_.each(routes, (router, path) => {
  app.use(`/${path}`, router);
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${process.env.PORT}`);
});
