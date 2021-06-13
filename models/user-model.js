// Mongoose 
const mongoose = require("mongoose");
const {Schema} = mongoose;
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// Schema 
const userSchema = new Schema({
    username: {
        type: String
        // require: true,
        // minlength: 1,
        // trim: true
    },
    password: {
        type: String
        // require: true,
        // minlength: 1,
        // trim: true
    }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;