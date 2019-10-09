const express = require('express')
const router = express.Router()

router.use('/api-key', require('./api-key'))
router.use('/videos', require('./videos'))
router.use('/playlist', require('./playlist'))

module.exports = router