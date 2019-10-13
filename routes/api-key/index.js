const express = require('express')
const router = express.Router()

const { createKey, getAllKeys, getSpecifiedKey } = require('../../database/api-key')

router.post('/', (req, res) => {
    createKey({}).then(returnValues => {
            res.status(200).json({ data: returnValues })
        })
        .catch(err => {
            res.status(500).json({ error: "Creation of new API key failed" })
        })
})

router.get('/', (req, res) => {
    getAllKeys({}).then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Requesting all keys failed!" })
        })
})

module.exports = router