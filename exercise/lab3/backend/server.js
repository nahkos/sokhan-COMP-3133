import express from 'express'
import dotenv from 'dotenv'
import color from 'colors'
import connectDB from './config/db.js'

import restaurantRoutes from './routes/restaurantRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/restaurants', restaurantRoutes)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
