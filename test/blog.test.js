var app = require("../app");
var request = require("supertest")(app);
var helpers = require("./helpers/helpers");
var dbHelpers = require("./helpers/db-helpers");

describe("The Blog module", function () {
    dbHelpers.fillDbBefore();

    var articleFixtures = require('../model/articles/article-fixture');

    it("GET /blog route gets redirected to en/blog", function () {
        request.get('/blog')
            .expect(302)
            .expect(function (res) {
                if (!res.redirect) {
                    throw new Error("function should redirect")
                }
                if (res.header.location !== "/en/blog") {
                    throw new Error("should redirect to /en/blog but instead was redirected to " + res.header.location)
                }
            })
    });
    it("GET /en/blog successful", function (done) {
        var response = request.get("/en/blog");

        var expectedData = ['<title>Blog - Easybird.be</title>'];
        helpers.verifySuccess(response)
            .expect(function (res) {
                helpers.containsAllSubstrings(res.text, expectedData, helpers.errorCallback)
            }).end(done);
    });

    it("GET specific article gets redirected to en/blog", function () {
        request.get("/" + articleFixtures[0].route)
            .expect(302)
            .expect(function (res) {
                if (!res.redirect) {
                    throw new Error("function should redirect")
                }
                if (res.header.location !== "/en/blog" + articleFixtures[0].route) {
                    throw new Error("should redirect to /en/blog but instead was redirected to " + res.header.location)
                }
            })
    });

    it("GET specific article route", function (done) {
        var response = request.get("/en/blog/" + articleFixtures[0].route);

        response.expect(function (res) {
            console.log("redirect"+ res.header.location)
        });
        //TODO fix this!
        response.expect(302).end(done);
        //var expectedData = ['<title>' + articleFixtures[0].title + ' - Blog - Easybird.be</title>', articleFixtures[0].title, articleFixtures[0].subTitle];
        //
        //helpers.verifySuccess(response)
        //    .expect(function (res) {
        //        helpers.containsAllSubstrings(res.text, expectedData, helpers.errorCallback)
        //    }).end(done);
    });
});
