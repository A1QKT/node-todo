var configValues = require("./config.json");

module.exports = {
    getDBConectionString: function () {
        return configValues.URLEndpoint;
    }
}