const express = require('express');
const router = express.Router();
const retrieveControllers = require('../../utils/retrieveControllers');
const retrieveSchemas = require('../../utils/retrieveSchemas');
const path = require('path');

const controllers = retrieveControllers(path.basename(__filename).split('.')[0]);
const schemas = retrieveSchemas(path.basename(__filename).split('.')[0]);

//  Notification APIs
router.get('/hi',
  controllers.hi
);

router.post('/hey',
  schemas.hey,
  controllers.hey
);

module.exports = router;