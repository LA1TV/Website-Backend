const express = require('express')
const dotenv = require('dotenv')
const generateAPIKey = require('./database/api-keys')

const requireApi = require('./middleware/RequireApi')

const app = express()
dotenv.config()

app.use(requireApi)

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