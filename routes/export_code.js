/**
 * Name: export_code.js
 *
 * Author: dogfooter219@gmail.com
 * Purpose: ajax api path router
 *
 * URL: /export
 * 
 */

var router = require('express').Router();
var api = require('../api/export_code');

router.post('/', api.rootPost);

module.exports = router;
