import express from 'express';
import router from '../server/core/router';

const developmentApp = express();

developmentApp.use('/', router);

module.exports = developmentApp;
