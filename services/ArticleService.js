var MongoClient = require("mongodb").MongoClient;
var config = require('../data/config');

var queryAllArticles = function (db, callback) {
    var cursor = db.collection('articles').find().sort({"publicationDate": -1});
    var articles = [];
    cursor.each(function (err, result) {
        if (result != null) {
            articles.push(result);
        } else {
            callback(null, articles);
        }
    });
};

var queryByRoute = function (route, db, callback) {
    var cursor = db.collection('articles').find({"route": route});
    var articles = [];
    cursor.each(function (err, result) {
        if (result != null) {
            articles.push(result);
        } else {
            callback(null, articles);
        }
    });
};

var getArticles = function (callback) {
    MongoClient.connect(getUrl(), function (err, db) {
        if (db) {
            queryAllArticles(db, function (err, result) {
                db.close();
                if (err) {
                    console.log(err);
                    callback()
                } else {
                    callback(null, result);
                }
            });
        } else {
            callback();
        }
    });
};

var findByRoute = function (route, callback) {
    MongoClient.connect(getUrl(), function (err, db) {
        if (db) {
            queryByRoute(route, db, function (err, result) {
                db.close();
                if (err || result.length === 0) {
                    console.log(err);
                    callback()
                } else {
                    if (result.length > 1) {
                        console.log('more than one article found with route ' + route)
                    }
                    callback(null, result[0]);
                }
            });
        } else {
            callback();
        }
    });
};

function getUrl() {
    return config.getStaticData().config.db.url;
}

module.exports = {
    getArticles: getArticles,
    findByRoute: findByRoute
};