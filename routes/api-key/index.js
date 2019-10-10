const express = require('express')
const router = express.Router()

const generateAPI = require('../../database/api-key/create')

router.post('/create', (req, res) => {
    generateAPI(req, res)
})

module.exports = router