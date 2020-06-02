var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id', destinationsCtrl.create);

module.exports = router;