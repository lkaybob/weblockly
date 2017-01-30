/**
 * Name: export_code.js
 *
 * Author: dogfooter219@gmail.com
 * Purpose: router api
 *
 * URL: /export
 *
 */
var mongoose = require('mongoose');
var Code = require('../model/code');

// return javascript by id
exports.javascriptIdGet = function(req, res, next) {
    Code.findOne({id: req.params.id}, {js:1, id:1, author:1}).exec(function (err, code) {
        if (err) return console.error(err);

        // Success
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(code.js);
        res.end();
    });
}

// return css tag by id
exports.cssIdGet = function(req, res, next) {
    Code.findOne({id: req.params.id}, {css:1, id:1, author:1}).exec(function (err, code) {
        if (err) return console.error(err);

        // Success
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(code.css);
        res.end();

    });
}



// Not Yet: Append innerHTML
/*
// return script tag by id
exports.idGet = function(req, res, next) {
Code.findOne({id: req.params.id}).exec(function (err, code) {
if (err) return console.error(err);

// Success
var wholeCode = 'document.getElementById(\''
+
code.author + code.id
+
'\').innerHTML = ' +
code.html




)}
}
*/ 
