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

module.exports = {
    getRandomPathReq: getRandomPathReq,
    containsAllSubstrings: containsAllSubstrings,
    errorCallback: errorCallback,
    verifySuccess: verifySuccess
};