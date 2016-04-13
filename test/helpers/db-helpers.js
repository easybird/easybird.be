var dbTestSetup = require("../../model/db-test-setup");

function fillDbBefore() {
    beforeEach(function cleanDbAndAddAllFixturesBefore(done) {
        dbTestSetup.addAllFixtures(done);
    });

    afterEach(function cleanDbAfter(done) {
        dbTestSetup.cleanDb(done);
    });
}

module.exports = {
    fillDbBefore: fillDbBefore
};