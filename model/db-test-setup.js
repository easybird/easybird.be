var fixtures = require("node-mongoose-fixtures");
var staticData = require('../data/config/index');
var articleFixtures = require('../model/articles/article-fixture');
var db = require('./db');

var isDbReady = false;

function addAllFixtures(callback) {
    fixtures.reset();
    addDbAction(function () {
        doAddFixtures({Article: articleFixtures}, callback)
    });
}

function cleanDb(callback) {
    addDbAction(doCleanDb);

    function doCleanDb() {
        fixtures.reset();
        if (callback) {
            callback();
        }
    }
};

/**Helper functions**/
function addDbAction(callback) {
    if (!isDbReady) {
        prepareDb(callback);
    } else {
        callback();
    }

    function prepareDb(callback) {
        db.connectToDatabase(doPrepareDb);

        function doPrepareDb() {
            var config = staticData.getConfig();

            if (!config.db.isTestable) {
                throw new Error("Don't use this DB for testing! - " + config.db.url)
            }
            isDbReady = true;
            callback();
        }
    }
}

function doAddFixtures(fixtureObject, callback) {
    fixtures(
        fixtureObject,
        function (err) {
            if (err) {
                callback(err)
            }
            if (callback) callback();
        });
}

module.exports = {
    addAllFixtures: addAllFixtures,
    cleanDb: cleanDb
};