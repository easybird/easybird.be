var app = require("../app");
var request = require("supertest")(app);

describe("Existing API GET methods", function () {
        it("GET '/' does redirect to /nl", function (done) {
            var reponse = request.get("/").expect(302)
                .expect(function (res) {
                    if (res.redirect === false) {
                        throw new Error("function should redirect")
                    }
                    if (res.header.location !== "/nl") {
                        throw new Error("should redirect to /nl")
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
                        if (res.header.location !== "/nl") {
                            throw new Error("should redirect to /")
                        }
                    })
                    .end(done)
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
    }
)
;