const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const UserSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true

    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    backgroud: {
        type: String,
        required: true
    }
});

const User = mongoose.Schema("User", UserSchema);

module.exports = { UserSchema };