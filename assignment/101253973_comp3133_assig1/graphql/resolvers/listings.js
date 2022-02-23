const Listing = require('../../models/listing')
const User = require('../../models/user')

const { transformListing } = require('./merge')

module.exports = {
  listings: async () => {
    try {
      const listings = await Listing.find()
      return listings.map((listing) => {
        return transformListing(listing)
      })
    } catch (err) {
      throw err
    }
  },
  createListing: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!')
    }
    const listing = new Listing({
      listing_id: args.listingInput.listing_id,
      listing_title: args.listingInput.listing_title,
      description: args.listingInput.description,
      street: args.listingInput.street,
      postal_code: args.listingInput.postal_code,
      price: +args.listingInput.price,
      date: new Date(args.listingInput.date),
      username: args.listingInput.username,
      creator: req.userId,
    })
    let createdListing
    try {
      const result = await listing.save()
      createdListing = transformListing(result)
      const creator = await User.findById(req.userId)

      if (!creator) {
        throw new Error('Sorry that user has not been found.')
      }
      creator.createdListings.push(listing)
      await creator.save()

      return createdListing
    } catch (err) {
      console.log(err)
      throw err
    }
  },
}
