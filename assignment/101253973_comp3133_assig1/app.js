const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')

const connectDB = require('./config/db')
const dotenv = require('dotenv')

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')
const isAuth = require('./middleware/auth')

const Listing = require('./models/listing')
var User = require('./models/user')

const app = express()

app.use(bodyParser.json())

app.use(isAuth)

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  }, console.log("http://localhost:3000/graphql is enable")),
 
)

dotenv.config()

connectDB()

app.listen(3000)
