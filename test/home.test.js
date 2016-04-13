var app = require("../app");
var request = require("supertest")(app);
var helpers = require("./helpers/helpers");

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

        describe("An unknown path ", function () {
            var randomString = helpers.getRandomPathReq();
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
