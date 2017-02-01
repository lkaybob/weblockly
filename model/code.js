/**
 * Name: code.js
 *
 * Author: dogfooter219@gmail.com
 * Purpose: model Schema for represent code data
 * 
 * DBMS: MongoDB
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var codeSchema = new Schema({
    html: String,
    css: String,
    js: String,
    author: String,
    id: String,
    domId: String

});

module.exports = mongoose.model('code', codeSchema);
