var staticData = {};

var setStaticData = function(data) {
    staticData = data;
};
var getStaticData = function() {
    return staticData;
};

module.exports = {
    getStaticData: getStaticData,
    setStaticData: setStaticData
};