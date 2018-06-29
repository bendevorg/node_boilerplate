const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();
router.use(bodyParser.json());

const routersPath = process.cwd() + '/server/core/routers';

// Get our routers
fs.readdirSync(routersPath).forEach(file => {
  if (file.indexOf('.js') !== -1)
    router.use('/' + file.split('.')[0], require(routersPath + '/' + file));
});

// Placeholder API
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hi!' });
});

module.exports = router;
