/**
 * Name: db-config.js
 *
 * Author: dogfooter219@gmail.com
 * Purpose: config dbsettings
 *
 */

// MongoDB
var mongoose = require('mongoose');

var db = mongoose.connection;

// db event handler
db.on('error', console.error);
db.once('open', function () {
    console.log("Connected to mongod server")
});

mongoose.connect('mongodb://localhost/weblockly_code_storage');

module.exports = mongoose;
