const { model } = require("mongoose");
// exporting an object containing all of our models

module.exports = {
    Exercise: require("./workout"),
    Stats: require("./stats")
}