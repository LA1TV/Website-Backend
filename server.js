const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const requireApi = require('./middleware/RequireApi')

const app = express()

const routes = require('./routes')

// > Middleware for security headers and basic security
app.use(requireApi)
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// > TODO: Implement users route
// > TODO: Implement videos route and database
// > TODO: Implement playlists route

// > Re-route all routes to the route controller
app.use('/', routes)

app.listen(8000, () => {
  console.log('LA1TV API is starting up. Console logging is not used in this version.')
})
