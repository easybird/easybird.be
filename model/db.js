var mongoose = require('mongoose');
var config = require('../data/config/index.js');

var dbURI = process.env.DB_URI || config.getConfig().db.url;
if (process.env.DB_URI) {
    console.log("check another process env: " + process.env.ANOTHER_PROCESS_ENV);
}
var options = {
    server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
    replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
};

function addConnectionEvents(callback) {
    if (process.env.DB_URI) {
        console.log("add connection events: " + process.env.ANOTHER_PROCESS_ENV);
    }
    var conn = mongoose.connection;

    conn.on('connected', function () {
        console.log('Mongoose default connection open');
    });

    conn.once('open', function () {
        callback();
    });

    conn.on('error', function (err) {
        console.error.bind('Mongoose default connection error: ' + err);
    });

    conn.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
};

module.exports = {
    connectToDatabase: function connectToDatabase(callback) {
        addConnectionEvents(callback);
        mongoose.connect(dbURI, options);
    }
};