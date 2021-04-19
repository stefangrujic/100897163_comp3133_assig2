const User = require('./models/User');
const Hotel = require('./models/Hotel');
const Booking = require('./models/Booking');

exports.resolvers = {
    Query:{
        getHotel: async (parent, args) =>{
            return await Hotel.find({});
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({"city" : args.city});
        },
        getHotelByName: async (parent, args) => {
            return await Hotel.find({"hotel_name" : args.hotel_name});
        },
        getUser: async (parent, args) =>{
            return await User.find({});
        },
        getBooking: async (parent, args) =>{
            return await Booking.find({});
        }
    },

    Mutation:{
        addHotel: async (partent, args) =>{
            console.log(args)

           // let findUser_id = await User.findOne({ user_id: args.user_id });
            let newHotel = new Hotel({
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                user_id: args.user_id,
            });

            return await newHotel.save();
        },
        addUser: async (parent, args) =>{
            console.log(args)

            let newUser = new User({
                username: args.username,
                password: args.password,
                email: args.email
            });

            return await newUser.save();
        },
        addBooking: async (parent, args) =>{
            console.log(args)

            let newBooking = new Booking({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id
            })

            return await newBooking.save();
        }
    }
}