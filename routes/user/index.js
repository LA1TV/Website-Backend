const express = require('express')
const router = express.Router()

router.use('/login', require('./login'))
router.use('/register', require('./register'))

module.exports = router