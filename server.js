const express = require('express')
const dotenv = require('dotenv')
const generateDB = require('./database/builder')

const requireApi = require('./middleware/RequireApi')

const app = express()
dotenv.config()

app.use(requireApi)

// > TODO: Implement users route
// > TODO: Implement videos route and database
// > TODO: Implement playlists route

app.post('/database/builder', (req, res) => {
    generateDB();
    res.send("Generating DB")
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
})