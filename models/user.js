var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Run = require("../models/run");
var Position = require("../models/position");

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    runsCompleted: {
        type: Number,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    totalKMs: {
        type: Number,
        required: false
    },
    runs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Run"
        }
    ]
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
