const express = require('express');
const bodyParser = require('body-parser');
const logger = require('log-champ');
const retrieveRouters = require('../utils/retrieveRouters');
const errorMiddleware = require('../middlewares/errorMiddleware');

const routersPath = `${process.cwd()}/server/core/routers`;

let router = express.Router();
router.use(bodyParser.json());
router.use(logger.middleware);
router = retrieveRouters(router, routersPath);
router.use(errorMiddleware);

module.exports = router;
