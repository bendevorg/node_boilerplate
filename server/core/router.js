const express = require('express');
const bodyParser = require('body-parser');
const retrieveRouters = require('../utils/retrieveRouters');

const routersPath = process.cwd() + '/server/core/routers';

let router = express.Router();
router.use(bodyParser.json());
router = retrieveRouters(router, routersPath);

// Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hi!' });
});

module.exports = router;
