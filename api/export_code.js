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

exports.rootPost = function (req, res, next) {
    
    // [Temporary] made id by time 
    var codeId = (new Date).getTime();

    // get whole code in requset body
    // [Warning] Object.assign(..) is ES6 method
    var code = new Code(Object.assign(req.body, {
        author: "dev",
        id: codeId
    }));

    code.save(function (err, code) {
        if (err) return console.error(err);

        // Success
        javascriptUrl = '/javascript/' + code.id;
        cssUrl = '/css/' + code.id;

        res.json({
            cdnUrl: {
                javascript: javascriptUrl,
                css: cssUrl 
            }
        });
    });
} 
