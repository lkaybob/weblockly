var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web From Scratch' });
  //res.sendFile(path.join(__dirname, '../public/test.html'));
});

module.exports = router;
