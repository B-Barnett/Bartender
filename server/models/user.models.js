const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        // minLength: []
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        // minLength: []
    },
    bookmarks: {
        type: String,
    },
})

module.exports.User = mongoose.model("User", UserSchema)