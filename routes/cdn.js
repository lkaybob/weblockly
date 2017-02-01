/**
 * Name: cdn.js
 *
 * Author: dogfooter219@gmail.com
 * Purpose: ajax api path router
 *
 * URL: /cdn
 * 
 */

var router = require('express').Router();
var api = require('../api/cdn');
var Code = require('../model/code');

router.get('/javascript/:id', api.javascriptIdGet);
router.get('/css/:id', api.cssIdGet);

module.exports = router;

