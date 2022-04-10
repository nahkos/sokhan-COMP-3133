export type Booking = {
    _id: string;
    listing: Listing
    user: User
    createdAt: string;
    updatedAt: string;
  }

export type Listing = {
    _id: string;
    listing_id: string;
    listing_title: string;
    description: string;
    street: string;
    postal_code: string;
    price: number;
    email: User;
    username: string;
    date: string;
    creator: String;
}

export type User = {
    _id: string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    createdListings: Listing[];
  }

export type AuthData = {
    userId: string;
    token: string;
    tokenExpiration: number;
  }

export type Query = {
    listings: [Listing];
    bookings: [Booking];
    login(email: string, password: string): AuthData;
}