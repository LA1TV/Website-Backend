const express = require('express')
const helmet = require('helmet')

const generateAPIKey = require('./database/api-key/create')

const requireApi = require('./middleware/RequireApi')

const app = express()

// > Middleware for security headers
app.use(requireApi)
app.use(helmet())

// > TODO: Implement users route
// > TODO: Implement videos route and database
// > TODO: Implement playlists route

app.post('/database/API', (req, res) => {
    generateAPIKey();
    res.send("Generating API - Currently in progress")
})


app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
})