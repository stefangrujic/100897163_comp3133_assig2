const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     hotel_id: ID!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     user_id: User!
   }

   type User {
     user_id: ID!
     username: String!
     password: String!
     email: String!
   }

   type Booking {
    hotel_id: Hotel!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    user_id: User!
   }

   type Query {
     getHotel: [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]

     getUser: [User]

     getBooking: [Booking]
   }

   type Mutation {
    addHotel(hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!,
        user_id: String!): Hotel

    updateHotel(id: String!,
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!): Hotel
        
    deleteHotel(id: ID!): Hotel

    addUser(username: String!
     password: String!
     email: String!
    ): User

    addBooking(
      hotel_id: String!
      booking_date: String!
      booking_start: String!
      booking_end: String!
      user_id: String!
    ): Booking

    }
`