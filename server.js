const express = require('express')
const requireApi = require('./middleware/RequireApi')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(requireApi)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
