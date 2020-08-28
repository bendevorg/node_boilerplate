import express from 'express';
import router from '../server/core/router';

const productionApp = express();
productionApp.use('/', router);

module.exports = productionApp;
