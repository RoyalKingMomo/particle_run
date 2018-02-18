var mongoose = require("mongoose");

var runSchema = new mongoose.Schema({
    position: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Position"
        }
    ]
    // date: Date,
    // totalDistance: Number,
    // completionTime: Number,
    // averageSpeed: Number
});
module.exports = mongoose.model("Run", runSchema);
