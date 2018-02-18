var mongoose = require("mongoose");
// passportLocalMongooseEmail = require('passport-local-mongoose-email');
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: {type: String, required: false},
    password: {type: String, required: false},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false}
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
