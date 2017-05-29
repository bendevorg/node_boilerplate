const login = require('../controllers/login');
const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser').json();

router.use(bodyParser);

router.get('/', (req, res) => {res.status(200).json({msg: 'oi'})});

module.exports = router;