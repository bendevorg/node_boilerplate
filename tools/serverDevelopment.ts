import express from 'express';
import morgan from 'morgan';
import router from '../server/core/router';

const developmentApp = express();

developmentApp.use('/', router);
developmentApp.use(morgan('tiny'));

module.exports = developmentApp;
