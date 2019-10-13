const express = require('express')
const router = express.Router()

router.use('/api/key', require('./api-key'))
router.use('/api/videos', require('./videos'))
router.use('/api/playlist', require('./playlist'))

router.use('/user', require('./user'))

module.exports = router