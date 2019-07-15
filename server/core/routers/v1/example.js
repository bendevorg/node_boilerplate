const express = require('express');
const router = express.Router();
const retrieveControllers = require('../../../utils/retrieveControllers');
const retrieveSchemas = require('../../../utils/retrieveSchemas');

const controllers = retrieveControllers(__filename.split('/routers')[1].split('.')[0]);
const schemas = retrieveSchemas(__filename.split('/routers')[1].split('.')[0]);

//  Notification APIs
router.get('/hi',
  controllers.hi
);

router.post('/hey',
  schemas.hey,
  controllers.hey
);

module.exports = router;
