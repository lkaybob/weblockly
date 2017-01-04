var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weblockly' });
});

router.get('/server', function(req, res) {
  res.render('server', {title: 'Weblockly Serverside Demo'});
});

module.exports = router;
