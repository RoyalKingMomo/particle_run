var mongoose = require("mongoose");

var positionSchema = new mongoose.Schema({
    lat: Number,
    lng: Number
});
module.exports = mongoose.model("Position", positionSchema);
