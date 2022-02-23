const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Booking {
      _id: ID!
      listing: Listing!
      user: User!
      createdAt: String!
      updatedAt: String!
    }

    type Listing {
      _id: ID!
      listing_id: String!
      listing_title: String!      
      description: String!
      street: String!
      postal_code: String!
      price: Float!
      email: User!
      username: String!
      date: String!
      creator: User!
    }

    type User {
      _id: ID!
      username: String!
      firstname: String!
      lastname: String!
      password: String
      email: String!
      createdListings: [Listing!]
    }

    type AuthData {
      userId: ID!
      token: String!
      tokenExpiration: Int!
    }
    
    input ListingInput {
      listing_id: String!
      listing_title: String!      
      description: String!
      street: String!
      postal_code: String!
      price: Float!
      email: String!
      username: String!
      date: String!
    }

    input UserInput {
      username: String!
      firstname: String!
      lastname: String!
      password: String!
      email: String!
    }

    type RootQuery {
        listings: [Listing!]!
        bookings: [Booking!]!
        login(email: String!, password: String!): AuthData!
    }
    
    type RootMutation {
        createListing(listingInput: ListingInput): Listing
        createUser(userInput: UserInput): User
        bookListing(listingId: ID!): Booking!
        cancelBooking(bookingId: ID!): Listing!
    }

      schema {
          query: RootQuery
          mutation: RootMutation
      }
      `)
