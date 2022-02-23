const mongoose = require('mongoose')
const validator = require('validator')
const Joi = require('joi')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please Enter User Name'],
    trim: true,
    lowercase: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: [true, 'Please Enter First Name'],
    trim: true,
    lowercase: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please Enter Last Name'],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
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
  createdListings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Listing',
    },
  ],
})

function validateUser(user) {
  const schema = Joi.object().keys({
    password: Joi.string()
      .min(6)
      .required()
      .max(20)
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/), //special/number/capital
  })
  return Joi.validate(user, schema)
}

module.exports = mongoose.model('User', userSchema)
module.exports.validate = validateUser
