const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    booking_date:{type: String},
    booking_start:{type: String},
    booking_end:{type: String},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
})

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;