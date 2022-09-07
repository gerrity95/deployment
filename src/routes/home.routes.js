const express = require('express');
const router = express.Router();

const indexController = require('../controllers/home.controller');

router.get('/', indexController.home);

router.post('/deploy', indexController.deploy);

module.exports = router;