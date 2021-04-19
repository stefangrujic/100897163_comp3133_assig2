const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    hotel_name:{type: String},
    street: {type: String},
    city: {type: String},
    postal_code: {type: String},
    price: {type: Number},
    email: {type: String},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;