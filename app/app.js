// eslint-disable-next-line import/no-extraneous-dependencies
const debug = require('debug')('app');
const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('./routers/router');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, _, next) => {
  debug(req.url);
  next();
});

app.use(router);

module.exports = app;
