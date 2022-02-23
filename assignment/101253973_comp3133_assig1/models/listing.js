const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
  listing_id: {
    type: String,
    required: [true, 'Please Enter listing_id'],
  },
  listing_title: {
    type: String,
    required: [true, 'Please Enter listing_title'],
  },
  description: {
    type: String,
    required: [true, 'Please Enter Description'],
  },
  street: {
    type: String,
    required: [true, 'Please Enter street'],
  },
  postal_code: {
    type: String,
    required: [true, 'Please Enter postal_code'],
  },
  price: {
    type: Number,
    required: true,
  },
  // email: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User',
  // },

  // username: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User',
  // },
  email: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 5,
    maxlength: 50,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
      return emailRegex.test(value)
    },
  },
    username: {
      type: String,
      required: [true, 'Please Enter User Name'],
      trim: true,
      lowercase: true,      
    },
  date: {
    type: Date,
    // default: Date.now,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = mongoose.model('Listing', listingSchema)
