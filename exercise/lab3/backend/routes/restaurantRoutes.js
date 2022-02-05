import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Restaurant from '../models/restaurantModel.js'

// @desc Fetch all restaurant
// @route GET /restaurants
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({})

    res.json(restaurants)
  })
)

// @desc Fetch all restaurant with cuisine: Japanese
// @route GET /restaurants/cuisine/Japanese
// @access Public
router.get(
  '/cuisine/Japanese',
  asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({ cuisine: 'Japanese' }).exec()

    if (restaurants) {
      res.json(restaurants)
    } else {
      res.status(404).json({ message: 'Restaurant not found' })
    }
  })
)

// @desc Fetch all restaurant with cuisine: Bakery
// @route GET /restaurants/cuisine/Bakery
// @access Public
router.get(
  '/cuisine/Bakery',
  asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({ cuisine: 'Bakery' }).exec()

    if (restaurants) {
      res.json(restaurants)
    } else {
      res.status(404).json({ message: 'Restaurant not found' })
    }
  })
)

// @desc Fetch all restaurant with cuisine: Italian
// @route GET /restaurants/cuisine/Italian
// @access Public
router.get(
  '/cuisine/Italian',
  asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({ cuisine: 'Italian' }).exec()

    if (restaurants) {
      res.json(restaurants)
    } else {
      res.status(404).json({ message: 'Restaurant not found' })
    }
  })
)

// @desc Fetch all restaurant by the restaurant_id in Ascending
// @route GET /restaurants/cuisine/Italian
// @access Public
router.get(
  '/restaurants?sortBy=ASC',
  asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find()
      .sort({ restaurant_id: 1 })
      .exec()

    if (restaurants) {
      res.json(restaurants)
    } else {
      res.status(404).json({ message: 'Restaurant not found' })
    }
  })
)

// @desc Fetch all restaurant by the restaurant_id in Descending
// @route GET /restaurants/cuisine/Italian
// @access Public
router.get(
  '/Descending',
  asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find()
      .sort({ "restaurant_id": -1 })
      

    if (restaurants) {
      res.json(restaurants)
    } else {
      res.status(404).json({ message: 'Restaurant not found' })
    }
  })
)

// @desc Fetch all restaurant all cuisines are equal to Delicatessen
// @route GET /restaurants/cuisine/Italian
// @access Public
router.get(
    '/Delicatessen',
    asyncHandler(async (req, res) => {
      const restaurants = await Restaurant.find({ $and: [ {cuisine: { $eq: 'Delicatessen' } }, { city: { $ne: 'Brooklyn' } } ]} )
        
        
  
      if (restaurants) {
        res.json(restaurants)
      } else {
        res.status(404).json({ message: 'Restaurant not found' })
      }
    })
  )

// @desc Fetch single restaurant
// @route GET /restaurants/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id)

    if (restaurant) {
      res.json(restaurant)
    } else {
      res.status(404).json({ message: 'Restaurant not found' })
    }
  })
)

export default router
