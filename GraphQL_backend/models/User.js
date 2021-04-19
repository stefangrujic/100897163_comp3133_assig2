const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Please enter username'],
        unique: [true, "Username already exists"],
        trim: true,
        lowercase: true
    },
    password:{
        type: String
    },
    email:{
        type: String,
        unique: [true, "email already exists"],
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;