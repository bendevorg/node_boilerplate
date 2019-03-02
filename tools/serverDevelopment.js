'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('../server/core/router.js');
const morgan = require('morgan');
const app = express();

app.use('/', router);
app.use(morgan('tiny'));

module.exports = app;
