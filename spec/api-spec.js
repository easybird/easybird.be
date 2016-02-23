var app = require("../app");
var request = require("supertest")(app);

describe("Existing API GET methods", function () {
        it("GET '/' does redirect to /nl", function (done) {
            request.get("/")
                .expect(302)
                .expect(function (res) {
                    if (!res.redirect) {
                        throw new Error("function should redirect")
                    }
                    if (res.header.location !== "/en/") {
                        throw new Error("should redirect to /en but instead was redirected to " + res.header.location)
                    }
                })
                .end(done)
        });

        it("GET '/nl'", function (done) {
            var reponse = request.get("/nl");

            verifySuccess(reponse)
                .expect(function (res) {
                    containsAllSubstrings(res.text, ['<title>Easybird.be</title>', 'foto'], errorCallback)
                }).end(done);
        });

        it("GET '/en'", function (done) {
            var reponse = request.get("/en");

            verifySuccess(reponse)
                .expect(function (res) {
                    containsAllSubstrings(res.text, ['<title>Easybird.be</title>', 'photos'], errorCallback)
                }).end(done);
        });

        describe("An unknown path ", function () {
            var randomString = getRandomPathReq();
            it(randomString + " should be redirected to /", function (done) {
                request.get(randomString)
                    .expect(302)
                    .expect(function (res) {
                        if (res.redirect === false) {
                            throw new Error("function should redirect")
                        }
                        var redirectUrl = "/en" + randomString;
                        if (res.header.location !== redirectUrl) {
                            throw new Error("should redirect to " + redirectUrl + " but instead was redirected to " + res.header.location)
                        }
                    })
                    .end(done)
            });
        });

    }
);

describe("The Blog module", function () {
    var articles = require('../model/articles/index');

    beforeAll(function() {
        var dbTestSetup = require("../model/db").dbTestSetup();
        dbTestSetup.addArticleFixtures();
    });

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

        var expectedData = ['<title>Blog - Easybird.be</title>', articles.articleFixture[0].title, articles.articleFixture[0].subTitle];
        verifySuccess(response)
            .expect(function (res) {
                containsAllSubstrings(res.text, expectedData, errorCallback)
            }).end(done);
    });

    it("GET specific article gets redirected to en/blog", function () {
        request.get("/" + articles.articleFixture[0].route)
            .expect(302)
            .expect(function (res) {
                if (!res.redirect) {
                    throw new Error("function should redirect")
                }
                if (res.header.location !== "/en/blog" + articles.articleFixture[0].route) {
                    throw new Error("should redirect to /en/blog but instead was redirected to " + res.header.location)
                }
            })
    });

    it("GET specific article route", function (done) {
        var response = request.get("/en/blog/" + articles.articleFixture[0].route);

        var expectedData = ['<title>' + articles.articleFixture[0].title + ' - Blog - Easybird.be</title>', articles.articleFixture[0].title, articles.articleFixture[0].subTitle];

        verifySuccess(response)
            .expect(function (res) {
                containsAllSubstrings(res.text, expectedData, errorCallback)
            }).end(done);
    });
});

//-----------helper functions------------------//
function errorCallback(error) {
    if (error) {
        throw new Error(error);
    }

}

function verifySuccess(response) {
    response
        .expect(200)
        .expect(function (res) {
            if (res.text === undefined) {
                throw new Error("missing data");
            }
            containsAllSubstrings(
                res.text,
                ['<html>', '</html>', '<head>', '</head>', '<body>', '</body>', '<header>', '</header>', '<main>', '</main>'],
                function (error) {
                    errorCallback("the text: " + res.text + ' should contain all basic html tags.' + error)
                })
        });
    return response;
}

function containsAllSubstrings(str, items, errorCallback) {
    for (var i in items) {
        var item = items[i];
        if (str.indexOf(item) === -1) {
            errorCallback("Does not contain substring: " + item);
        }
    }
}

function getRandomPathReq() {
    return '/' + Math.random().toString(36).substring(7)
}
