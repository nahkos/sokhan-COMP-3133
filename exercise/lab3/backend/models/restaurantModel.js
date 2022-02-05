import mongoose from 'mongoose'

const restaurantSchema = mongoose.Schema({
  address: {
    building: { type: String, required: false },
    street: { type: String, required: false },
    zipcode: { type: String, required: false },
  },
  city: { type: String, required: false },
  cuisine: { type: String, required: false },
  name: { type: String, required: false },
  restaurant_id: { type: String, required: false },
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export default Restaurant
