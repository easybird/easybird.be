var fixtures = require("node-mongoose-fixtures");
var staticData = require('../data/config/index');

function prepareDb() {
    var config = staticData.getConfig();

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