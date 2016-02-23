var fixtures = require("node-mongoose-fixtures");

function prepareDb() {
    var config = require("../data/config").getConfig();

    if (!config.db.isTestable) {
        throw new Error("Don't use this DB for testing! - " + config.db.url)
    }
    fixtures.reset();
}

function addArticleFixtures() {
    var articles = require('../model/articles');
    fixtures(
        {
            Article: articles.articleFixture
        }, function (err) {
            if (err) {
                console.log('error: ' + err)
            }
        });
};

module.exports = function () {
    prepareDb();
    return {
        addArticleFixtures: addArticleFixtures
    }
};