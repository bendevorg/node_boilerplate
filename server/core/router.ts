import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'log-champ';
import retrieveRouters from '../utils/retrieveRouters';
import errorMiddleware from '../middlewares/errorMiddleware';

const routersPath = path.resolve(__dirname, './routers');

const router = express.Router();
router.use(bodyParser.json());
router.use(logger.middleware);
retrieveRouters(router, routersPath);
router.use(errorMiddleware);

export default router;
