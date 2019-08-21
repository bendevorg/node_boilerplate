const express = require('express');
const bodyParser = require('body-parser');
const retrieveRouters = require('../utils/retrieveRouters');
const errorMiddleware = require('../middlewares/errorMiddleware');

const routersPath = `${process.cwd()}/server/core/routers`;

let router = express.Router();
router.use(bodyParser.json());
router = retrieveRouters(router, routersPath);
router.use(errorMiddleware);

module.exports = router;
