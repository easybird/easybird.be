var app = require("../app");
var request = require("supertest")(app);
var helpers = require("./helpers/helpers");

describe("Existing API GET methods", function () {
        it("GET '/nl'", function (done) {
            var response = request.get("/nl");

            helpers.verifySuccess(response)
                .expect(function (res) {
                    helpers.containsAllSubstrings(res.text, ['<title>Easybird.be</title>', 'foto'], helpers.errorCallback)
                }).end(done);
        });

        it("GET '/en'", function (done) {
            var reponse = request.get("/en");

            helpers.verifySuccess(reponse)
                .expect(function (res) {
                    helpers.containsAllSubstrings(res.text, ['<title>Easybird.be</title>', 'photos'], helpers.errorCallback)
                }).end(done);
        });
    }
);