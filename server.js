const express = require('express')
const helmet = require('helmet')

const requireApi = require('./middleware/RequireApi')

const app = express()

const routes = require('./routes')

// > Middleware for security headers and basic security
app.use(requireApi)
app.use(helmet())

// > TODO: Implement users route
// > TODO: Implement videos route and database
// > TODO: Implement playlists route
app.use('/', routes)

app.listen(8000, () => {
    console.log('LA1TV API is starting up. Console logging is not used in this version.')
})