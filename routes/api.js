var express = require('express');
var router = express.Router();

var api = require('../api.js');

router.get('/:param', function(req, res, next) {
  res.json(api(req.params.param));
});

module.exports = router;
